import React, { Component } from "react";
import "../../assets/home.css";
import footerlogo from "../../img/footerlogo.svg";

class Footer extends Component {
  render() {
    return (
      <div className=" container-fluid footer">
        <div className="row">
          <div className="col-sm-4"></div>
          <div className="col-sm-4">
            {" "}
            <img
              src={footerlogo}
              style={{ textAlign: "center", height: "250px", width: "350px" }}
            ></img>
          </div>
          <div className="col-sm-4"></div>
        </div>
        <div className="row">
          <div className="col-sm-2">
            <p>Useful Links</p>
            <ul id="list">
              <li> About Insta Driver</li>
              <li>Verified Search(For Employees and Drivers)</li>
              <li>Top Ad Deature (For Drivers)</li>
            </ul>
          </div>
          <div className="col-sm-2">
            <p>Useful Links</p>
            <ul id="list">
              <li>Driver Sign up</li>
              <li>Driver Sign in</li>
            </ul>
          </div>
          <div className="col-sm-2">
            <p>Useful Links</p>
            <ul id="list">
              <li>FAQs</li>
              <li>Contact Us</li>
              <li>Terms and Conditions</li>
            </ul>
          </div>
          <div className="col-sm-2">
            <p>Useful Links</p>
          </div>
          <div className="col-sm-2">Social Media</div>
          <div className="col-sm-2">
            Contact Information
            <br />
            <p>@saysomething@instadriver.co</p>
          </div>
        </div>
      </div>
    );
  }
}
export default Footer;
