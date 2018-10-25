import React from 'React';
import PropTypes from 'prop-types';
import './styles.scss'

const Button = ({
    name
}) => {

    return (
        <button className="small">
            {name}
        </button>
    );

};

export default Button;