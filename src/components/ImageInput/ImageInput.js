import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { loadModels, getFullFaceDescription,createMatcher } from '../../api/face';
import { connect } from 'react-redux';
import { updateFace } from "../../actions/users";
// Import image to test API
const testImg = require('../../img/test.jpeg');

// Import face profile
const JSON_PROFILE = require('../../descriptors/newVisitors.json');


// Initial State
const INIT_STATE = {
    imageURL: testImg,
    fullDesc: null,
    detections: null,
    descriptors: null,
    match: null
};

class ImageInput extends Component {
    constructor(props) {
        super(props);
        this.state = { ...INIT_STATE, faceMatcher: null };
    }

    componentWillMount = async () => {

        await loadModels();
        this.setState({ faceMatcher: await createMatcher(JSON_PROFILE) });
        //await this.handleImage(this.state.imageURL);
    };

    componentWillReceiveProps = async (nextProps) =>{
      nextProps &&
        await this.setState({
          imageURL:nextProps.img
      });
        await this.handleImage(nextProps.img,nextProps.name);
    };

    handleImage = async (image = this.state.imageURL,name) => {
        await getFullFaceDescription(image).then(fullDesc => {
            console.log('full',fullDesc);
            if (!!fullDesc) {
                if(fullDesc.length > 0){
                     const newFace =  fullDesc.map(fd => fd.descriptor)[0];
                    let updatedJsonProfile = {
                        ...JSON_PROFILE,
                        [`${name}`]:{name : name, descriptors: [[...newFace]]}
                    };
                       name && this.props.updateFace(updatedJsonProfile);
                    console.log('updatred',updatedJsonProfile);
                    alert('Фото успішно зроблено.Заповніть дані юзера.');
                }
                console.log('jsonprofile',JSON_PROFILE);

                this.setState({
                    fullDesc,
                    detections: fullDesc.map(fd => fd.detection),
                    descriptors: fullDesc.map(fd => fd.descriptor)
                });
            }
        });

        if (!!this.state.descriptors && !!this.state.faceMatcher) {
            let match = await this.state.descriptors.map(descriptor =>
                this.state.faceMatcher.findBestMatch(descriptor)
            );
            this.setState({ match });
        }
    };

    handleFileChange = async event => {
        this.resetState();
        await this.setState({
            imageURL: URL.createObjectURL(event.target.files[0]),
            loading: true
        });
        this.handleImage();
    };

    resetState = () => {
        this.setState({ ...INIT_STATE });
    };

    render() {
        const { imageURL, detections, match } = this.state;

        let drawBox = null;
        if (!!detections) {
            drawBox = detections.map((detection, i) => {
                let _H = detection.box.height;
                let _W = detection.box.width;
                let _X = detection.box._x;
                let _Y = detection.box._y;
                return (
                    <div key={i}>
                        <div
                            style={{
                                position: 'absolute',
                                border: 'solid',
                                borderColor: 'blue',
                                height: _H,
                                width: _W,
                                transform: `translate(${_X}px,${_Y}px)`
                            }}
                        >
                            {!!match && !!match[i] ? (
                                <p
                                    style={{
                                        backgroundColor: 'blue',
                                        border: 'solid',
                                        borderColor: 'blue',
                                        width: _W,
                                        marginTop: 0,
                                        color: '#fff',
                                        transform: `translate(-3px,${_H}px)`
                                    }}
                                >
                                    {match[i]._label}
                                </p>
                            ) : null}
                        </div>
                    </div>
                );
            });
        }

        return (
            <div style={{display:'none'}}>
                <input
                    style={{background:"none!important"}}
                    id="myFileUpload"
                    type="file"
                    onChange={this.handleFileChange}
                    accept=".jpg, .jpeg, .png"
                />
                <div style={{ position: 'relative',display:'flex',flexDirection:'column' }}>
                    <div style={{ position: 'absolute' }}>
                        <img src={imageURL} alt="imageURL" />
                    </div>
                    {!!drawBox ? drawBox : null}
                </div>
            </div>
        );
    }
}

export default withRouter(connect(null,{updateFace})(ImageInput));