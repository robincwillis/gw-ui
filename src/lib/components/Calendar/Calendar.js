import React, { Component } from 'react';

import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import CalendarKey from 'components/CalendarKey';
import Button from 'components/Button';
import Header from 'components/Header';
import FancySearchButton from 'components/FancySearchButton'

// https://github.com/intljusticemission/react-big-calendar/issues/360
// Use prop-types package instead of React.PropTypes
// Use create-react-class package instead of React.createClass
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './calendar.scss';

BigCalendar.setLocalizer(
	BigCalendar.momentLocalizer(moment)
);

const MonthEvent = ({ event }) => {
	return (
		<div className="event-month">
			<span className="event-title">{event.title}</span>
			<span className="event-time">3–3:30PM</span>
		</div>
	);
};

const Event = ({ event }) => {

	return (
		<div className="event">
			<span className="event-title">{event.title}</span>
			<span className="event-desc">{event.desc}</span>
			<a className="view-event">
				<i className="material-icons md-24">more_vert</i>
			</a>
		</div>
	);
};

class Toolbar extends Component {

	state = {
		SearchingBroadcasts : false
	}

	goToBack = () => { this.props.onNavigate('PREV'); }
	goToNext = () => { this.props.onNavigate('NEXT'); }
	goToCurrent = () => { this.props.onNavigate('TODAY'); }

	goToDayView = () => { this.props.onViewChange('day'); }
	goToWeekView = () => { this.props.onViewChange('week'); }
	goToMonthView = () => { this.props.onViewChange('month'); }

	label = () => {
		const date = moment(this.props.date);
		return (
			<div className="current-date"><b>{date.format('MMM')} {date.format('DD')},</b><span> {date.format('YYYY')}</span></div>
		);
	}

	openSearch () {
		this.setState({
			SearchingBroadcasts : true
		});
	}

	closeSearch () {
		this.setState({
			SearchingBroadcasts : false
		});
	}

	render () {
		return (
			<Header
				className="no-border"
				rightContent={
					<div className="content">
						<FancySearchButton
							placeholder="Search Broadcasts"
							openSearch={this.openSearch.bind(this)}
							closeSearch={this.closeSearch.bind(this)}
							searchIsOpen={this.state.SearchingBroadcasts}
						/>
						<Button onClick={this.props.scheduleBroadcast} label="Broadcast" icon="add" />
					</div>
				}
				centerContent={
					<div className={this.state.SearchingBroadcasts === true ? ("content searching") : ("content")}>
						<div className="date-nav">
							<button className='transparent small btn-back' data-tooltip-text="Prev Month" data-tooltip-position="bottom" onClick={this.goToBack}><i className="material-icons md-24">keyboard_arrow_left</i></button>
							<button className='transparent small btn-current' data-tooltip-text="Today" data-tooltip-position="bottom" onClick={this.goToCurrent}><i className="material-icons">today</i></button>
							{this.label()}
							<button className='transparent small btn-next' data-tooltip-text="Next Month" data-tooltip-position="bottom" onClick={this.goToNext}><i className="material-icons md-24">keyboard_arrow_right</i></button>
						</div>
					</div>
				}
				leftContent={
					<div className="content">
						<CalendarKey broadcastedCount="20" schduledCount="10" />
						<div className='change-view-buttons'>
							<button className={"small btn-go-to light " + (this.props.view === 'day' ? 'active' : '')} onClick={this.goToDayView}><span className="label-filter-off">Day</span></button>
							<button className={"small btn-go-to light " + (this.props.view === 'week' ? 'active' : '')} onClick={this.goToWeekView}><span className="label-filter-off">Week</span></button>
							<button className={"small btn-go-to light " + (this.props.view === 'month' ? 'active' : '')} onClick={this.goToMonthView}><span className="label-filter-off">Month</span></button>
						</div>
					</div>
				}
			/>
		);
	}
}

export class Calendar extends Component {

	state = {
		view : this.props.view,
		date : this.props.date ? moment(this.props.date).toDate() : new Date()
	}

	onSelectEvent = (data, event) => {
		event.preventDefault();
		this.props.scheduleActions.setEvent(data);
		this.props.openPopup(event, data);
	}

	onView = (view, event) => {
		this.setState({
			view : view
		});
	}

	onNavigate = (date) => {
		this.setState({
			date : date
		});
	}

	render() {

		const events = this.props.streamSessions.data.map( (streamSession) => {
			return {
				title : streamSession.attributes['title'],
				description : streamSession.attributes['description'],
				startDate : new Date(streamSession.attributes['start-time']),
				endDate : new Date(streamSession.attributes['end-time']),
				id : streamSession.id,
				attributes : streamSession.attributes,
				props : this.props
			}
		});

		return (
			<BigCalendar
				date={this.state.date}
				view={this.state.view}
				selectable={false}
				views={['month', 'week', 'day']}
				events={events}
				allDay={false}
				onSelectEvent={this.onSelectEvent}
				onView={this.onView}
				onNavigate={this.onNavigate}

				components={{
					toolbar: (toolbar) => {
						return(<Toolbar {...toolbar} scheduleBroadcast={this.props.scheduleBroadcast} />);
					},
					day: {
						event: Event
					},
					week: {
						event: Event
					},
					month: {
						event: MonthEvent
					}
				}}
				startAccessor='startDate'
				endAccessor='endDate'
			/>
		);
	}
}

export default Calendar;
