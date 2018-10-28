import React from 'react';
import PropTypes from 'prop-types';
import style from './styles.scss';

const Input = ({
    type,
    placeholder,
    className,
    namee, input,
                   onChange
}) => (
    <input
        {...input}
        namee={namee}
        type={type}
        placeholder={placeholder}
        className={className}
        onChange={(e) => onChange(e.target.value)}
    />
);

Input.propTypes = {
    type: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.bool]),
};

Input.defaultProps = {
    type: 'text',
};

export default Input;
