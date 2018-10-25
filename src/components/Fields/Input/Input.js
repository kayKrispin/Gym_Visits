import React from 'react';
import PropTypes from 'prop-types';
import style from './styles.scss';

const Input = ({
    type,
    onChange,
    placeholder,
    className,
}) => (
    <input
        type={type}
        onChange={e => onChange(e.target.value)}
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
