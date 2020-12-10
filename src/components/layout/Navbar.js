import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              InstaDriver
            </a>
          </div>
          <div class="collapse navbar-collapse">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <button
                  class="btn btn-secondary bg-light"
                  style={{ color: "black" }}
                >
                  Jobs
                </button>
              </li>
            </ul>
          </div>
          <div class="collapse navbar-collapse">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <button
                  class="btn btn-secondary bg-light"
                  style={{ color: "black" }}
                >
                  Get Social
                </button>
              </li>
            </ul>
          </div>
          <div class="collapse navbar-collapse">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a
                  class="nav-link active bg-dark"
                  aria-current="page"
                  href="#"
                  style={{ color: "white" }}
                >
                  James Keem
                </a>
              </li>
            </ul>
          </div>
          <div class="collapse navbar-collapse">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                Menu
                <button
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span
                    class="navbar-toggler-icon"
                    style={{ color: "white" }}
                  ></span>
                </button>
              </li>
            </ul>
          </div>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        </nav>
      </div>
    );
  }
}
export default Navbar;
