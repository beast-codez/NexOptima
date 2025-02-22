import React,{useState} from 'react'
import ReactDOM from 'react-dom'
import './Login.css'
import { Heading1, Heading2,Heading3,Heading4,Heading5,Heading6,Para } from '../Components/heading'
import Div from '../Components/div'
import Label from '../Components/label'
import Input from '../Components/input'
import Form from '../Components/form'
import Button from '../Components/button'
import Anchor from '../Components/anchor'
//Actual Values Must Be Sent In a {} bracis !
//ClassName Double Dot
    function Login() {
      const [Active, setActive] = useState("Admin");
      function setcurrent(active) {
        console.log("hiii");
        setActive(active);
        }
        return (
          <section id="loginmainsection">
            <Heading1 text="NexOptima" id="loginmainheading" />
            <Div id="loginmaindiv">
              <Div id="loginwelcomediv">
                <Heading2 id="welcomeheading" text="Welcome Back" />
                <Para id="welcomepara" text="Please login to your account" />
                <Div id="loginflexdiv">
                  <Div id="loginadmin" className={`loginflexele ${Active==="Admin"?"active":""}`} onclick={()=>{setcurrent("Admin")}}>Admin</Div>
                  <Div id="loginmanager" className={`loginflexele ${Active==="Manager"?"active":""}`} onclick={()=>{setcurrent("Manager")}}>Manager</Div>
                   <Div id="loginemployee" className={`loginflexele ${Active==="Employee"?"active":""}`} onclick={()=>{setcurrent("Employee")}}>Employee</Div>
                </Div>
                        <Form method="post" action="/Login">
                            <Div className="loginformele">
                            <Label id="loginemail" text="Email"></Label>
                            <Input type="text" id="loginemail" name="email" placeholder="Enter your email" required="true"></Input>
                            </Div>
                            <Div className="loginformele">
                             <Label id="loginpassword" text="Password"></Label>
                    <Input type="password" id="loginpassword" name="password" placeholder="Enter your password" required={true}></Input>
                            </Div>
                            <Button type="submit" id="loginsubmit">Login As {Active}</Button>
                            <Div id="loginforgotpassworddiv">
                                <Anchor id="loginforgotpassword" href="/ForgotPassword" text="Forgotpassword?"></Anchor>
                            </Div>
                        </Form>
              </Div>
            </Div>
          </section>
        );
    }

export default Login;