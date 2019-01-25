import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Buttons';

const Form = ({
                  onSubmit,
                  children,
                  onKeyDown,
                  handleSubmit,
                  submitted,
                  className,
                  btnClassName,
                  label,
                  imageIs
              }) => (
    <form  onKeyDown={onKeyDown} onSubmit={handleSubmit} >
    <div className={className}>
    {children}
    <Button  type='submit' name='Створити нового клієнта' disabled={imageIs}></Button>
    </div>
    </form>
);

Form.propTypes = {
    handleSubmit: PropTypes.func
};

export default Form;