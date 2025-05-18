import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import "./Login.css";

function get_type() {
  const params = new URLSearchParams(window.location.search);
  const type = params.get("type");
  return type || "Admin";
}

const checkTokenExpiry = (token) => {
  try {
    const decoded = jwtDecode(token);
    const currentTime = Math.floor(Date.now() / 1000);
    if (decoded.exp && decoded.exp < currentTime) {
      console.log("Token has expired");
      localStorage.removeItem("nextoken");
      return true;
    } else {
      console.log("Token is still valid");
      return false;
    }
  } catch (err) {
    console.error("Invalid token:", err);
    return true;
  }
};

function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState({ email: "", password: "" });
  const [activeRole, setActiveRole] = useState(get_type());
  const [passwordType, setPasswordType] = useState("password");
  const [passwordImg, setPasswordImg] = useState("/img/eye.svg"); // Image for password visibility toggle

  useEffect(() => {
    const token = localStorage.getItem("nextoken");
    if (token) {
      const isExpired = checkTokenExpiry(token);
      if (!isExpired) {
        navigate("/Home");
      }
    }
  }, [navigate]);

  const handleChange = (e) => {
    setUser((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submit");
    try {
      const res = await axios.post("http://localhost:5018/auth/login", {
        email: user.email,
        password: user.password,
        userType: activeRole,
      });

      if (res.data.success) {
        localStorage.setItem("nextoken", res.data.nextoken);
        navigate("/Home");
      } else {
        alert("Login failed");
      }
    } catch (err) {
      console.error("Login error:", err);
      alert("Something went wrong");
    }
  };

  const togglePasswordVisibility = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      setPasswordImg("/img/eye-off.svg"); // Change image when password is visible
    } else {
      setPasswordType("password");
      setPasswordImg("/img/eye.svg"); // Change image when password is hidden
    }
  };

  return (
    <section id="loginmainsection">
      <div id="loginimagediv">
        <h1 id="loginmainheading">NexOptima</h1>
        <img src="/img/dash-img1.jpg" id="loginimage" alt="Dashboard Visual" />
      </div>

      <div id="loginmaindiv">
        <div id="loginwelcomediv">
          <h2 id="welcomeheading">Welcome Back</h2>
          <p id="welcomepara">Please login to your account</p>

          <div id="loginflexdiv">
            {["Admin", "Manager", "Employee"].map((role) => (
              <div
                key={role}
                className={`loginflexele ${
                  activeRole === role ? "active" : ""
                }`}
                onClick={() => setActiveRole(role)}
              >
                {role}
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit}>
            <div className="loginformele">
              <label htmlFor="loginemail">Email</label>
              <input
                type="text"
                id="loginemail"
                name="email"
                value={user.email}
                placeholder="Enter your email"
                onChange={handleChange}
                required
              />
            </div>

            <div className="loginformele">
              <label htmlFor="loginpassword">Password</label>
              <div id="loginpassworddiv">
                <input
                  type={passwordType}
                  id="loginpassword"
                  name="password"
                  value={user.password}
                  placeholder="Enter your password"
                  onChange={handleChange}
                  required
                />
                <img
                  src={passwordImg}
                  id="passwordimg"
                  alt="Toggle Password Visibility"
                  onClick={togglePasswordVisibility}
                  style={{ cursor: "pointer" }}
                />
              </div>
            </div>

            <button type="submit" id="loginsubmit">
              Login As {activeRole}
            </button>

            <div id="loginforgotpassworddiv">
              <a id="loginforgotpassword" href="/ForgotPassword">
                Forgot password?
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Login;
