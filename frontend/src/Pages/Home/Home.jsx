import React,{useState,useEffect} from 'react'
import ReactDOM from 'react-dom';
import './Home.css';
import { Building } from "lucide-react";
const Home = () => {
  document.title="NexOptima | Home"
  return (
    <>
      <div id="homenavbar">
        <div id="homenavbardiv1">
          <img src="/img/NexOptima logo.png"></img>
          <h3>NexOptima</h3>
        </div>
        <div id="homenavbardiv2">
          <h3>Admin Dashboard</h3>
        </div>
      </div>
      <section id="homesection1">
        <h1>NexOptima - Branch Managent</h1>
        <div>
          <div id="homesection1desc">
            <Building style={{ margin: 12, width: 400 }}></Building>
            <h2>Add An Branch</h2>
            <p>You Can Add Branches By Clicking "Add New Branch Button"</p>
          </div>
          <button id="homesection1btn">+ Add New Branch</button>
          <form>
            <label htmlFor="branchname">Branch Name</label>
            <input type="text" id="branchname" name="branchname"></input>
            <br></br>
            <label htmlFor="firstname">First Name</label>
            <input type="text" id="firstname" name="firstname"></input>
            <br></br>
            <label htmlFor="lastname">Last Name</label>
            <input type="text" id="lastname" name="lastname"></input>
            <br></br>
            <label htmlFor="email">Email</label>
            <input type="email" id="manageremail" name="manageremail"></input>
            <br></br>
            <label htmlFor="branchname">Branch Name</label>
            <input type="text" id="branchname" name="branchname"></input>
            <br></br>
            <label htmlFor="branchname">Branch Name</label>
            <input type="text" id="branchname" name="branchname"></input>
            <br></br>
          </form>
        </div>
      </section>
    </>
  );
}

export default Home;

