import React, { Component } from 'react';

import moment from 'moment';

import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import './DatePicker.scss';

export class InlineDatePicker extends Component {

	state = {
		startDate : this.props.startDate ? (this.props.startDate) : (null)
	}

	componentDidMount () {
    if(this.props.autofocus) {
    	this.datePicker.focus();
  	}
  }

	handleSelect = (date) => {
		console.log(date);
		this.setState({ startDate : date });
		// this.props.scheduleActions.setDate(date);
		// this.props.scheduleActions.setView('day');
	}

	handleChange = (date) => {
		console.log(date);
		this.setState({ startDate : date });
		// this.props.scheduleActions.setDate(date);
		// this.props.scheduleActions.setView('day');
	}

	className () {
		className = '';
		if(this.props.error) {
			className += 'error';
		}
		return className;
	}

	customClassNames () {
		return ("");
	}

	render() {
		return (
			<div className={this.props.wrapperClassName} >
				<DatePicker
					inline
					readOnly
					autofocus={this.props.autofocus}
					selected={this.state.startDate}
					onChange={this.handleChange}
					onSelect={this.props.setDate}
					customClassNames={this.customClassNames()}
					calendarClassName="inline-datepicker"
					ref={(thisDatePicker) => {this.datePicker = thisDatePicker}}
					{...this.props}
				/>
			</div>
		);
	}
}

export default InlineDatePicker;

