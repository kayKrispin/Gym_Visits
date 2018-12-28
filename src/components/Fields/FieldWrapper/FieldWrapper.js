import React from 'react';
import { Field } from 'redux-form';

const FormField = ({
                       title,
                       children,
                       type,
                       lox,
                       marginTop,

                   }) => (
    <div >
        {title && (
         <label >
             <span >
                 {title}
             </span>
        </label>
        )}
        {children}
    </div>
);

const FieldWrapper = WrappedField => props => (
    <WrappedField {...props} {...props.input} />
);

export default (WrappedField) => {
    const MeField = FieldWrapper(WrappedField);
    return props => (
        <FormField
     type={props.type} t>
<Field {...props} component={MeField} />
    </FormField>
);
};