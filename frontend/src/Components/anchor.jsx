import React from 'react'
import ReactDOM from 'react-dom/client'

function Anchor(props) {
    const { id, className, href ,text} = props;
    return (
        <a id={id} className={className} href={href}>{text}</a>
    )
}
export default Anchor;