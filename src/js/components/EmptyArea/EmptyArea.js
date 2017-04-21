import React, { Component } from 'react';
import InlineSVG from 'svg-inline-react';

import './empty-area';

export default class EmptyArea extends Component {
	render () {
		return (
			<div onClick={this.props.onClick} className="empty-area">
        <div className="label">
          {this.props.icon ? (<InlineSVG src={this.props.icon} element="span" className="icon" />) : false}
          <div className="text">{this.props.label}</div>
        </div>
      </div>
		);
	}
}