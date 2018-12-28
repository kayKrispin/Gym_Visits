import React, { Component } from 'react';
import styles from './styles.scss';
import Button from '../../../../components/Buttons';
import Select from '../../../../components/Fields/Select';
import Input from '../../../../components/Fields/Input';
import * as options from './options';
import { connect } from 'react-redux';
import { users, deleteeSubscriber, searchUserByKey, createSubsriptioner } from '../../../../actions/users';
import HomeUserList from  '../HomeUserList';
import Form from '../../../../components/Form';
import { Field } from 'redux-form';
import userSchema from './userSchema';
import AutoForm from '../../../../components/AutoForm';



class Home extends Component {
    constructor(props){
        super(props);
    this.state = {
        checked:true,
        NewUserForm:Form('create_new_subscriber_form')
    }
}

    handleOpenUserList(){
        this.setState(prevstate=>({
            checked:!prevstate.checked
        }))
    }


    handleSub = (values) =>  {
        this.props.createSubsriptioner(values)
    };


    render() {

        console.log('props',this.props)
        const { usersList,deleteeSubscriber,searchUserByKey } = this.props;
        const { NewUserForm } = this.state;
        const { newSubscription, getAll, showHide,  } = options.BUTTON_LABELS;

        return (
            <div className="main">
                <h1 className="header">Please input user credentials</h1>
            <div className="left">
               <AutoForm
                id='create_new_subscriber_form'
                onSubmit={this.handleSub}
                 schema={userSchema}
                 />
            </div>
            <div className="right">
                <Button name={newSubscription} onClick={ (e) => { this.fetchAllusers(e) }} />
                <Button name={getAll} onClick={ (e) => { this.props.users() }} />
                <Button name={showHide} onClick={ () => { this.handleOpenUserList() }} />
            </div>
                <Input onChange={(e)=>{ searchUserByKey(e)}} className="large" placeholder="Find User" type="text"/>
        <div>
            { this.state.checked ? <HomeUserList usersList={usersList} deleteeSubscriber={deleteeSubscriber}  /> : null}
        </div>
            </div>

        )
    }
}


function mapStateToProps(state){
    return {
        usersList: state.users.users,
    }
}
export default connect(mapStateToProps,{ users,deleteeSubscriber,searchUserByKey,createSubsriptioner })(Home);