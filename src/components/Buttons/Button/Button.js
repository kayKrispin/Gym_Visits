import React from 'React';
import PropTypes from 'prop-types';
import './styles.scss'

const Button = ({
    name,
    onClick,
}) => {

    return (
        <button onClick={onClick} className="small">
            {name}
        </button>
    );

};

export default Button;