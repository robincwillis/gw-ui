import React, { Component } from 'react';

import './Loader.scss';

export class TextLoader extends Component {

	shouldComponentUpdate (nextProps, nextState) {
		return this.props.className !== nextProps.className
	}

	render () {
		if(this.props.lines) {
			var lines = Array(this.props.lines).fill().map(Math.random);
		}
		return (
			<span className={this.props.className ? ('text-loader ' + this.props.className) : ('text-loader')}>
				{this.props.lines ? (
					<span className="p-wrap">
					{lines.map( (option, index) => {
						return (<span key={'text-loader-' + index} />);
					})}
					</span>
				) : <span/>}
			</span>
		);
	}
}

export class DotLoader extends Component {

	shouldComponentUpdate (nextProps, nextState) {
		return this.props.className !== nextProps.className
	}

	render () {
		return (
			<span className={this.props.className ? ('dot-loader ' + this.props.className) : ('dot-loader')}>
				<span className="dot"/>
				<span className="dot"/>
				<span className="dot"/>
			</span>
		);
	}
}

export class LinearLoader extends Component {

  shouldComponentUpdate (nextProps, nextState) {
    return this.props.className !== nextProps.className
  }

	render () {
		return (
			<div className={this.props.className ? ('linear-loader ' + this.props.className) : ('linear-loader')}>
				<span className="first" />
				<span className="second" />
				<span className="third" />
			</div>
		);
	}
}

export default class Loader extends Component {

	shouldComponentUpdate (nextProps, nextState) {
		return this.props.className !== nextProps.className
	}

	render () {
		return (
			<div className={this.props.className ? ('spinner ' + this.props.className) : ('spinner')}>
				<svg viewBox="0 0 20 20">
				  <circle fill="transparent" cx="10" cy="10" r="10"></circle>
				</svg>
			</div>
		);
	}
}
