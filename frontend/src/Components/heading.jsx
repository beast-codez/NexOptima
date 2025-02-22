import React from 'react'
import ReactDOM from 'react-dom/client'

function Heading1(props) {
    const { text,id } = props;
    return (
        <h1 id={id}>{text}</h1>
    );
}
function Heading2(props) {
    const { text, id } = props;
    return (
        <h2 id={id}>{text}</h2>
    )
}
function Heading3(props) {
  const { text, id } = props;
  return <h3 id={id}>{text}</h3>;
}
function Heading4(props) {
  const { text, id } = props;
  return <h4 id={id}>{text}</h4>;
}
function Heading5(props) {
  const { text, id } = props;
  return <h5 id={id}>{text}</h5>;
}
function Heading6(props) {
  const { text, id } = props;
  return <h6 id={id}>{text}</h6>;
}
function Para(props) {
  const { text, id } = props;
  return <p id={id}>{text}</p>;
}
export { Heading1, Heading2,Heading3,Heading4,Heading5,Heading6,Para};