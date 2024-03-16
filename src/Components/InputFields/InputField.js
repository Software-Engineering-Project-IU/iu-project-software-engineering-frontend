import React from 'react';
import '../../scss/main.scss'

const InputField = ({ label, type = 'text', name, value, onChange, isBig }) => {
    return (
        <div>
            {label && <label htmlFor={name}>{label}</label>}
            {isBig ? (
                <textarea
                    id={name}
                    name={name}
                    value={value}
                    onChange={onChange}
                    className="big-inputfield"
                />
            ) : (
                <input
                    type={type}
                    id={name}
                    name={name}
                    value={value}
                    onChange={onChange}
                />
            )}
        </div>
    );
};

export default InputField;
