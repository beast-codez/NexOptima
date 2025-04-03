import React from 'react'
import ReactDOM from 'react-dom/client'
//Use Props Properly Please here 
function Div(props) {
    const { id, className,onclick} = props;
    return (
        <div id={id} className={className} onClick={onclick}>{ props.children}</div>
    );
}

export default Div;