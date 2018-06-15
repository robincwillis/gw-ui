import React, { Component } from 'react';

import Header from 'components/Header';

import InlineSVG from 'svg-inline-react';

import Button from 'components/Button';
import Input from 'components/Input';
import ProfileCircle from 'components/Avatar';

import './Navigation.scss';

class Navigation extends Component {

	render () {

		if(this.props.loading) {
			return false;
		}

		return (
			<div>
				<Header
					{...this.props}
					leftContent={
						<div className="content">
						{/*
							<NavLink
								exact to="/"
								onClick={this.closeFeed}
								activeClassName="active"
							>
								<InlineSVG src={this.props.logo} element="span" className="icon logo" />
							</NavLink>
						*/}
						{/*
							<nav>
								<ul>
									<li className="nav-item">
										<NavLink
											exact to="/"
											onClick={this.closeFeed}
											activeClassName="active"
										>
											Reports
										</NavLink>
									</li>
								</ul>
							</nav>
						*/}
						</div>
					}
					rightContent={
						<div className="content">
							<Button
								history={this.props.history}
								label="New Report"
								icon="add"
								className="small"
								link="/create-report"
							/>
							<Button
								icon="?"
								className="help-btn small circle notify-btn"
								href="https://www.google.com/"
								target="_blank"
								tooltipText="FAQs"
								tooltipPosition="bottom"
							/>
							<Button
								icon="person"
								className="account-btn small circle notify-btn"
								link="/profile"
							/>
						</div>
					}
				/>

				<Notifications />
			</div>
		);
	}
}


export default Navigation;
