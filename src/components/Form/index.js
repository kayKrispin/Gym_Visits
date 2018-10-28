import React from 'react';
import { reduxForm } from 'redux-form';
import Form from './Form';

class FormContainer extends React.PureComponent {

    saveUser(values){
        console.log('values',values);
    }

    componentDidMount(){
        console.log('this props', this.props)
    }

    render() {
        return <Form  saveUser={this.saveUser}  {...this.props } />
    }
}

export default formId => reduxForm({
    form: formId,
    enableReinitialize: true,
})(FormContainer);
