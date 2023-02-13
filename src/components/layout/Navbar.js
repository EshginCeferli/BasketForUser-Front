import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Link, NavLink, useNavigate } from "react-router-dom";

import "../../assets/css/Navbar/navbar.css";

function Navbar() {
  const navigate = useNavigate();

  const url = "https://localhost:7110";

  let token = JSON.parse(localStorage.getItem("token"));

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const [basketcount, setbasketcount] = useState("");

  useEffect(() => {
    async function getbasketcount() {
      const res = await axios.get(`${url}/api/Basket/Getbasketcount`, config);
      setbasketcount(res.data);
    }
    getbasketcount();
  }, []);

  //Get currents users name from token
  let currentToken = localStorage.getItem("token");
  let currentUser;
  if (currentToken != null) {
    function parseJwt(token) {
      var base64Url = token.split(".")[1];
      var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
      var jsonPayload = decodeURIComponent(
        atob(base64)
          .split("")
          .map(function (c) {
            return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
          })
          .join("")
      );
      return JSON.parse(jsonPayload);
    }
    currentUser =
      parseJwt(currentToken)[
        "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"
      ];
  }

  //Logout function
  function handleLogout() {
    localStorage.removeItem("token");
    sessionStorage.setItem(
      "sweetAlertMessage",
      "You signed out"
    );
    window.location.reload();    
  }

  if (sessionStorage.getItem("sweetAlertMessage")) {
    Swal.fire({
      text: sessionStorage.getItem("sweetAlertMessage"),
      icon: "success",
      timer: 2000,
    });
    sessionStorage.removeItem("sweetAlertMessage");
  }

  return (
    <div>
      <header>
        <section id="navbar-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <nav className="navbar navbar-expand-lg navbar-light nav-color">
                  <div className="logo">
                    <NavLink to={"/"}>
                      <img src="/images/Online-shop-01.png" alt="" />
                    </NavLink>
                  </div>
                  <button
                    className="navbar-toggler my-toggleer"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarTogglerDemo02"
                    aria-controls="navbarTogglerDemo02"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon" />
                  </button>
                  <div
                    className="collapse navbar-collapse"
                    id="navbarTogglerDemo02"
                  >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-center">
                      <li className="nav-item">
                        <NavLink
                          className="nav-link active"
                          aria-current="page"
                          to={"/"}
                        >
                          Home
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink
                          className="nav-link active"
                          aria-current="page"
                          to={"/shop"}
                        >
                          Shop
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          aria-current="page"
                          href="about.html"
                        >
                          About
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          aria-current="page"
                          href="contact.html"
                        >
                          Contact
                        </a>
                      </li>
                    </ul>

                    <div className="dropdown">
                      <a href="">
                        <button className="dropbtn">
                          {" "}
                          {currentToken ? currentUser : <span>Sign here</span>}
                        </button>
                      </a>
                      <div className="dropdown-content drop-content">
                        <Link to="/register">Register</Link>
                        {currentToken != null ? (
                          <a onClick={handleLogout} href="#">
                            Logout
                          </a>
                        ) : (
                          <Link to="/login">Login</Link>
                        )}
                      </div>
                    </div>
                    <div className="basket">
                      <Link to={"/basket"}>
                        <i className="fa-solid fa-basket-shopping">
                          <sup>{basketcount ? basketcount : 0}</sup>
                        </i>
                      </Link>
                    </div>
                    <div className="heart">
                      <a href="heart.html">
                        <i className="fa-regular fa-heart">
                          <sup>0</sup>
                        </i>
                      </a>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </section>
      </header>
    </div>
  );
}

export default Navbar;
