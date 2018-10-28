import PropTypes from 'prop-types';
import React from 'react';

const Form = ({
                  handleSubmit,
                  children,
                  saveUser,
              }) =>
    (
        <form  onSubmit={handleSubmit(saveUser)}>
            {children}
        </form>
    );

Form.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
};

Form.defaultProps = {
    submitText: 'Submit',
    customClasses: {},
    hideOnSubmit: false,
};

export default Form;
