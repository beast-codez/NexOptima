import React from "react";
import Login from "./Pages/Login/Login.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard1 from "./Pages/Dashboard-1/Dashboard-1.jsx";
import Dashboard from "./Pages/Dashboard/Dashboard.jsx";
import SlideShow from "./Pages/Dashboard-1/SlideshowDashboard-1.jsx";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/Dashboard" element={<Dashboard1 />}></Route>
        <Route path="/" element={<Dashboard/>}></Route>
        <Route path="/login" element={<Login />} />
        {/* <Route path="/SlideShow" element={<SlideShow/>}></Route> */}
      </Routes>
    </Router>
  );
};

export default App;
