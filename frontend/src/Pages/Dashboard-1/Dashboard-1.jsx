import React from "react";
import SlideShow from "./SlideshowDashboard-1";
import "./Dashboard-1.css";
import { useNavigate } from "react-router-dom";

function Dashboard1() {
  document.title = "NexOptima | Dashboard";
  const navigate = useNavigate();
  return (
    <section id="dashboard1main">
      <div id="dashboard1navbar">
        <div id="dashboard1navbarfirst">
          <h3>NexOptima</h3>
        </div>
        <div id="dashboard1navbarsecond">
          <h5 id="dashboardnavbartandc">terms & conditions</h5>
        </div>
      </div>
      <h1 id="dashboard1typewriter">
        NexOptima - Productivity Management Platform
      </h1>
      <SlideShow />
      <section id="dashboard1body">
        <section id="dashboard1admin" className="dashboard1bodychild">
          <img
            src="/img/admin-img.png"
            className="dashboard1bodyimg"
            alt="Admin"
          />
          <div className="dashboard1bodydiv">
            <p>
              The Admin is the backbone of NexOptima, responsible for managing
              the entire system. They create and assign projects to managers,
              ensuring smooth workflow distribution. Admins also handle user
              management, adding employees and managers, assigning login
              credentials, and maintaining security. With full control over
              project allocation, they set the foundation for efficient task
              execution.
            </p>
            <button
              type="button"
              className="dashboard1bodydivbtn"
              id="dashboard1bodydivbtnadmin"
              onClick={() => {
                window.location.href = "/Login?type=Admin";
              }}
            >
              Admin SignIn
            </button>
          </div>
        </section>

        <section id="dashboard1manager" className="dashboard1bodychild">
          <img
            src="/img/employee-img.png"
            className="dashboard1bodyimg"
            alt="Manager"
          />
          <div className="dashboard1bodydiv">
            <p>
              The Manager acts as the bridge between Admin and Employees, taking
              ownership of projects assigned by the Admin. They break down
              projects into structured tasks, assigning them to employees based
              on expertise and workload. Managers oversee task progress,
              ensuring timely completion, and provide necessary support to
              employees. With access to performance tracking, they ensure
              efficiency across the team.
            </p>
            <button
              type="button"
              className="dashboard1bodydivbtn"
              id="dashboard1bodydivbtnmanger"
              onClick={() => {
                window.location.href = "/Login?type=Manager";
              }}
            >
              Manager SignIn
            </button>
          </div>
        </section>

        <section id="dashboard1employee" className="dashboard1bodychild">
          <img
            src="/img/manager-img.png"
            className="dashboard1bodyimg"
            alt="Employee"
          />
          <div className="dashboard1bodydiv">
            <p>
              The Employee is responsible for executing assigned tasks with
              dedication and efficiency. They log into NexOptima to track their
              work, update progress, and submit daily work reports. Employees
              ensure that tasks are completed within deadlines while maintaining
              quality. Their contributions directly impact the company’s
              productivity and success, making them a vital part of the
              workflow. 🚀
            </p>
            <button
              type="button"
              className="dashboard1bodydivbtn"
              id="dashboard1bodydivbtnemployee"
              onClick={() => {
                window.location.href = "/Login?type=Employee";
              }}
            >
              Employee SignIn
            </button>
          </div>
        </section>
      </section>
    </section>
  );
}

export default Dashboard1;
