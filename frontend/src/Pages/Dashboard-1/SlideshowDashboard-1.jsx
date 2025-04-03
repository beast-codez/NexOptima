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
    const [img, setImg] = useState(images[index]);
    function current_slide(i) {
        setIndex(i);
        setImg(images[i]);
    }
    async function slide_next(i){
        if (i == 3) {
            let k = 0;
            setIndex(k);
            setImg(images[k]);
        } else {
            let k = i + 1;
            setIndex(k);
            setImg(images[k]);
        }
    }
   async function slide_prev(i) {
        if (i == 0) {
            let k = 3;
            setIndex(k);
            setImg(images[k]);
        } else {
            let k = i - 1;
            setIndex(k);
            setImg(images[k]);
        }
    }
    function slide_change() {
        // setInterval(async() => {await slide_next(index)}, 1000);
        //doubt
    }
    slide_change();
    return (
      <section id="slideshowsection">
        <div id="slideshowmain">
          <div id="slideshowmaindiv">
            <button
              className="slideshowbtnpn"
              onClick={() => {
                slide_prev(index);
              }}
            >
              Prev
            </button>
            <div id="slideshowimgdiv">
              <img src={img} alt="NO Image" id="slideshowimg"></img>
            </div>
            <button
              className="slideshowbtnpn"
              onClick={() => {
                slide_next(index);
              }}
            >
              Next
            </button>
          </div>
          <div id="slideshowbtndiv">
            <button
              onClick={() => {
                current_slide(0);
              }}
            ></button>
            <button
              onClick={() => {
                current_slide(1);
              }}
            ></button>
            <button
              onClick={() => {
                current_slide(2);
              }}
            ></button>
            <button
              onClick={() => {
                current_slide(3);
              }}
            ></button>
          </div>
        </div>
        <div id="slideshowsidebtn">
          <h3>Choose Your Role!</h3>
          <button>
            <img src="/img/admin.png"></img>
            Admin
          </button>
          <button>
            <img src="/img/manager.png"></img>Manager
          </button>
          <button>
            <img src="/img/employee.png"></img>
            Employee
          </button>
        </div>
      </section>
    );
}



export default SlideShow;