import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/home.css";
import img from "../../img/img.jpg";
import { Button, Popover, PopoverHeader, PopoverBody } from "reactstrap";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      popoverOpen: false,
      popoverOpenDots: false,
      popoverOpenContact: false,
    };
    this.togglePopover = this.togglePopover.bind(this);
    this.togglePopoverDots = this.togglePopoverDots.bind(this);
    this.togglePopoverContact = this.togglePopoverContact.bind(this);
  }

  togglePopover() {
    this.setState({ popoverOpen: !this.state.popoverOpen });
  }
  togglePopoverContact() {
    this.setState({ popoverOpenContact: !this.state.popoverOpenContact });
  }
  togglePopoverDots() {
    this.setState({ popoverOpenDots: !this.state.popoverOpenDots });
  }
  render() {
    const { popoverOpen, popoverOpenDots, popoverOpenContact } = this.state;
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-2 mb-2">
            <div
              class="card mb-2"
              style={{
                marginRight: "10px",
                marginTop: "10px",
                backgroundColor: "purple",
              }}
            >
              <nav class="nav flex-column" id="navHome">
                <div class="dropdown " aria-current="true">
                  <a
                    class="nav-link dropdown-toggle active"
                    aria-current="page"
                    href="#"
                    type="button"
                    id="dropdownMenuButton"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    id="navLinks"
                    style={{ color: "black" }}
                  >
                    <i className="fa fa-user"></i> Employer Profile
                  </a>
                  <ul
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
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
                </div>
                <a class="nav-link" href="#" id="navLinks">
                  <i className="fa fa-car"></i> Onboard your vehicles
                </a>
                <a class="nav-link" href="#" id="navLinks">
                  <i className="fa fa-search"></i>Search and hire drivers
                </a>
                <a class="nav-link " href="#" id="navLinks">
                  <i className="fa fa-envelope"></i> Inbox
                </a>
                <a class="nav-link " href="#" id="navLinks">
                  <i className="fa fa-envelope-open"></i> Recruitment
                </a>
                <a class="nav-link " href="#" id="navLinks">
                  <i className="fa fa-globe"></i> My Organization
                </a>
                <a class="nav-link " href="#" id="navLinks">
                  <i className="fa fa-star"></i> Rate a driver
                </a>
                <a class="nav-link" href="#" id="navLinks">
                  <i className="fa fa-folder"></i> My Subscription
                </a>
              </nav>
            </div>
          </div>
          <div className="col-sm-10">
            <div className="row">
              <div className="col-sm-12">
                <nav class="navbar navbar-light ">
                  <div class="container-fluid">
                    <form class="d-flex has-search">
                      <span class="fa fa-search form-control-feedback"></span>
                      <input
                        class="form-control me-1 small"
                        type="search"
                        placeholder="Search users, messages or chat id's"
                        aria-label="Search"
                        style={{ borderColor: "orange" }}
                      ></input>
                      <Button
                        id="mypopover"
                        type="button"
                        class="btn"
                        style={{
                          border: "none",
                          borderRadius: "100%",
                          backgroundColor: "white",
                        }}
                      >
                        <span class="navbar-toggler-icon"></span>
                      </Button>
                      <Popover
                        placement="bottom"
                        isOpen={popoverOpen}
                        target="mypopover"
                        toggle={this.togglePopover}
                      >
                        <PopoverHeader>Filters</PopoverHeader>
                        <PopoverBody>
                          <select
                            class="form-select mb-4"
                            aria-label="Default select example"
                          >
                            <option selected>Message statuses</option>
                            <option value="1">Read Messages</option>
                            <option value="2">Unread Messages</option>
                            <option value="3">Opened but not responded</option>
                            <option value="4">Ongoing discussion</option>
                            <option value="5">Ended discusion</option>
                          </select>
                          <select
                            class="form-select mb-4"
                            aria-label="Default select example"
                          >
                            <option selected>Last hour</option>
                            <option value="1">12 hours agp</option>
                            <option value="2">Today</option>
                            <option value="3">This week</option>
                            <option value="4">This month</option>
                            <option value="5">This year</option>
                          </select>
                          <button
                            type="button"
                            class="btn btn-warning"
                            style={{ color: "#ffffff" }}
                          >
                            Apply Filters
                          </button>
                          <br />
                        </PopoverBody>
                      </Popover>
                    </form>
                    <button
                      type="button"
                      class="btn btn-warning"
                      style={{ color: "#ffffff" }}
                    >
                      <i className="fa fa-plus"></i> Start a new chat
                    </button>
                  </div>
                </nav>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-5 mb-4 ">
                <div
                  className="card  mb-4 "
                  style={{
                    overflowY: "scroll",
                    height: "500px",
                    margin: 10,
                    textAlign: "center",
                  }}
                >
                  <div
                    class="card mb-4  "
                    id="card"
                    style={{ margin: 20, textAlign: "center", borderColor: "orange" }}
                  >
                    <div class="card-body small">
                      <div className="row">
                        <div className="col-sm-4">
                          <img
                            src={img}
                            alt="im"
                            style={{
                              width: "75px",
                              height: "75px",
                              borderRadius: "50px",
                            }}
                          ></img>
                          <h5>John Doe</h5>
                          <h>@johndoe</h>
                        </div>
                        <div className="col-sm-8">
                          <div className="row">
                            <p>Inquiry about relocation.....</p>
                          </div>
                          <div className="row">
                            <p>
                              Vacany ads help you attract potential hires who
                              are....
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="card mb-4 small "
                    id="card"
                    style={{ margin: 20, textAlign: "center" }}
                  >
                    <div class="card-body ">
                      <div className="row">
                        <div className="col-sm-4">
                          <img
                            src={img}
                            alt="im"
                            style={{
                              width: "75px",
                              height: "75px",
                              borderRadius: "50px",
                            }}
                          ></img>
                          <p>John Doe</p>
                          <p>@johndoe</p>
                        </div>
                        <div className="col-sm-8">
                          <div className="row">
                            <p>Inquiry about relocation.....</p>
                          </div>
                          <div className="row">
                            <p>
                              Vacany ads help you attract potential hires who
                              are....
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                  <div
                    class="card mb-4  small"
                    id="card1"
                    style={{ margin: 20, textAlign: "center" }}
                  >
                    <div class="card-body ">
                      <div className="row">
                        <div className="col-sm-4">
                          <img
                            src={img}
                            alt="im"
                            style={{
                              width: "75px",
                              height: "75px",
                              borderRadius: "50px",
                            }}
                          ></img>
                          <p>John Doe</p>
                          <p>@johndoe</p>
                        </div>
                        <div className="col-sm-8">
                          <div className="row">
                            <p>Inquiry about relocation.....</p>
                          </div>
                          <div className="row">
                            <p>
                              Vacany ads help you attract potential hires who
                              are....
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                  <div
                    class="card mb-4  small"
                    id="card"
                    style={{ margin: 20, textAlign: "center" }}
                  >
                    <div class="card-body ">
                      <div className="row">
                        <div className="col-sm-4">
                          <img
                            src={img}
                            alt="im"
                            style={{
                              width: "75px",
                              height: "75px",
                              borderRadius: "50px",
                            }}
                          ></img>
                          <p>John Doe</p>
                          <p>@johndoe</p>
                        </div>
                        <div className="col-sm-8">
                          <div className="row">
                            <p>Inquiry about relocation.....</p>
                          </div>
                          <div className="row">
                            <p>
                              Vacany ads help you attract potential hires who
                              are....
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                  <div
                    class="card mb-4  small"
                    id="card"
                    style={{ margin: 20, textAlign: "center" }}
                  >
                    <div class="card-body ">
                      <div className="row">
                        <div className="col-sm-4">
                          <img
                            src={img}
                            alt="im"
                            style={{
                              width: "75px",
                              height: "75px",
                              borderRadius: "50px",
                            }}
                          ></img>
                          <p>John Doe</p>
                          <p>@johndoe</p>
                        </div>
                        <div className="col-sm-8">
                          <div className="row">
                            <p>Inquiry about relocation.....</p>
                          </div>
                          <div className="row">
                            <p>
                              Vacany ads help you attract potential hires who
                              are....
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                  <div
                    class="card mb-4  small"
                    id="card1"
                    style={{ margin: 20, textAlign: "center" }}
                  >
                    <div class="card-body ">
                      <div className="row">
                        <div className="col-sm-4">
                          <img
                            src={img}
                            alt="im"
                            style={{
                              width: "75px",
                              height: "75px",
                              borderRadius: "50px",
                            }}
                          ></img>
                          <p>John Doe</p>
                          <p>@johndoe</p>
                        </div>
                        <div className="col-sm-8">
                          <div className="row">
                            <p>Inquiry about relocation.....</p>
                          </div>
                          <div className="row">
                            <p>
                              Vacancy ads help you attract potential hires who
                              are....
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-7">
                <div
                  class="card mb-4 small "
                  id="chat-card"
                  style={{ margin: 20, textAlign: "center" }}
                >
                  <div
                    className="card-header"
                    style={{ backgroundColor: "lightblue" }}
                  >
                    <div className="row">
                      <div className="col-sm-2" id="chat-profile">
                        <img
                          src={img}
                          alt="im"
                          style={{
                            width: "75px",
                            height: "75px",
                            borderRadius: "50px",
                          }}
                        ></img>
                        John Doe @joedoe
                      </div>
                      <div className="col-sm-7">
                        <h>Inquiry about relocation from....</h>
                      </div>
                      <div className="col-sm-3">
                        <Button
                          id="mycontact"
                          //  className="contactinfo"
                          style={{ size: "20px", marginBottom: 10 }}
                        >
                          <i class="fa fa-info fa-lg icon-color"></i>{" "}
                          &nbsp;&nbsp; Contact info
                        </Button>
                        <Popover
                          placement="left"
                          isOpen={popoverOpenContact}
                          target="mycontact"
                          toggle={this.togglePopoverContact}
                        >
                          <PopoverHeader style={{ backgroundColor: "gray" }}>
                            <i class="fa fa-info fa-lg icon-color"></i>{" "}
                            &nbsp;&nbsp;
                            <h style={{ color: "white" }}>Contact info</h>
                          </PopoverHeader>
                          <PopoverBody style={{ margin: 15 }}>
                            <div className="row">
                              <div className="col-sm-6">
                                <p>Mobile Number</p>
                              </div>
                              <div className="col-sm-6">
                                <button className="btn btn-light">
                                  0700232343
                                </button>
                              </div>
                            </div>
                            <br />
                            <div className="row">
                              <div className="col-sm-6">
                                {" "}
                                <p>Mobile Number</p>
                              </div>
                              <div className="col-sm-6">
                                <button className="btn btn-light">
                                  0700232343
                                </button>
                              </div>
                            </div>
                          </PopoverBody>
                        </Popover>
                      </div>
                      <div className="col-sm-1">
                        <Button
                          id="mydots"
                          type="button"
                          style={{
                            color: "grey",
                            border: "none",
                            backgroundColor: "lightblue",
                          }}
                        >
                          <i class="fa fa-ellipsis-v"></i>
                        </Button>
                        <Popover
                          placement="left"
                          isOpen={popoverOpenDots}
                          target="mydots"
                          toggle={this.togglePopoverDots}
                        >
                          <PopoverBody className="mb-4">
                            <br />
                            <Button
                              id="mydots"
                              class="btn btn-primary btn-dark mb-4"
                              style={{ color: "white" }}
                            >
                              Close Chat
                            </Button>
                            <br />
                            <br />
                            <Button
                              id="mydots"
                              class="btn btn-primary btn-dark mb-4"
                              style={{ color: "white" }}
                            >
                              Delete Chat
                            </Button>
                          </PopoverBody>
                        </Popover>
                      </div>
                    </div>
                  </div>
                  <div
                    class="card-body "
                    style={{ overflowY: "scroll", height: "516px" }}
                  >
                    <div class="mesgs">
                      <div class="msg_history">
                        <div class="d-flex justify-content-start mb-4">
                          <div class="img_cont_msg"></div>
                          <div class="msg_cotainer">
                            {" "}
                            Cupidatat enim irure sint culpa anim mollit amet sit
                            consectetur veniam laboris dolor proident culpa.
                            Reprehenderit nostrud sit ex officia enim velit.
                            Eiusmod ad elit velit sit et sint voluptate nulla
                            laboris commodo. Deserunt ea esse nostrud est nulla
                            duis exercitation consequat dolor minim nostrud
                            proident consectetur sint. Consequat incididunt quis
                            irure deserunt deserunt ipsum dolor. Magna minim
                            reprehenderit magna tempor duis cupidatat minim.
                            <span class="msg_time">9:00 AM, Today</span>
                          </div>
                        </div>

                        <div class="d-flex justify-content-end mb-4">
                          <div class="msg_cotainer_send">
                            Dolore tempor deserunt velit et sit magna
                            exercitation aute culpa labore nisi laboris id. Duis
                            in deserunt sunt elit excepteur commodo voluptate
                            qui est. Elit voluptate in velit adipisicing qui
                            culpa. Irure enim mollit aliqua minim nulla sint ea
                            aliquip proident ex consequat. Proident pariatur
                            fugiat reprehenderit id aute nulla qui esse.
                            <span class="msg_time_send">9:05 AM, Today</span>
                          </div>
                        </div>
                        <div class="d-flex justify-content-start mb-4">
                          <div class="img_cont_msg"></div>
                          <div class="msg_cotainer">
                            {" "}
                            Cupidatat enim irure sint culpa anim mollit amet sit
                            consectetur veniam laboris dolor proident culpa.
                            Reprehenderit nostrud sit ex officia enim velit.
                            <span class="msg_time">9:00 AM, Today</span>
                          </div>
                        </div>

                        <div class="d-flex justify-content-end mb-4">
                          <div class="msg_cotainer_send">
                            Adipisicing proident quis fugiat velit consequat. Ea
                            est dolore consectetur in deserunt ullamco
                            reprehenderit quis deserunt quis enim et. Dolor in
                            elit nostrud incididunt sunt in. Mollit qui esse et
                            id esse cillum adipisicing incididunt cupidatat sit
                            sunt. Dolore tempor deserunt velit et sit magna
                            exercitation aute culpa labore nisi laboris id. Duis
                            in deserunt sunt elit excepteur commodo voluptate
                            qui est. Elit voluptate in velit adipisicing qui
                            culpa. Irure enim mollit aliqua minim nulla sint ea
                            aliquip proident ex consequat. Proident pariatur
                            fugiat reprehenderit id aute nulla qui esse.
                            <span class="msg_time_send">9:05 AM, Today</span>
                          </div>
                        </div>
                        <div class="d-flex justify-content-start mb-4">
                          <div class="img_cont_msg"></div>
                          <div class="msg_cotainer">
                            I am looking for your next templates
                            <span class="msg_time">9:07 AM, Today</span>
                          </div>
                        </div>
                        <div class="d-flex justify-content-end mb-4">
                          <div class="msg_cotainer_send">
                            Ok, thank you have a good day
                            <span class="msg_time_send">9:10 AM, Today</span>
                          </div>
                          <div class="img_cont_msg"></div>
                        </div>
                        <div class="d-flex justify-content-start mb-4">
                          <div class="img_cont_msg"></div>
                          <div class="msg_cotainer">
                            Bye, see you
                            <span class="msg_time">9:12 AM, Today</span>
                          </div>
                        </div>
                        <div className="card" style={{ margin: "50px", borderColor: "orange" }}>
                          <textarea placeholder="Type a message....." style={{ border: "none" }}></textarea>
                          <div class="input-group-append navbar-light bg-light" >
                            <span class="btn " ><i class="fa fa-paperclip"></i></span>
                              &nbsp;&nbsp;
                              <span class="btn"><i class="fa fa-camera"></i></span> &nbsp;&nbsp;
                              <span class="btn "><i class="fa fa-location-arrow"></i></span> &nbsp;&nbsp;
                            </div>

                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
