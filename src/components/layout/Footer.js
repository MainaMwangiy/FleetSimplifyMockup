import React, { Component } from "react";
import "../../assets/home.css";
import footerlogo from "../../img/footerlogo.svg";

class Footer extends Component {
  render() {
    return (
      // <div className="footer">
      //   <div className="row">
      //     <div className="col-sm-4"></div>
      //     <div className="col-sm-4">
      //       {" "}
      //       <img
      //         src={footerlogo}
      //         style={{ textAlign: "center", height: "350px", width: "350px" }}
      //       ></img>
      //     </div>
      //     <div className="col-sm-4"></div>
      //   </div>
      //   <div className="row">
      //     <div className="col-sm-2">
      //       <p >Useful Links</p>
      //       <ul id="list">
      //         <li>
      //           <a class="nav-link" aria-current="page" href="#">
      //             About Insta Driver
      //           </a>
      //         </li>
      //         <li>
      //           <a class="nav-link " aria-current="page" href="#">
      //             Verified Search(For Employees and Drivers)
      //           </a>
      //         </li>
      //         <li>Top Ad Deature (For Drivers)</li>
      //       </ul>
      //     </div>
      //     <div className="col-sm-2">
      //       <p>Useful Links</p>
      //       <ul id="list">
      //         <li>Driver Sign up</li>
      //         <li>Driver Sign in</li>
      //       </ul>
      //     </div>
      //     <div className="col-sm-2">
      //       <p>Useful Links</p>
      //       <ul id="list">
      //         <li>FAQs</li>
      //         <li>Contact Us</li>
      //         <li>Terms and Conditions</li>
      //       </ul>
      //     </div>
      //     <div className="col-sm-2">
      //       <p>Useful Links</p>
      //     </div>
      //     <div className="col-sm-2">Social Media</div>
      //     <div className="col-sm-2">
      //       Contact Information
      //       <br />
      //       <p>@saysomething@instadriver.co</p>
      //     </div>
      //   </div>
      // </div>
      <footer className=" footer">
        <div className="row">
          <div className="col-lg-12 text-center">
            <img className="" alt="logo" src='https://www.instadriver.co/img/footerlogo.svg'></img>
          </div>
        </div>
        <div className="row">
          <div className="col-sm">
            <h4>Useful Links</h4>
            <ul>
              <li><a className="links" href="##">About InstaDriver </a></li>
              <li><a className="links" href="##">Verified Search (For employees & Drivers) </a></li>
              <li><a className="links" href="##">Top Ad Feature (For Drivers)  </a></li>
            </ul>

          </div>
          <div className="col-sm">
            <h4>Useful Links</h4>
            <ul>
              <li><a className="links" href="##">Driver Sign In </a> </li>
              <li><a className="links" href="##">Driver Sign Up </a> </li>
            </ul>

          </div>
          <div className="col-sm">
            <h4>Useful Links</h4>
            <ul>
              <li><a className="links" href="##">FAQs </a></li>
              <li><a className="links" href="##">Contact Us </a></li>
              <li><a className="links" href="##">Terms & Conditions </a></li>

            </ul>
          </div>
          <div className="col-sm">
            <h4>Social Media</h4>
            <ul>
              <li><a className="links" href="##">IG</a></li>
              <li><a className="links" href="##">YT</a></li>
              <li><a className="links" href="##">FB</a></li>
            </ul>
          </div>
        </div>
      </footer>
    );
  }
}
export default Footer;
