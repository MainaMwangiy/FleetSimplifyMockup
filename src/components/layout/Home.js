import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/home.css';
import img from '../../img/img.jpg';
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';

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
			<div className='container-fluid'>
				<div className='row'>
					<div className='col-sm-2 mb-2'>
						<div
							class='card mb-2'
							style={{
								marginRight: '10px',
								marginTop: '10px',
								backgroundColor: 'purple',
							}}>
							<nav class='nav flex-column' id='navHome'>
								<div class='dropdown ' aria-current='true'>
									<a
										class='nav-link dropdown-toggle '
										type='button'
										id='dropdownMenuButton'
										data-bs-toggle='dropdown'
										aria-expanded='false'>
										<i className='fa fa-user'></i> Employer Profile
									</a>
									<ul
										class='dropdown-menu'
										aria-labelledby='dropdownMenuButton'>
										<li>
											<a class='dropdown-item' href='#'>
												Action
											</a>
										</li>
										<li>
											<a class='dropdown-item' href='#'>
												Another action
											</a>
										</li>
										<li>
											<a class='dropdown-item' href='#'>
												Something else here
											</a>
										</li>
									</ul>
								</div>
								<a class='nav-link active' href='#' id='navHome'>
									<i className='fa fa-car'></i> Onboard your vehicles
								</a>
								<a class='nav-link' href='#'>
									<i className='fa fa-search'></i>Search and hire drivers
								</a>
								<a class='nav-link ' href='#'>
									<i className='fa fa-envelope'></i> Inbox
								</a>
								<a class='nav-link ' href='#'>
									<i className='fa fa-envelope-open'></i> Recruitment
								</a>
								<a class='nav-link ' href='#'>
									<i className='fa fa-globe'></i> My Organization
								</a>
								<a class='nav-link ' href='#'>
									<i className='fa fa-star'></i> Rate a driver
								</a>
								<a class='nav-link' href='#'>
									<i className='fa fa-folder'></i> My Subscription
								</a>
							</nav>
						</div>
					</div>
					<div className='col-sm-10'>
						<div className='row'>
							<div className='col-sm-12'>
								<nav class='navbar navbar-light '>
									<div class='container-fluid'>
										<form class='d-flex'>
											<input
												class='form-control me-2'
												type='search'
												placeholder='Search'
												aria-label='Search'></input>
											<Button
												id='mypopover'
												type='button'
												class='btn'
												style={{
													borderRadius: '100%',
													backgroundColor: 'white',
												}}>
												<span class='navbar-toggler-icon'></span>
											</Button>
											<Popover
												placement='bottom'
												isOpen={popoverOpen}
												target='mypopover'
												toggle={this.togglePopover}>
												<PopoverHeader>Filters</PopoverHeader>
												<PopoverBody>
													<select
														class='form-select mb-4'
														aria-label='Default select example'>
														<option selected>Message statuses</option>
														<option value='1'>Read Messages</option>
														<option value='2'>Unread Messages</option>
														<option value='3'>Opened but not responded</option>
														<option value='4'>Ongoing discussion</option>
														<option value='5'>Ended discusion</option>
													</select>
													<select
														class='form-select mb-4'
														aria-label='Default select example'>
														<option selected>Last hour</option>
														<option value='1'>12 hours agp</option>
														<option value='2'>Today</option>
														<option value='3'>This week</option>
														<option value='4'>This month</option>
														<option value='5'>This year</option>
													</select>
													<button
														type='button'
														class='btn btn-warning'
														style={{ color: '#ffffff' }}>
														Apply Filters
													</button>
													<br />
												</PopoverBody>
											</Popover>
										</form>
										<button
											type='button'
											class='btn btn-warning'
											style={{ color: '#ffffff' }}>
											<i className='fa fa-plus'></i> Start a new chat
										</button>
									</div>
								</nav>
							</div>
						</div>
						<div className='row'>
							<div className='col-sm-5 mb-4 '>
								<div
									className='card  mb-4 '
									style={{
										overflowY: 'scroll',
										height: '500px',
										margin: 20,
										textAlign: 'center',
									}}>
									<div
										class='card mb-4  '
										id='card'
										style={{ margin: 20, textAlign: 'center' }}>
										<div class='card-body small'>
											<div className='row'>
												<div className='col-sm-4'>
													<img
														src={img}
														alt='im'
														style={{
															width: '75px',
															height: '75px',
															borderRadius: '50px',
														}}></img>
													<p>John Doe</p>
													<p>@johndoe</p>
												</div>
												<div className='col-sm-8'>
													<div className='row'>
														<p>Inquiry about relocation.....</p>
													</div>
													<div className='row'>
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
										class='card mb-4 small '
										id='card'
										style={{ margin: 20, textAlign: 'center' }}>
										<div class='card-body '>
											<div className='row'>
												<div className='col-sm-4'>
													<img
														src={img}
														alt='im'
														style={{
															width: '75px',
															height: '75px',
															borderRadius: '50px',
														}}></img>
													<p>John Doe</p>
													<p>@johndoe</p>
												</div>
												<div className='col-sm-8'>
													<div className='row'>
														<p>Inquiry about relocation.....</p>
													</div>
													<div className='row'>
														<p>
															Vacany ads help you attract potential hires who
															are....
														</p>
													</div>
												</div>
											</div>
										</div>
									</div>{' '}
									<div
										class='card mb-4  small'
										id='card1'
										style={{ margin: 20, textAlign: 'center' }}>
										<div class='card-body '>
											<div className='row'>
												<div className='col-sm-4'>
													<img
														src={img}
														alt='im'
														style={{
															width: '75px',
															height: '75px',
															borderRadius: '50px',
														}}></img>
													<p>John Doe</p>
													<p>@johndoe</p>
												</div>
												<div className='col-sm-8'>
													<div className='row'>
														<p>Inquiry about relocation.....</p>
													</div>
													<div className='row'>
														<p>
															Vacany ads help you attract potential hires who
															are....
														</p>
													</div>
												</div>
											</div>
										</div>
									</div>{' '}
									<div
										class='card mb-4  small'
										id='card'
										style={{ margin: 20, textAlign: 'center' }}>
										<div class='card-body '>
											<div className='row'>
												<div className='col-sm-4'>
													<img
														src={img}
														alt='im'
														style={{
															width: '75px',
															height: '75px',
															borderRadius: '50px',
														}}></img>
													<p>John Doe</p>
													<p>@johndoe</p>
												</div>
												<div className='col-sm-8'>
													<div className='row'>
														<p>Inquiry about relocation.....</p>
													</div>
													<div className='row'>
														<p>
															Vacany ads help you attract potential hires who
															are....
														</p>
													</div>
												</div>
											</div>
										</div>
									</div>{' '}
									<div
										class='card mb-4  small'
										id='card'
										style={{ margin: 20, textAlign: 'center' }}>
										<div class='card-body '>
											<div className='row'>
												<div className='col-sm-4'>
													<img
														src={img}
														alt='im'
														style={{
															width: '75px',
															height: '75px',
															borderRadius: '50px',
														}}></img>
													<p>John Doe</p>
													<p>@johndoe</p>
												</div>
												<div className='col-sm-8'>
													<div className='row'>
														<p>Inquiry about relocation.....</p>
													</div>
													<div className='row'>
														<p>
															Vacany ads help you attract potential hires who
															are....
														</p>
													</div>
												</div>
											</div>
										</div>
									</div>{' '}
									<div
										class='card mb-4  small'
										id='card1'
										style={{ margin: 20, textAlign: 'center' }}>
										<div class='card-body '>
											<div className='row'>
												<div className='col-sm-4'>
													<img
														src={img}
														alt='im'
														style={{
															width: '75px',
															height: '75px',
															borderRadius: '50px',
														}}></img>
													<p>John Doe</p>
													<p>@johndoe</p>
												</div>
												<div className='col-sm-8'>
													<div className='row'>
														<p>Inquiry about relocation.....</p>
													</div>
													<div className='row'>
														<p>
															Vacany ads help you attract potential hires who
															are....
														</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className='col-sm-7'>
								<div
									class='card mb-4 small '
									id='chat-card'
									style={{ margin: 20, textAlign: 'center' }}>
									<div
										className='card-header'
										style={{ backgroundColor: 'lightblue' }}>
										<div className='row'>
											<div className='col-sm-2' id='chat-profile'>
												<img
													src={img}
													alt='im'
													style={{
														width: '75px',
														height: '75px',
														borderRadius: '50px',
													}}></img>
												<p>John Doe</p>
												<p>@joedoe</p>
											</div>
											<div className='col-sm-7'>
												<p>Inquiry about relocation from....</p>
											</div>
											<div className='col-sm-3'>
												<Button id='mycontact' className='contactinfo'>
													<i class='fa fa-info fa-xs icon-color'></i>
													Contact
												</Button>
												<Popover
													placement='left'
													isOpen={popoverOpenContact}
													target='mycontact'
													toggle={this.togglePopoverContact}>
													<PopoverHeader>
														{' '}
														<i class='fa fa-info fa-xs'></i>{' '}
														<p style={{ size: '2px' }}>Contact info</p>
													</PopoverHeader>
													<PopoverBody>
														<div className='row'>
															<div className='col-sm-6'>
																{' '}
																<p>Mobile Number</p>
															</div>
															<div className='col-sm-6'>
																<button className='btn btn-light'>
																	0700232343
																</button>
															</div>
														</div>
														<br />
														<div className='row'>
															<div className='col-sm-6'>
																{' '}
																<p>Mobile Number</p>
															</div>
															<div className='col-sm-6'>
																<button className='btn btn-light'>
																	0700232343
																</button>
															</div>
														</div>
													</PopoverBody>
												</Popover>
											</div>
											<div className='col-sm-1'>
												<Button
													id='mydots'
													type='button'
													style={{
														color: 'black',
														backgroundColor: 'lightblue',
													}}>
													<i class='fa fa-ellipsis-v'></i>
												</Button>
												<Popover
													placement='left'
													isOpen={popoverOpenDots}
													target='mydots'
													toggle={this.togglePopoverDots}>
													<PopoverBody className='mb-4'>
														<br />
														<Button
															id='mydots'
															class='btn btn-primary btn-dark mb-4'
															style={{ color: 'white' }}>
															Close Chat
														</Button>
														<br />
														<br />
														<Button
															id='mydots'
															class='btn btn-primary btn-dark mb-4'
															style={{ color: 'white' }}>
															Delete Chat
														</Button>
													</PopoverBody>
												</Popover>
											</div>
										</div>
									</div>
									<div class='card-body '>
										<div class='mesgs'>
											<div class='msg_history'>
												<div class='incoming_msg'>
													<div class='incoming_msg_img'></div>
													<div class='received_msg'>
														<div class='received_withd_msg'>
															<p>
																Test which is a new approach to have all
																solutions
															</p>
														</div>
													</div>
												</div>
												<div class='outgoing_msg'>
													<div class='sent_msg'>
														<p>
															Test which is a new approach to have all solutions
														</p>
													</div>
												</div>
												<div class='incoming_msg'>
													<div class='incoming_msg_img'></div>
													<div class='received_msg'>
														<div class='received_withd_msg'>
															<p>Test, which is a new approach to have</p>
														</div>
													</div>
												</div>
												<div class='outgoing_msg'>
													<div class='sent_msg'>
														<p>Apollo University, Delhi, India Test</p>
													</div>
												</div>
												<div class='incoming_msg'>
													<div class='incoming_msg_img'></div>
													<div class='received_msg'>
														<div class='received_withd_msg'>
															<p>Test, which is a new approach to have</p>
														</div>
													</div>
												</div>
												<div class='outgoing_msg'>
													<div class='sent_msg'>
														<p>Apollo University, Delhi, India Test</p>
													</div>
												</div>
												<div class='incoming_msg'>
													<div class='incoming_msg_img'></div>
													<div class='received_msg'>
														<div class='received_withd_msg'>
															<p>Test, which is a new approach to have</p>
														</div>
													</div>
												</div>
												<div class='outgoing_msg'>
													<div class='sent_msg'>
														<p>Apollo University, Delhi, India Test</p>
													</div>
												</div>
												<div class='incoming_msg'>
													<div class='incoming_msg_img'></div>
													<div class='received_msg'>
														<div class='received_withd_msg'>
															<p>Test, which is a new approach to have</p>
														</div>
													</div>
												</div>
												<div class='outgoing_msg'>
													<div class='sent_msg'>
														<p>Apollo University, Delhi, India Test</p>
													</div>
												</div>
												<div class='incoming_msg'>
													<div class='incoming_msg_img'></div>
													<div class='received_msg'>
														<div class='received_withd_msg'>
															<p>
																We work directly with our designers and
																suppliers, and sell direct to you, which means
																quality, exclusive products, at a price anyone
																can afford.
															</p>
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
			</div>
		);
	}
}

export default Home;
