import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";
import { Home } from "../page/Home";
import "./Navbar.css";
import Memory from "../page/Memory";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
        <div className="container py-2">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img
              src={logo}
              alt="logo"
              className="rounded-circle me-3"
              style={{ height: "60px" }}
            />
            <span className="text-white fw-bold fs-4">Meeting Minutes</span>
          </Link>
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
              <li className="nav-item dropdown">
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
                    <Link className="dropdown-item" to="/Memory">
                      Audio to summary
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Video to summary
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/Sum">
                      PDF to summary
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white fs-5" to="/About">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white fs-5" href="#">
                  Contact
                </a>
              </li>
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
