import React, { Component } from 'react';
import InlineSVG from 'svg-inline-react';

import './app-footer';

export default class AppFooter extends Component {
	render () {
		return (
			<div onClick={this.props.onClick} className="app-footer">
        <div className="container">
          <div className="flex-grid">
          	<div className="col small-text light-text-color">
          		<span>Colvard Learning Inc. </span>
          		<a href="http://colvardlearning.com/" target="_bank">www.colvardlearning.com</a>
		        </div>
		        <div className="col small-text light-text-color">
          		<span>Questions? Call 123 456 7890</span>
		        </div>
	        </div>
        </div>
      </div>
		);
	}
}