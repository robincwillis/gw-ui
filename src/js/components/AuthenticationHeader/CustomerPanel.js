import React, { Component } from 'react';
import InlineSVG from 'svg-inline-react';

import Input from './Input';

export default class Panel extends Component {

	render () {
		return (
			<div className="container">
				<div className="panel-section">
					<div className="panel-row">
						<div className="row tight">
							<div className="col-3">
								<label className="section-label for-large-input">Customer</label>
							</div>
							<div className="col-9">
								<div className="section-content">
									<Input
										inputClass="large"
										placeholder="Customer Name"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="panel-section">
					<div className="panel-section-header">
						<h3>Account Info</h3>
					</div>
					<div className="panel-row">
						<div className="row tight">
							<div className="col-3">
								<label className="section-label">Name</label>
							</div>
							<div className="col-9">
								<div className="section-content">
									<Input
										placeholder="Customer Name"
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
										placeholder="Cutsomer Email"
									/>
								</div>
							</div>
						</div>
					</div>
					<div className="panel-row">
						<div className="row tight">
							<div className="col-3">
								<label className="section-label">Password</label>
							</div>
							<div className="col-9">
								<div className="section-content">
									<Input
										placeholder="••••••••••"
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
									/>
									<div className="panel-row">
										<div className="row tight break-sm">
											<div className="col-6">
												<Input
													placeholder="City"
												/>
											</div>
											<div className="col-3">
												<Input
													placeholder="State"
												/>
											</div>
											<div className="col-3">
												<Input
													placeholder="Zip"
												/>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="panel-section">
					<div className="panel-section-header">
						<h3>Orders</h3>
					</div>
				</div>

				<div className="panel-section">
					<div className="panel-section-header">
						<h3>Schools</h3>
					</div>
				</div>
			</div>
		);
	}
}
