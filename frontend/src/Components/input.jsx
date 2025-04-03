import React from 'react'
import ReactDOM from 'react-dom/client'

function Input(props) {
    const { type, id, name, placeholder, required } = props;
    return (
        <input type={type} id={id} name={name} placeholder={placeholder} required={required}></input>
    );
}

export default Input;