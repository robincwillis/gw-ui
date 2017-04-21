import React, { Component } from 'react';


export class PanelSection extends Component {
	render () {
		return(
			<div className="panel-section">
				{this.props.header ? (
					<div className="panel-section-header">
						<h3>{this.props.header}</h3>
					</div>
				) : false}
				<div className="panel-row">
					<div className="row tight">
						<div className="col-12">
							{this.props.children}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export class OrderSection extends Component {
	render () {
		return(
			<div className="order-section">
				{this.props.header ? (
					<div className="panel-section-header">
						<h3>{this.props.header}</h3>
					</div>
				) : false}
				<div className="row tight">
					<div className="col-3">
						<div className="order-section-title">
							{/* <label className="section-label"> */}
							<label className="section-label for-large-input">{this.props.label}</label>

						</div>
					</div>
					<div className="col-9">
						<div className="section-content">
							{this.props.children}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export class PanelSectionWithLabel extends Component {
	render () {
		return(
			<div className="panel-section">
				{this.props.header ? (
					<div className="panel-section-header">
						<h3>{this.props.header}</h3>
					</div>
				) : false}
				<div className="panel-row">
					<div className="row tight">
						<div className="col-3">
							<div className="order-section-title">
								{/* <label className="section-label"> */}
								<label className="section-label for-large-input">{this.props.label}</label>
							</div>
						</div>
						<div className="col-9">
							<div className="section-content">
								{this.props.children}
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}




