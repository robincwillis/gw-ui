import React, { Component } from 'react';

import Button from 'components/Button';

import './Card.scss';

export class Card extends Component {

	state = {}


	render () {
		return (
				<div className={this.props.className ? ("card padded " + this.props.className) : ("card padded")}>

					<div className="card-image">
						<img src="https://unsplash.it/640/360" />
						<Button
							icon={PlayIcon}
							className="circle play-button"
						/>
						<div className="actions">
							<Button
								icon="equalizer"
								tooltipText="View Metrics"
								tooltipPosition="top"
								className="circle small transparent white"
							/>
							<Button
								icon="history"
								tooltipText="View Scheduling"
								tooltipPosition="top"
								className="circle small transparent white"
							/>
						</div>
					</div>

					<div className="card-row general-info">
						<span className="title bold">{this.props.title}</span>
						<span className="description">{this.props.description}</span>
						<div className="card-actions">
							<div className="float-grid no-break">
								<div className="col-8">
									<Button
										disabled="true"
										className="transparent circle main-color-2"
									/>
									<Button
										disabled="true"
										className="transparent circle main-color-2"
									/>
									<Button
										disabled="true"
										className="transparent circle main-color-2"
									/>
								</div>
							</div>
						</div>
					</div>

				</div>
		);
	}
}

export default Card;
