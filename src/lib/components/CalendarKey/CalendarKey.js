import React, { Component } from 'react';
import { connect } from 'react-redux';

import actionWrapper from 'util/actionWrapper';
import * as streamSessionActions from 'actions/streamSessions';

import './CalendarKey.scss';

export class CalendarKey extends Component {

	componentWillMount () {
		//load scheduled
		//load broadcasted
	}

	render() {
		return (
			<div className="calendar-key">
				<div className="calendar-key-item">
					<div className="number">{this.props.broadcastedCount}</div>
					<span className="label">Broadcasted</span>
				</div>
				<div className="calendar-key-item">
					<div className="number pop-color">{this.props.schduledCount}</div>
					<span className="label">Scheduled</span>
				</div>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return actionWrapper({
		streamSessionActions
	}, dispatch);
};

export default connect(null, mapDispatchToProps)(CalendarKey);
