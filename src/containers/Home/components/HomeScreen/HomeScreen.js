import React, { Component } from 'react';
import styles from './styles.scss';
import Button from '../../../../components/Buttons';
import Select from '../../../../components/Fields/Select';
import Input from '../../../../components/Fields/Input';
import InputImage from '../../../../components/ImageInput';
import VideoInput from '../../../../components/VideoInput';
import * as options from './options';
import { connect } from 'react-redux';
import { users, deleteeSubscriber, searchUserByKey, createSubsriptioner,  updateUser} from '../../../../actions/users';
import HomeUserList from  '../HomeUserList';
import Form from '../../../../components/Form';
import { Field } from 'redux-form';
import userSchema from './userSchema';
import AutoForm from '../../../../components/AutoForm';
import Header from '../../../../components/Header';
import Footer from '../../../../components/Footer';




class Home extends Component {
    constructor(props){
        super(props);
         this.state = {
        checked:true,
             name:'',
        NewUserForm:Form('create_new_subscriber_form'),
             showVerification:false,
             showCreateUser:true,
             showCreateDay:false,
    }
}


    handleOpenUserList() {
        this.setState( prevstate => ({
            checked:!prevstate.checked
        }));
    }

    handleVerificationShow = async (condition,showDay = false) => {
       await this.setState({
            showVerification:condition,
            showCreateDay:showDay,
        });
    };

    handleSub = async (values,avatar) => {
        await this.setState({name:[values.name, values.surname].join(' ')});
        await this.props.createSubsriptioner(values,avatar);
    };




    download = () => {
        let dt = this.props.imageUrl;
        let downloadLink = document.getElementById('downloadLnk');
        downloadLink.href=dt;
        console.log('log',downloadLink)
    };


    render() {
        const { usersList,deleteeSubscriber,searchUserByKey, updateUser,snapshot,imageUrl,blob,startWeb } = this.props;
        const { NewUserForm,name,showVerification,showCreateDay } = this.state;
        const { newSubscription, getAll, showHide,  } = options.BUTTON_LABELS;

        return (
            <div>
                <Header calc={true}/>

                <div className='membershipMain'>
                    {showCreateDay && <h1 className='main-h' >Cьогодні {new Date().toJSON().slice(0,10)}</h1>}
                    {!showVerification && !showCreateDay && <h1 className='main-h' >Щоб створити нового юзера зробіть його фото</h1>}
                    <div className="container">
                        { !showVerification && !showCreateDay ? (<div className="row">
                            <div className="col-md-2">
                                <button onClick={()=>this.handleVerificationShow(false,true)} className='admin-navigation-btn'>Створити новий день</button>
                                <button onClick={()=>this.handleVerificationShow(false)} className='admin-navigation-btn orange'>Створити нового юзера</button>
                                <button onClick={()=>this.handleVerificationShow(true)} className='admin-navigation-btn'>Верифікація Юзера</button>
                            </div>
                                <div className="col-md-5">
                                    <p>
                                        <button className='bg-none' onClick={()=>{startWeb()}}>Старт</button>
                                        <button className='bg-none' onClick={()=>{stopWebcam()}}>Стоп</button>
                                        <button className='bg-none' onClick={()=>{snapshot()}}>Зробити Фото</button>
                                    </p>
                                    <video  width='400' height='400' id="video" controls autoPlay ></video>

                                </div>
                                <div className="col-md-5">
                                    <h2 style={{color:"white"}} className="header">Введіть дані юзера</h2>
                                    <div>
                                        <div >
                                            <AutoForm
                                                id='create_new_subscriber_form'
                                                onSubmit={(values)=>{this.handleSub(values,imageUrl)}}
                                                schema={userSchema}
                                                imageIs={!imageUrl.length>0}
                                            />
                                        </div>
                                        <div>
                                            <Button className='btn-width' name={getAll} onClick={ (e) => { this.props.users() }} />
                                            <Button className='btn-width'  name={showHide} onClick={ () => { this.handleOpenUserList() }} />
                                        </div>
                                        <Input onChange={(e)=>{ searchUserByKey(e)}} className="large" value='Цьомусик' placeholder="Знайти юзера за імям" type="text"/>
                                    </div>
                                </div>
                            <InputImage style={{display:'none'}} blob={blob} img={imageUrl} name={name} />
                        </div>) : showCreateDay ? (<div className="row">
                            <div className="col-md-2">
                                <button className='admin-navigation-btn orange'>Створити новий день</button>
                                <button onClick={()=>this.handleVerificationShow(false)} className='admin-navigation-btn'>Створити нового юзера</button>
                                <button onClick={()=>this.handleVerificationShow(true)} className='admin-navigation-btn '>Верифікація Юзера</button>
                            </div>
                            <div className="col-md-12">
                                Вітаємо у новому дні
                            </div>
                        </div>)  : (<div className="row">
                                <div className="col-md-2">
                                    <button onClick={()=>this.handleVerificationShow(false,true)} className='admin-navigation-btn'>Створити новий день</button>
                                    <button onClick={()=>this.handleVerificationShow(false)} className='admin-navigation-btn'>Створити нового юзера</button>
                                    <button  className='admin-navigation-btn orange'>Верифікація Юзера</button>
                                </div>
                                <div className="col-md-10">
                                    <VideoInput/>
                                    <Input onChange={(e)=>{ searchUserByKey(e)}} className="large" value='Цьомусик' placeholder="Знайти юзера за імям" type="text"/>
                                </div>
                            </div>)  }
                    </div>
                <div className="main">
                    <a id='downloadLnk' onClick={()=>{this.download()}}><canvas  id="myCanvas" style={{display:'none'}} width="400" height="350"></canvas></a>

        <div className='container' style={{width:'100%'}}>
            <div className='row'>
                <div className="col-md-12">
                    { this.state.checked ? <HomeUserList usersList={usersList} updateUser={updateUser} deleteeSubscriber={deleteeSubscriber}  /> : null}
                </div>
            </div>
        </div>
            </div>
            </div>
                <Footer/>
            </div>

        )
    }
}


function mapStateToProps(state){
    return {
        usersList: state.users.users,
    }
}

export default connect(mapStateToProps,{ users,deleteeSubscriber,searchUserByKey,createSubsriptioner, updateUser })(Home);