import React from 'react'
import '../styles/Footer.css';
const Footer = () => {
  return (
    <>
      <div className="footer">
        
        <div className="footerhead">
          <h2>NexOptima</h2>
          <a href="">Home</a>
          <a href="">View Branches</a>
        </div>
        <div className="footerhead">
          <h3>Contact Us</h3>
          <p>Email : nexoptima@gmail.com</p>
          <p>Contact : +91 987 654 3210</p>
          <p>Contact : +91 789 567 4321</p>
        </div>
        <div className="footerhead">
          <p>Boost productivity and empower your workforce.</p>
          <p>Transform your business with NexOptima.</p>
        </div>
      </div>
    </>
  );
}

export default Footer
