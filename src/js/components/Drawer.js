import React, { Component } from 'react';
import { connect } from 'react-redux';

import { openDrawer, closeDrawer } from 'actions/drawer';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import 'sass/components/drawer';
import 'sass/components/panel';

class Drawer extends Component {

	render () {
		let drawer = this.props.drawer.toJSON();

		return (
			<ReactCSSTransitionGroup
				transitionName="drawer"
				transitionAppear={true}
	      transitionAppearTimeout={600}
				transitionEnterTimeout={600}
				transitionLeaveTimeout={600}
			>
				{drawer.drawerOpen ? (
					<div className="drawer" key={drawer.panel}>
						<div className="panel-wrap">
							{drawer.panel}
							<div
								onClick={this.props.closeDrawer}
								className="gw-overlay"
							/>
						</div>
					</div>
				) : false}
			</ReactCSSTransitionGroup>
		);
	}
}

const mapStateToProps = (state) => {
	return {drawer : state.drawer };
};

const mapDispatchToProps = (dispatch) => {
	return {
		openDrawer :  (panel) => { dispatch(openDrawer(panel)); },
		closeDrawer : () => { dispatch(closeDrawer()); }
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Drawer);

