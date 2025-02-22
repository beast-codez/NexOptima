import React from 'react'
import ReactDOM from 'react-dom/client'

function Label(props) {
    const { id,text } = props;
    return (
        <label htmlFor={id}>{text}</label>
    );
}

export default Label;