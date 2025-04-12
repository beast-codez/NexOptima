import React, { useState, useEffect } from "react";
import ReactDom from "react-dom";
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
import Button from "../../Components/button";
import Anchor from "../../Components/anchor";
import SlideShow from "./SlideshowDashboard-1";
import "./Dashboard-1.css";
import { useNavigate } from "react-router-dom";

function Dashboard1() {
  document.title = "NexOptima | Dashboard";
  const navigate = useNavigate();
  return (
    <section id="dashboard1main">
      <Div id="dashboard1navbar">
        <Div id="dashboard1navbarfirst">
          <Heading3 text="NexOptima"></Heading3>
        </Div>
        <Div id="dashboard1navbarsecond">
          <Heading5
            text="terms & conditions"
            id="dashboardnavbartandc"
          ></Heading5>
        </Div>
      </Div>
      <h1 id="dashboard1typewriter">
        NexOptima - Productivity Management Platform
      </h1>
      <SlideShow></SlideShow>
      <section id="dashboard1body">
        <section id="dashboard1admin" className="dashboard1bodychild">
          <img src="/img/admin-img.png" className="dashboard1bodyimg"></img>
          <Div className="dashboard1bodydiv">
            <Para
              text={
                "The Admin is the backbone of NexOptima, responsible for managing the entire system. They create and assign projects to managers, ensuring smooth workflow distribution. Admins also handle user management, adding employees and managers, assigning login credentials, and maintaining security. With full control over project allocation, they set the foundation for efficient task execution."
              }
            ></Para>
            <button
              type={"button"}
              className={"dashboard1bodydivbtn"}
              id={"dashboard1bodydivbtnadmin"}
              onClick={() => {
                window.location.href = "/Login?type=Admin";
              }}
            >
              Admin SignIn
            </button>
          </Div>
        </section>
        <section id="dashboard1manager" className="dashboard1bodychild">
          <img src="/img/employee-img.png" className="dashboard1bodyimg"></img>
          <Div className="dashboard1bodydiv">
            <Para
              text={
                "The Manager acts as the bridge between Admin and Employees, taking ownership of projects assigned by the Admin. They break down projects into structured tasks, assigning them to employees based on expertise and workload. Managers oversee task progress, ensuring timely completion, and provide necessary support to employees. With access to performance tracking, they ensure efficiency across the team."
              }
            ></Para>
            <button
              type={"button"}
              className={"dashboard1bodydivbtn"}
              id={"dashboard1bodydivbtnmanger"}
              onClick={() => {
                window.location.href = "/Login?type=Manager";
              }}
            >
              Manager SignIn
            </button>
          </Div>
        </section>
        <section id="dashboard1employee" className="dashboard1bodychild">
          <img src="/img/manager-img.png" className="dashboard1bodyimg"></img>
          <Div className="dashboard1bodydiv">
            <Para
              text={
                "The Employee is responsible for executing assigned tasks with dedication and efficiency. They log into NexOptima to track their work, update progress, and submit daily work reports. Employees ensure that tasks are completed within deadlines while maintaining quality. Their contributions directly impact the company’s productivity and success, making them a vital part of the workflow. 🚀"
              }
            ></Para>
            <button
              type={"button"}
              className={"dashboard1bodydivbtn"}
              id={"dashboard1bodydivbtnemployee"}
              onClick={() => {
                window.location.href = "/Login?type=Employee";
              }}
            >
              Employee SignIn
            </button>
          </Div>
        </section>
      </section>
    </section>
  );
}
export default Dashboard1;
