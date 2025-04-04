import React,{useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
import './SlideshowDashboard-1.css';

const images = [
  "https://png.pngtree.com/png-clipart/20230427/original/pngtree-productivity-line-icon-png-image_9116967.png",
  "https://png.pngtree.com/png-vector/20220718/ourmid/pngtree-quarantine-office-people-employee-manager-png-image_5913171.png",
  "https://www.reactjsindia.com/blog/wp-content/uploads/2023/11/Employee-Management-affilate-page-1536x1038-1.png",
  "https://cdni.iconscout.com/illustration/premium/thumb/admin-lady-managing-online-data-transfer-and-security-illustration-download-in-svg-png-gif-file-formats--business-startup-inforgraphic-graph-ui-pack-illustrations-1782204.png",
];

function SlideShow() {
  const [index, setIndex] = useState(0);

  function current_slide(i) {
    setIndex(i);
  }

  function slide_next() {
    setIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }

  function slide_prev() {
    setIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }

  useEffect(() => {
    const interval = setInterval(slide_next, 3000);
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <section id="slideshowsection">
      <div id="slideshowmain">
        <div id="slideshowmaindiv">
          <button className="slideshowbtnpn" onClick={slide_prev}>
            Prev
          </button>
          <div id="slideshowimgdiv">
            <img src={images[index]} alt="Slideshow" id="slideshowimg" />
          </div>
          <button className="slideshowbtnpn" onClick={slide_next}>
            Next
          </button>
        </div>
        <div id="slideshowbtndiv">
          {images.map((_, i) => (
            <button key={i} onClick={() => current_slide(i)
            }></button>
          ))}
        </div>
      </div>
      <div id="slideshowsidebtn">
        <h2>Choose Your Role!</h2>
        <button>
          <img src="/img/admin.png" alt="Admin" />
          Admin
        </button>
        <button>
          <img src="/img/manager.png" alt="Manager" />
          Manager
        </button>
        <button>
          <img src="/img/employee.png" alt="Employee" />
          Employee
        </button>
      </div>
    </section>
  );
}
const styles = {
  hi: {
    backgroundColor: "black"
  }
}
export default SlideShow;
