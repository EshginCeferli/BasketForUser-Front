import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div><header>
    <section id="navbar-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <nav className="navbar navbar-expand-lg navbar-light nav-color">
              <div className="logo">
                <a href="">
                  <img src="./assets/images/Logo/Online-shop-01.png" alt="" />
                </a>
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
              <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
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
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href="blog.html"
                    >
                      Blog
                    </a>
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
                <form action="">
                  <div className="search">
                    <input type="search" className="input" placeholder="Search" />
                    <button type="submit" className="my-btn">
                      <i className="fa-solid fa-magnifying-glass search-icon" />
                    </button>
                  </div>
                </form>
                <div className="dropdown">
                  <a href="">
                    <button className="dropbtn">My Account</button>
                  </a>
                  <div className="dropdown-content drop-content">
                    <a href="login.html">Login</a>
                    <a href="register.html">Register</a>
                    <a href="#">Logout</a>
                  </div>
                </div>
                <div className="basket">
                  <a href="basket.html">
                    <i className="fa-solid fa-basket-shopping">
                      <sup>0</sup>
                    </i>
                  </a>
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
  )
}

export default Navbar