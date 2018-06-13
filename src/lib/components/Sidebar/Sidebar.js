import React, { Component } from 'react';

import './Sidebar.scss';

export class Sidebar extends Component {

	logout = (event) => {
		event.preventDefault();
		this.props.authActions.logout();
	}

	openFeed = (event) => {
		event.preventDefault();
		this.props.drawerActions.openDrawer(<Feed />);
	}

	closeFeed = (event) => {
		this.props.drawerActions.closeDrawer();
	}

	render() {
		return (
			<div className="sidebar" >
				<div className="sidebar-content">

					<div className="logo">
						<div
							className="nav-item"
							to="/"
							onClick={this.closeFeed}
						>
							<InlineSVG src={LogoIcon} element="span" className="logo-icon" />
						</div>
					</div>

					<nav>
						<ul>
							<li>
								{/* can add disabled class to disable */}
								<div
									className={this.props.location.pathname === '/broadcaster' || this.props.location.pathname === '/'  ? 'nav-item active' : 'nav-item' }
									to="/broadcaster"
									onClick={this.closeFeed}
								>
									{/*<InlineSVG src={BroadcasterIcon} element="span" className="icon" />*/}
									<i className="material-icons icon md-24">videocam</i>
									<span className="label">Broadcaster</span>
									{/*
									<PopupTooltip className="right">
										<p className="small">You'll need to upgrade to broadcast your own content</p>
										<div className="button-actions inline-block tight-space-before">
											<div className="button tertiary tiny" to="/payment" >Upgrade Now</div>
										</div>
									</PopupTooltip>
									*/}
								</div>
							</li>
							<li>
								<div
									className={this.props.location.pathname === '/metrics' ? 'nav-item active' : 'nav-item' }
									to="/metrics"
									onClick={this.closeFeed}
								>
									{/*<InlineSVG src={MetricsIcon} element="span" className="icon" />*/}
									{/*<i className="material-icons icon md-24">multiline_chart</i>*/}
									<i className="material-icons icon md-24">equalizer</i>
									<span className="label">Metrics</span>
								</div>
							</li>
							<li>
								<div
									className={this.props.location.pathname === '/live-promos' ? 'nav-item active' : 'nav-item' }
									to="/live-promos"
									onClick={this.closeFeed}
								>
									{/*<InlineSVG src={AdsIcon} element="span" className="icon" />*/}
									<i className="material-icons icon md-24">label_outline</i>
									<span className="label">Live Promos</span>
								</div>
							</li>
							<li>
								<div
									className={this.props.location.pathname === '/all-streams' ? 'nav-item active' : 'nav-item' }
									to="/all-streams"
									onClick={this.closeFeed}
								>
									{/*<InlineSVG src={StreamsIcon} element="span" className="icon" />*/}
									<i className="material-icons icon md-24">subscriptions</i>
									<span className="label">All Streams</span>
								</div>
							</li>
							<li>
								<div
									className={this.props.location.pathname === '/stream-schedule' ? 'nav-item active' : 'nav-item' }
									to="/stream-schedule"
									onClick={this.closeFeed}
								>
									{/*<InlineSVG src={ScheduleIcon} element="span" className="icon" />*/}
									<i className="material-icons icon md-24">date_range</i>
									<span className="label">Stream Schedule</span>
								</div>
							</li>
							<li>
								<div
									className={this.props.location.pathname === '/manage-destinations' ? 'nav-item active' : 'nav-item' }
									to="/manage-destinations"
									onClick={this.closeFeed}
								>
									{/*<InlineSVG src={DestinationsIcon} element="span" className="icon" />*/}
									<i className="material-icons icon md-24">tune</i>
									<span className="label">Manage Destinations</span>
								</div>
							</li>
							<li>
								<div
									className={this.props.location.pathname === '/notifications' ? 'nav-item active' : 'nav-item' }
									onClick={this.openFeed}
								>
									{/*<InlineSVG src={NotificationsIcon} element="span" className="icon" />*/}
									<i className="material-icons icon md-24">notifications_none</i>
									<span className="label">Notifications</span>
									<span className="notification-bubble">0</span>
								</div>
							</li>

						</ul>
					</nav>

					{/*TODO: User Profile*/}
					<div
						className="profile" to="/profile"
						onClick={this.closeFeed}
					>
						<Avatar className="large" image="https://unsplash.it/100/100" />
						<span className="label">Profile</span>
					</div>

				</div>
			</div>
		);
	}
}

export default Sidebar;
