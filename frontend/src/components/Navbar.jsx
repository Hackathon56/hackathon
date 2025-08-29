import React from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "../assets/logo.jpg";
import { Home } from "../page/Home";
function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
        <div className="container py-2">
          <a className="navbar-brand d-flex align-items-center" href="/">
            <img
              src={logo}
              alt="logo"
              className="rounded-circle me-3 ms-4"
              style={{ height: "60px" }}
            />
            <span className="text-white fw-bold fs-4">Meeting Minutes</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
              <li className="nav-item dropdown me-4">
                <a
                  className="nav-link dropdown-toggle text-white fs-5"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Audio to summary
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Video to summary
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/Sum">
                      PDF to summary
                    </a>
                  </li>
                </ul>
              </li>
              {/* About Link */}
              <li className="nav-item me-4">
                <a
                  className="nav-link text-white fs-5" // CSS hover will be handled by .nav-link:hover
                  href="/About"
                >
                  About
                </a>
              </li>
              {/* Contact Link */}
              <li className="nav-item me-4">
                <a className="nav-link text-white fs-5" href="#">
                  Contact
                </a>
              </li>
              {/* Sign Up Button Link */}
              <li className="nav-item">
                <a className="btn btn-white bg-col text-white fs-5" href="#">
                  Sign Up
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export { Navbar };
