import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class Loader extends Component {

	loaderClass () {
    var loaderClass = 'loader';
    if (this.props.size) {
      loaderClass += ' '+this.props.size;
    }
    if(this.props.color) {
      loaderClass += ' '+this.props.color;
    }
    return loaderClass;
  }

	render () {
		return (
			<ReactCSSTransitionGroup
				transitionName="loader"
				transitionAppear={true}
	      transitionAppearTimeout={350}
				transitionEnterTimeout={350}
				transitionLeaveTimeout={350}
				key="loader"
			>
				<div className={this.loaderClass()}>
					<div className="spinner"><div className="spinner"/></div>
				</div>
			</ReactCSSTransitionGroup>
		);
	}
}