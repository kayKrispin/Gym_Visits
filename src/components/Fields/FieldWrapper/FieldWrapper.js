// Connects a basic field component with redux-forms field
// giving that field all passed props plus onChange, onBlur, value etc...
// http://redux-form.com/6.0.0-alpha.4/docs/faq/CustomComponent.md/
import React from 'react';
import { Field } from 'redux-form';
import style from './styles.scss';

const FormField = ({
                                          title,
                                          children,
                                          tip,
                                          type,
                                          wrapperClassName,
                                      }) => (
                                          <div></div>

);

const FieldWrapper = WrappedField => props => (
    <WrappedField  {...props} {...props.input} />
   )

    export default (WrappedField) => {
        const MeField = FieldWrapper(WrappedField);
        return props => (
            <FormField title={props.title} type={props.type} tip={props.tip} wrapperClassName={props.wrapperClassName}>
    <Field {...props} name={Math.random().toString()} component={MeField} />
        </FormField>
    );
    };
