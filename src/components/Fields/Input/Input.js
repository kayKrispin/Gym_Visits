import React from 'react';
import PropTypes from 'prop-types';
import style from './styles.scss';

const Input = ({
    type,
    placeholder,
    className,
    namee,
                   input,
                   onChange,
    value,
    size,
                   onKeyDown
}) => (
    <input
        type={type}
        defaultValue={value}
        size={size}
        onChange={e =>  onChange( e.target.value)}
        onKeyDown={onKeyDown}
        placeholder={placeholder}
        className={className}
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
