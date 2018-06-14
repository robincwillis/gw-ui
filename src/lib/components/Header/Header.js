import React, { Component } from 'react';

import './Header';

class Header extends Component {

	static defaultProps = {
		title : 'Title'
	}

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
		let className = 'gw-header';
		if (this.props.className) {
			className += ' ' + this.props.className;
		}
		return className;
	}

	render () {
		return (
			<header className={this.className()}>
				<div className="container">
					<div className="grid-flex baseline">
						<div className="col grow align-left">
							{ this.props.leftContent ? this.props.leftContent : (<h1 className="h4">{this.props.title}</h1>) }
						</div>

						{this.props.centerContent ? (
							<div className="col grow align-center">
								{this.props.centerContent ? this.props.centerContent : false}
							</div>
						) : false }

						{this.props.rightContent ? (
							<div className="col grow align-right">
								{this.props.rightContent ? this.props.rightContent : false}
							</div>
						) : false }
					</div>
				</div>
			</header>
		);
	}
}

export default Header;