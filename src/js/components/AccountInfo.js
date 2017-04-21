import React, { Component } from 'react';
import InlineSVG from 'svg-inline-react';

import Input from './Input';

export default class AccountInfo extends Component{

	constructor(props) {
		super(props);
		this.state = {
			customer : this.props.customer
		};
	}


	render () {
		return (
			<div className="panel-section">
				<div className="panel-section-header">
					<h3>Account Info</h3>
				</div>
				<div className="panel-row">
					<div className="row tight">
						<div className="col-3">
							<label className="section-label">First Name</label>
						</div>
						<div className="col-9">
							<div className="section-content">
								<Input
									placeholder="First Name"
									name="contactInfo.firstName"
									value={this.state.customer.contactInfo.firstName || ''}
									onChange={this.props.updateCustomer.bind(this)}
								/>
							</div>
						</div>
					</div>
				</div>
				<div className="panel-row">
					<div className="row tight">
						<div className="col-3">
							<label className="section-label">Last Name</label>
						</div>
						<div className="col-9">
							<div className="section-content">
								<Input
									placeholder="First Name"
									name="contactInfo.lastName"
									value={this.state.customer.contactInfo.lastName || ''}
									onChange={this.props.updateCustomer.bind(this)}
								/>
							</div>
						</div>
					</div>
				</div>
				<div className="panel-row">
					<div className="row tight">
						<div className="col-3">
							<label className="section-label">Email</label>
						</div>
						<div className="col-9">
							<div className="section-content">
								<Input
									placeholder="Email"
									name="contactInfo.emailAddress"
									value={this.state.customer.contactInfo.emailAddress || ''}
									onChange={this.props.updateCustomer.bind(this)}
								/>
							</div>
						</div>
					</div>
				</div>
				<div className="panel-row">
					<div className="row tight">
						<div className="col-3">
							<label className="section-label">Phone Number</label>
						</div>
						<div className="col-9">
							<div className="section-content">
								<Input
									placeholder="Phone Number"
									name="contactInfo.phoneNumber"
									value={this.state.customer.contactInfo.phoneNumber || ''}
									onChange={this.props.updateCustomer.bind(this)}
								/>
							</div>
						</div>
					</div>
				</div>
				<div className="panel-row">
					<div className="row tight">
						<div className="col-3">
							<label className="section-label">Address</label>
						</div>
						<div className="col-9">
							<div className="section-content">
								<Input
									placeholder="Street Address"
									name="contactAddress.street"
									value={this.state.customer.contactAddress.street || ''}
									onChange={this.props.updateCustomer.bind(this)}
								/>
								<div className="panel-row">
									<div className="row tight break-sm">
										<div className="col-6">
											<Input
												placeholder="City"
												name="contactAddress.city"
												value={this.state.customer.contactAddress.city || ''}
												onChange={this.props.updateCustomer.bind(this)}
											/>
										</div>
										<div className="col-3">
											<Input
												placeholder="State"
												name="contactAddress.state"
												value={this.state.customer.contactAddress.state || ''}
												onChange={this.props.updateCustomer.bind(this)}
											/>
										</div>
										<div className="col-3">
											<Input
												placeholder="Zip"
												name="contactAddress.postalCode"
												value={this.state.customer.contactAddress.postalCode || ''}
												onChange={this.props.updateCustomer.bind(this)}
											/>
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