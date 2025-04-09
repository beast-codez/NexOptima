import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./Login.css";
import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  Para,
} from "../../Components/heading";
import Div from "../../Components/div";
import Label from "../../Components/label";
import Input from "../../Components/input";
import Form from "../../Components/form";
import Button from "../../Components/button";
import Anchor from "../../Components/anchor";
import axios from "axios";
//Actual Values Must Be Sent In a {} bracis !
//ClassName Double Dot
function Login() {

  useEffect(() => {
    const token = localStorage.getItem("nextoken");
    if (token) {
      navigate("/home");
    }
  }, [navigate]);
  const [user , setUser] =  useState({email : '', password : ''});
  const handleChange=(e)=>{
    user[e.target.name]=e.target.value;
  }
  const handleSubmit = async()=>{
    const res = await axios.post('http://localhost:5018/auth/login',{email : user.email,password : user.password , userType : Active});
    if(!res.data.success){
      //error
    }
    if(res.data.success){
      //handle success
      localStorage.setItem('nextoken', res.data.nextoken);
      navigate("/home");
    }
  }
  document.title = "NexOptima | Login";
  const [Active, setActive] = useState("Admin");
  function setcurrent(active) {
    setActive(active);
  }
  const [Type, setType] = useState("password");
  const [Link, setLink] = useState("/img/eye (1).svg");
  function changeType() {
    if (Link == "/img/eye (1).svg") {
      setLink("/img/eye-off (1).svg");
      setType("text");
    } else {
      setLink("/img/eye (1).svg");
      setType("password");
    }
  }
  return (
    <section id="loginmainsection">
      <Div id="loginimagediv">
        <Heading1 text="NexOptima" id="loginmainheading" />
        <img src="/img/dash-img1.jpg" id="loginimage"></img>
      </Div>
      <Div id="loginmaindiv">
        <Div id="loginwelcomediv">
          <Heading2 id="welcomeheading" text="Welcome Back" />
          <Para id="welcomepara" text="Please login to your account" />
          <Div id="loginflexdiv">
            <Div
              id="loginadmin"
              className={`loginflexele ${Active === "Admin" ? "active" : ""}`}
              onclick={() => {
                setcurrent("Admin");
              }}
            >
              Admin
            </Div>
            <Div
              id="loginmanager"
              className={`loginflexele ${Active === "Manager" ? "active" : ""}`}
              onclick={() => {
                setcurrent("Manager");
              }}
            >
              Manager
            </Div>
            <Div
              id="loginemployee"
              className={`loginflexele ${
                Active === "Employee" ? "active" : ""
              }`}
              onclick={() => {
                setcurrent("Employee");
              }}
            >
              Employee
            </Div>
          </Div>
          <Form onSubmit = {handleSubmit}>
            <Div className="loginformele">
              <Label id="loginemail" text="Email"></Label>
              <Input
                type="text"
                id="loginemail"
                name="email"
                value = {user.email}
                placeholder="Enter your email"
                required="true"
                onChange = {(e)=>handleChange(e)}
              ></Input>
            </Div>
            <Div className="loginformele">
              <Label id="loginpassword" text="Password"></Label>
              <Div id="loginpassworddiv">
                <Input
                  type={Type}
                  id="loginpassword"
                  name="password"
                  value = {user.password}
                  placeholder="Enter your password"
                  required={true}
                  onChange= {(e)=>handleChange(e)}
                ></Input>
                <img src={Link} id="passwordimg" onClick={changeType}/>
              </Div>
            </Div>
            <Button type="submit" id="loginsubmit">
              Login As {Active}
            </Button>
            <Div id="loginforgotpassworddiv">
              <Anchor
                id="loginforgotpassword"
                href="/ForgotPassword"
                text="Forgotpassword?"
              ></Anchor>
            </Div>
          </Form>
        </Div>
      </Div>
    </section>
  );
}

export default Login;
