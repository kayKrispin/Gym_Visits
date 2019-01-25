import React from 'React';
import PropTypes from 'prop-types';
import './styles.scss'

const Button = ({
    name,
    onClick,
                    disabled
}) => {

    return (
        <button onClick={onClick} disabled={disabled} className="small">
            {name}
        </button>
    );

};

export default Button;