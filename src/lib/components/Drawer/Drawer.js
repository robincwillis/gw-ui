import React, { Component } from 'react';

import ReactTransitionGroup from 'react-transition-group';

import './Drawer';

export class Drawer extends Component {
	render() {
		return (
			<ReactTransitionGroup
				transitionName="drawer"
				transitionAppear={true}
				transitionAppearTimeout={600}
				transitionEnterTimeout={600}
				transitionLeaveTimeout={600}
			>

			{this.props.drawer.open ? (
					<div className="drawer" key={this.props.drawer.content}>
						<div className="content-wrap">
							<div
								onClick={this.props.drawerActions.closeDrawer}
								className="gw-overlay"
							/>
							<div className="panel">
								{this.props.drawer.content}
							</div>
						</div>
					</div>
				) : false}
			</ReactTransitionGroup>
		);
	}
}

export default Drawer;

