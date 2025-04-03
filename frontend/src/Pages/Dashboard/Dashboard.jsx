import React from "react";
import "./Dashboard.css";
import Carousel from "./Carousel";
import ThemeToggle from "./ToggleTheme";
import { useState } from "react";
function Dashboard() {
  const [theme, setTheme] = useState("light");

  return (
    <div className={`container ${theme === "light" ? "light" : "dark"}`}>
      <nav id="dash-nav">
        <p id="title">NexOptima</p>
        <div className="nav-btns">
          <ThemeToggle theme={theme} setTheme={setTheme} />
          <a href="#admin">Admin</a>

          <a href="#manager">Manager </a>

          <a href="#employee">Employee </a>
        </div>
      </nav>
      <div className={`info ${theme === "light" ? "light" : "dark"}`}>
        <div className="info-left">
          <div className="type-writer">
            <p id="nex-optima">NexOptima - Productivity Management Platform</p>
            <p id="nex-info">
              NexOptima is an advanced web application designed to streamline
              employee task management while providing managers with real-time
              insights into both individual and company-wide productivity. It
              offers an intuitive dashboard where employees can manage their
              tasks efficiently, and managers can monitor team performance
              through analytics and reports.
            </p>
          </div>
          <div className="carousel">
            <Carousel />
          </div>
        </div>
        <img src="/img/dash-img1.jpg" alt="loading.." id="info-right" />
      </div>
      <section id="admin" className={`${theme === "light" ? "light" : "dark"}`}>
        <div className="info-top">
          <p className="ind-info">
            The Admin is the backbone of NexOptima, responsible for managing the
            entire system. They create and assign projects to managers, ensuring
            smooth workflow distribution. Admins also handle user management,
            adding employees and managers, assigning login credentials, and
            maintaining security. With full control over project allocation,
            they set the foundation for efficient task execution.
          </p>
          <img src="/img/admin-img.png" alt="loading.." id="admin-img" />
        </div>
        <button className="sec-btn">Admin Signin</button>
      </section>
      <section
        id="manager"
        className={`${theme === "light" ? "light" : "dark"}`}
      >
        <div className="info-top">
          <p className="ind-info">
            The Manager acts as the bridge between Admin and Employees, taking
            ownership of projects assigned by the Admin. They break down
            projects into structured tasks, assigning them to employees based on
            expertise and workload. Managers oversee task progress, ensuring
            timely completion, and provide necessary support to employees. With
            access to performance tracking, they ensure efficiency across the
            team.
          </p>
          <img src="/img/manager-img.png" alt="loading.." id="manager-img" />
        </div>
        <button className="sec-btn">Manager Signin</button>
      </section>
      <section
        id="employee"
        className={`${theme === "light" ? "light" : "dark"}`}
      >
        <div className={`info-top ${theme === "light" ? "light" : "dark"}`}>
          <p className="ind-info">
            The Employee is responsible for executing assigned tasks with
            dedication and efficiency. They log into NexOptima to track their
            work, update progress, and submit daily work reports. Employees
            ensure that tasks are completed within deadlines while maintaining
            quality. Their contributions directly impact the company’s
            productivity and success, making them a vital part of the workflow.
            🚀
          </p>
          <img src="/img/employee-img.png" alt="loading.." id="employee-img" />
        </div>
        <button className="sec-btn">Employee Signin</button>
      </section>
      <footer id="footer">
        <p id="footer-content">© 2025 NexOptima. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Dashboard;
