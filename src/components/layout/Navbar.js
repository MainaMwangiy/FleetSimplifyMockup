import React, { Component } from "react";
import { Button } from "reactstrap";
import logo from "../../img/logo.svg";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              <img src={logo}></img>
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
                <a
                  class="nav-link active navbar-light bg-light"
                  aria-current="page"
                  href="#"
                  style={{ color: "black" }}
                >
                  Menu &nbsp;&nbsp;
                  <Button
                    id="mymenu"
                    type="button"
                    class="dropdown-toggle navbar-light bg-light "
                    data-bs-toggle="dropdown"
                    aria-current="page"
                    aria-expanded="false"
                    style={{
                      border: "none",
                      backgroundColor: "white",
                    }}
                  >
                    <span class="navbar-toggler-icon navbar-light bg-light"></span>
                  </Button>
                  <ul class="dropdown-menu" aria-labelledby="mymenu">
                    <li>
                      <a class="dropdown-item active bg-dark" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </a>
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
