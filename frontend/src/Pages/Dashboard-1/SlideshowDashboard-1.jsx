import React, { useState, useEffect } from "react";
import "./SlideshowDashboard-1.css";
import { ChevronRight, ChevronLeft } from "lucide-react";

const images = [
  "https://png.pngtree.com/png-clipart/20230427/original/pngtree-productivity-line-icon-png-image_9116967.png",
  "https://png.pngtree.com/png-vector/20220718/ourmid/pngtree-quarantine-office-people-employee-manager-png-image_5913171.png",
  "https://www.reactjsindia.com/blog/wp-content/uploads/2023/11/Employee-Management-affilate-page-1536x1038-1.png",
  "https://cdni.iconscout.com/illustration/premium/thumb/admin-lady-managing-online-data-transfer-and-security-illustration-download-in-svg-png-gif-file-formats--business-startup-inforgraphic-graph-ui-pack-illustrations-1782204.png",
];

function SlideShow() {
  const [index, setIndex] = useState(0);

  const slideNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const slidePrev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const currentSlide = (i) => {
    setIndex(i);
  };

  useEffect(() => {
    const interval = setInterval(slideNext, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="slideshowsection">
      <div id="slideshowmain">
        <div id="slideshowmaindiv">
          <button className="slideshowbtnpn" onClick={slidePrev}>
            <ChevronLeft />
          </button>
          <div id="slideshowimgdiv">
            <img src={images[index]} alt="Slide" id="slideshowimg" />
          </div>
          <button className="slideshowbtnpn" onClick={slideNext}>
            <ChevronRight />
          </button>
        </div>
        <div id="slideshowbtndiv">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => currentSlide(i)}
              className={index === i ? "active" : ""}
            ></button>
          ))}
        </div>
      </div>
      <div id="slideshowsidebtn">
        <h3>Choose Your Role!</h3>
        <button onClick={() => { window.location.hash = "#dashboard1admin" }}>
          <img src="/img/admin.png" alt="Admin" />
          Admin
        </button>
        <button onClick={() => {
          window.location.hash="#dashboard1manager"
        }}>
          <img src="/img/manager.png" alt="Manager" />
          Manager
        </button>
        <button onClick={() => {
          window.location.hash="#dashboard1employee"
        }}>
          <img src="/img/employee.png" alt="Employee" />
          Employee
        </button>
      </div>
    </section>
  );
}

export default SlideShow;
