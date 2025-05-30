import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./Home.css";
import { handleSuccess, handleError } from "../../utils";
import { ToastContainer } from "react-toastify";
import api from "../../api";
import { Building } from "lucide-react";
import Footer from "../../Components/Footer";
const Home = () => {
  document.title = "NexOptima | Home";
  const [branches, setBranches] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalDetails, setModalDetails] = useState({
    mbranchCode: "",
    mname: "",
  });
  const [searchResults, setSearchResults] = useState(null);
  const handleSearch = async (e) => {
    e.preventDefault();
    const branchCode = e.target.searchBranch.value.trim();
    if (!branchCode) {
      handleError("Please enter a branch code to search.");
      return;
    }
    const res = api.post("/searchManager", {
      branchCode: branchCode,
    });
    res
      .then((response) => {
        if (response.data.success === false) {
          handleError(response.data.message);
          setSearchResults(null);
        } else {
          
          setSearchResults(response.data.managers);
        }
      })
      .catch((error) => {
        console.error("Error searching for managers:", error);
        handleError("An error occurred while searching for managers.");
      });
  };
  const handleAddBranch = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/addBranch", {
        branchCode: modalDetails.mbranchCode,
        name: modalDetails.mname,
      });
      handleSuccess(response.data.message);
      setModalDetails({ mbranchCode: "", mname: "" });
      setIsModalOpen(false);
      window.location.reload();
    } catch (error) {
      console.error("Error adding branch:", error);
    }
  };
  const handleAddManager = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    try {
      const response = await api.post("/addManager", {
        name: data.name,
        branchCode: data.branch,
        email: data.email,
        password: data.password,
      });
      if (response.data.success === false) {
        handleError(response.data.message);
      }
      handleSuccess(response.data.message);
      setModalDetails({ mbranchCode: "", mname: "" });
      window.location.reload();
    } catch (error) {
      console.error("Error adding manager:", error);
      handleError(error.response.data.message);
    }
  };
  useEffect(() => {
    const fetchBranches = async () => {
      try {
        const response = await api.get("/branches");
        setBranches(response.data);
      } catch (error) {
        console.error("Error fetching branches:", error);
      }
    };
    fetchBranches();
  }, []);
  return (
    <>
      <div className={` ${isModalOpen ? "blurred" : ""}`}>
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
              <h2>Add A Branch</h2>
              <p>You Can Add Branches By Clicking "Add New Branch Button"</p>
            </div>
            <button
              id="homesection1btn"
              onClick={() => {
                setIsModalOpen(true);
              }}
            >
              + Add New Branch
            </button>
          </div>
        </section>
      </div>
      <div className={`modal ${isModalOpen ? "open" : ""}`}>
        <div className="modal-content">
          <div className="modal-top">
            <h2>Add Branch</h2>
            <span className="close" onClick={() => setIsModalOpen(false)}>
              &times;
            </span>
          </div>
          <form id="addBranchForm" onSubmit={handleAddBranch}>
            <div className="formfields">
              <label htmlFor="mbranchCode">Branch Code:</label>
              <input
                type="text"
                name="mbranchCode"
                id="mbranchCode"
                value={modalDetails.branchCode}
                onChange={(e) =>
                  setModalDetails((prev) => ({
                    ...prev,
                    [e.target.name]: e.target.value,
                  }))
                }
              />
            </div>
            <div className="formfields">
              <label htmlFor="mname">Branch Name:</label>
              <input
                type="text"
                name="mname"
                id="mname"
                value={modalDetails.name}
                onChange={(e) =>
                  setModalDetails((prev) => ({
                    ...prev,
                    [e.target.name]: e.target.value,
                  }))
                }
              />
            </div>
            <button id="addBranchbtn" type="submit">
              +Add Branch
            </button>
          </form>
        </div>
      </div>
      <div className={` ${isModalOpen ? "blurred" : ""}`}>
        <div className="add-container">
          <div className="addManager">
            <form id="addManagerForm" onSubmit={(e) => handleAddManager(e)}>
              <h2>Add Manager</h2>
              <div className="formfields">
                <label htmlFor="branch">Branch Code :</label>
                <input type="text" name="branch" id="branch" />
              </div>
              <div className="formfields">
                <label htmlFor="name">Name :</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="formfields">
                <label htmlFor="email">Email :</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="formfields">
                <label htmlFor="password">Password :</label>
                <input type="text" name="password" id="password" />
              </div>
              <button id="addManagerbtn" type="submit">
                +Add Manager
              </button>
            </form>
          </div>
          <div className="viewBranches">
            <h2> Branches</h2>
            {branches?.length > 0 ? (
              <div className="branch-list">
                <div className="branch-card-head">
                  <p>Branch Code</p>

                  <p>Branch Name</p>
                </div>
                {branches.map((branch) => (
                  <div className="branch-card" key={branch._id}>
                    <p>{branch.branchCode}</p>
                    <p>{branch.name}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p style={{ color: "white" }}>No branches available.</p>
            )}
          </div>
        </div>
        <div className="searchManager">
          <h2>Search Manager</h2>
          <form
            id="searchManagerForm"
            onSubmit={(e) => {
              handleSearch(e);
            }}
          >
            <div className="formfields">
              <label htmlFor="searchManager">Enter Branch Code :</label>
              <input type="text" name="searchBranch" id="searcManager" />
            </div>

            <button id="searchManagerbtn" type="submit">
              Search
            </button>
          </form>
          {searchResults ? (
            <div className="search-results">
              <div className="searchOptions">
              <h2>Search Results:</h2>
              <button onClick={()=>setSearchResults(null)} className = "close-results">X</button>

              </div>
              <div className="search-result-list">
                <div className="search-result-card">
                  <p>Name: {searchResults.name}</p>
                  <p>Email: {searchResults.email}</p>
                  <p>Branch Code: {searchResults.branchCode}</p>
                </div>
              </div>
            </div>
          ) : (
            <p></p>
          )}
        </div>
      </div>
      <Footer />
      <ToastContainer />
    </>
  );
};

export default Home;
