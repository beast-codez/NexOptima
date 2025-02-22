import React from 'react'
import ReactDOM from 'react-dom/client'

function Form(props) {
    const { method, action, target } = props;
    return (
        <form method={method} action={action} target={target}>{ props.children}</form>
    )
}

export default Form;