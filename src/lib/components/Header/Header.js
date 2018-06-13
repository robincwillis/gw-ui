import React, { Component } from 'react';

import './Header';

class Header extends Component {

	children () {
		if (this.props.children) {
			return (
				this.props.children
			);
		}
		else {
			return false;
		}
	}

	className () {
		let className = 'content-header';
		if (this.props.className) {
			className += ' ' + this.props.className;
		}
		return className;
	}

	render () {
		return (
			<div className={this.className()}>
				<div className="container">
					{this.props.leftContent ? (
						<div className="left">
							{this.props.leftContent ? this.props.leftContent : false}
						</div>
					) : (this.props.title ? (<h1 className="page-title h4">{this.props.title}</h1>) : false)}

					{this.props.centerContent ? (
						<div className="center">
							{this.props.centerContent ? this.props.centerContent : false}
						</div>
					) : false }

					{this.props.rightContent ? (
						<div className="right">
							{this.props.rightContent ? this.props.rightContent : false}
						</div>
					) : false }
				</div>
			</div>
		);
	}
}

export default Header;