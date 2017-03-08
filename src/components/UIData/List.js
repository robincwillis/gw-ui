import React, { Component } from 'react';

export default class List extends Component {

	render () {
		return (
			<section id="data">
        {this.props}
      </section>
		);
	}
}