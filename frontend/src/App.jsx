import React from "react";
import Login from "./Pages/Login/Login.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard1 from "./Pages/Dashboard-1/Dashboard-1.jsx";
import Dashboard from "./Pages/Dashboard/Dashboard.jsx";
import SlideShow from "./Pages/Dashboard-1/SlideshowDashboard-1.jsx";
import ProtectedRoute from './ProtectedRoute.jsx'
import Home from './Pages/Home/Home.jsx'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard1 />}></Route>
        <Route path="/Login" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
