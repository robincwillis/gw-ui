import React, { Component } from 'react';

import './loader.scss';

class TextLoader extends Component {

	shouldComponentUpdate (nextProps, nextState) {
		return this.props.className !== nextProps.className
	}

	render () {
		return (
			<span className={this.props.className ? ('text-loader ' + this.props.className) : ('text-loader')}>
				{this.props.className == "paragraph" ? (
					<span className="p-wrap">
						<span/>
						<span/>
						<span/>
						<span/>
						<span/>
						<span/>
						<span/>
						<span/>
						<span/>
						<span/>
					</span>
				) : (
					<span/>
				)}
			</span>
		);
	}
}

export default TextLoader;