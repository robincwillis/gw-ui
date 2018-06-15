import React, { Component } from 'react';
import InlineSVG from 'svg-inline-react';

import Facebook from 'assets/icons/facebook';
import YouTube from 'assets/icons/youtube';
import Twitch from 'assets/icons/twitch';

import Button from 'components/Button';
import Modal from 'components/Modal';

import './EventPopup.scss';

export class EventPopup extends Component {

  deleteEvent = () => {
    this.props.modalActions.showModal('delete-event', null, {
      onClose : (result) => {
        if(result) {
          this.props.streamSessionActions.remove(this.props.schedule.event.id);
        }
      }
    });
  }

	render () {
    let disabled = this.props.disabled ? true : false;
    console.log(this.props);
		return (
      <div className="event-popup">
        <div className="left align-center">
          <div className="user flex-grow">
            <div className="avatar large"><img src="https://unsplash.it/120/120"/></div>
            <h5>Jenny Slate</h5>
          </div>
          <div className="collaborators">
            <h6 className="p small">Collaborators</h6>
            <div className="avatar" data-tooltip-text="Collaborator Name" data-tooltip-position="top"><img src="https://unsplash.it/120/120"/></div>
            <div className="avatar" data-tooltip-text="Collaborator Name" data-tooltip-position="top"><img src="https://unsplash.it/120/120"/></div>
            <div className="avatar" data-tooltip-text="Collaborator Name" data-tooltip-position="top"><img src="https://unsplash.it/120/120"/></div>
            <div className="avatar" data-tooltip-text="Collaborator Name" data-tooltip-position="top"><img src="https://unsplash.it/120/120"/></div>
            <div className="avatar" data-tooltip-text="Collaborator Name" data-tooltip-position="top"><img src="https://unsplash.it/120/120"/></div>
          </div>
        </div>
        <div className="right">
          <div className="flex-grow">
            <h5 className="title bold">{this.props.schedule.event.title}</h5>
            <p className="description h5">{this.props.schedule.event.description}</p>
            <div className="event-meta small">
              <p>Entertainment</p>
              <p>Public</p>
            </div>
            <div className="destinations main-color-2">
              <InlineSVG src={Facebook} element="span" className="icon" />
              <InlineSVG src={YouTube} element="span" className="icon" />
              <InlineSVG src={Twitch} element="span" className="icon" />
            </div>
          </div>
          <div className="actions">
            <div className="flex-grow">
              <Button
                label="Invite to Watch"
                className="tertiary"
                onClick={this.props.setCalendarView.bind(this, 'EVENT_DETAILS')}
              />
            </div>
            <Button
              tooltipText="Delete"
              tooltipPosition="top"
              className="transparent tiny circle"
              icon="delete"
              onClick={this.deleteEvent}
            />
          </div>
        </div>
        <div className="top-right">
          <Button
            onClick={this.props.setCalendarView.bind(this, 'EVENT_DETAILS')}
            tooltipText="Settings"
            tooltipPosition="top"
            className="transparent tiny circle"
            icon="settings"
          />
        </div>
        <Modal
          title="Delete Event"
          id="delete-event"
        />
      </div>
		);
	}
}

export default EventPopup;
