// Connects a basic field component with redux-forms field
// giving that field all passed props plus onChange, onBlur, value etc...
// http://redux-form.com/6.0.0-alpha.4/docs/faq/CustomComponent.md/
import React from 'react';
import applyStyles from 'next-style-loader/applyStyles';
import { Field } from 'redux-form';
import cx from 'classnames';
import style from './style.scss';
import { mainValidator } from '../../Validation';
import Tooltip from '../../Tooltip';
import SVG from '../../SVG';


const FieldWrapper = WrappedField => props => {
    return  <div>
    <WrappedField style={{width:'100%'}} {...props} {...props.input} />
    {props.meta.touched && props.meta.error &&
    <div><SVG icon="facesad" className="icon facesad small inline" /> <span>{props.meta.error}</span></div>}
</div>};

    export default (WrappedField) => {
        const MeField = FieldWrapper(WrappedField);
        return props => (
            <FormField title={props.title} type={props.type} tip={props.tip} wrapperClassName={props.wrapperClassName}>
    <Field {...props}  validate={mainValidator( props.validation || [] )} component={MeField} />
        </FormField>
    );
    };
