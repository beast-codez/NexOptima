import React from 'react'
import ReactDOM from 'react-dom/client'

function Button(props) {
    const { id, className, type, text } = props;
    return (
        <button type={type} className={className} id={id}>{ props.children}</button>
    );
} 

export default Button;