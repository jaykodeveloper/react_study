import React from 'react';
import PropTypes from 'prop-types';

const TextInput = (props) => {
    let wrapperClass = 'form-group';
    if (props.error && props.error.length > 0) {
        wrapperClass += "has-error";
    }

    return (
        <div className={wrapperClass}>
            <label htmlFor={props.name}>{props.label}</label>
            <div className="field">
                <input
                    type="text"
                    onChange={props.onChange}
                    name={props.name}
                    className="form-control"
                    value={props.value}
                    placeholder={props.placeholder}
                />
            </div>
            {props.error && <div className="alert alert-danger">{props.error}</div>}
        </div>
    );
};

TextInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string,
    error: PropTypes.string,
    placeholder: PropTypes.string,
};

TextInput.defaultProps = {
    error: ""
};

export default TextInput;