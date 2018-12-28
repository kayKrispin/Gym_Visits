import React from 'react';
import AutoForm from './AutoForm';
import * as Fields from '../Fields';
import PropTypes from 'prop-types';
import Form from '../Form';


class AutoFormContainer extends React.PureComponent {

   constructor(props){
       super(props);

       this.state = {
           DynamicForm:Form(props.id)
       }
   }

   componentDidMount(){
       console.log(this.props)
   }

   componentDidUpdate(nextprops){
       if(nextprops.id !== this.props.id){
           this.setState({
                DynamicForm: Form(nextprops.id)
           });
       }
   };


   generateFields(){
       return this.props.schema.schema.map(schemaItem=>({
           ...schemaItem,
           Field:Fields[schemaItem.field],
       }))
   }

    generateProps = () => {
        return {
            ...this.props,
            ...this.state,
            formFields: this.generateFields(),
        }
    };

    render() {
        const props = this.generateProps();
        return <AutoForm {...props} />
    }
}


AutoFormContainer.propTypes = {
    schema : PropTypes.objectOf(PropTypes.shape({
        id: PropTypes.string,
        field: PropTypes.string,
    })).isRequired,
};

export default AutoFormContainer;