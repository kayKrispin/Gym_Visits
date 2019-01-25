import Home from './HomeScreen';
import React from 'react';

const JSON_PROFILE = require('../../../../descriptors/visiters.json');


class HomeContainer extends React.Component{

    state={
      imageUrl:'',
      blob:{}
    };

    snapshot = () => {
        let ctx;
        let canvas;
        canvas = document.getElementById("myCanvas");
        ctx = canvas.getContext('2d');
        // Draws current image from the video element into the canvas
        ctx.drawImage(video, 0,0, canvas.width, canvas.height);




        let url = canvas.toDataURL("image/jpeg");
        var myBlob = new Blob(['url'], { type: "image/jpg" });
        let newImg = document.createElement("img"); // create img tag
        newImg.src = url;

        this.setState({
            imageUrl:url,
            blob:myBlob,
        });

    };

     startWebcam = () => {
         navigator.getUserMedia = ( navigator.getUserMedia ||
             navigator.webkitGetUserMedia ||
             navigator.mozGetUserMedia ||
             navigator.msGetUserMedia);
        if (navigator.getUserMedia) {
            navigator.getUserMedia (

                // constraints
                {
                    video: true,
                    audio: false
                },

                // successCallback
                function(localMediaStream) {
                    let video;
                    let webcamStream;
                    video = document.querySelector('video');
                    video.src = window.URL.createObjectURL(localMediaStream);
                    webcamStream = localMediaStream;
                },

                // errorCallback
                function(err) {
                    console.log("The following error occured: " + err);
                }
            );
        } else {
            console.log("getUserMedia not supported");
        }
    };

    generateProps(){
        return {
            ...this.props,
            ...this.state,
            snapshot:this.snapshot,
            startWeb: this.startWebcam,
        }
    }

    render(){
        const props = this.generateProps();
        return <Home {...props}/>
    }
}



export default HomeContainer;