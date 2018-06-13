import React, { Component } from 'react';


import './Avatar.scss';

export class Avatar extends Component {

	randomColor () {
		var color = '';
		var colors = [
			'#e1d9f2',
			'#817f97',
			'#795C9B'
		]
		if(this.props.randomColor) {
			color = colors[Math.floor(Math.random() * colors.length)];
		};
		return color;
	}

	render () {

		var backgroundColor = {
			backgroundColor: this.randomColor()
		}

		return (
				<div style={backgroundColor} className={this.props.className ? ("avatar " + this.props.className) : ("avatar")}>

						{this.props.image ? (
							<div>
								<img src={this.props.image} />
								{this.props.editable ? (
										<a className="overlay">
											<input type="file" name="avatar-image" id="avatar-image" className="avatar-input" />
											<label htmlFor="avatar-image">
												<span>Update<br/>Image</span>
											</label>
										</a>
								) : false}
							</div>
						) : (
							<div className="empty-avatar">
								{this.props.initial ? (this.props.initial) : (<i className="material-icons">person</i>)}
								{this.props.editable ? (
									<a className="overlay">
										<input type="file" name="avatar-image" id="avatar-image" className="avatar-input" />
											<label htmlFor="avatar-image">
											<span>Add <br/>Image</span>
											</label>
									</a>
								) : false}
							</div>
						)}

				</div>
		);
	}
}

export default Avatar;
