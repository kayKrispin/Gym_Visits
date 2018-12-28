import React from 'react';
import PropTypes from 'prop-types';

const Form = ({
                  onSubmit,
                  children,
                  onKeyDown,
                  handleSubmit,
                  submitted,
                  className,
                  btnClassName,
                  label,
              }) => (
    <form  onKeyDown={onKeyDown} onSubmit={handleSubmit} >
    <div className={className}>
    {children}
    <button  type='submit' >Submit</button>
    </div>
    </form>
);

Form.propTypes = {
    handleSubmit: PropTypes.func
};

export default Form;