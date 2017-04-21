import React, { Component } from 'react';
import InlineSVG from 'svg-inline-react';

import 'sass/components/ui-grid';

export default class UIGrid extends Component {

	constructor (props) {
    super(props);
  }

	render () {
		return (
			<div className="container ui-grid">
				<div className="row">
					<div className="col-1"/>
					<div className="col-1"/>
					<div className="col-1"/>
					<div className="col-1"/>
					<div className="col-1"/>
					<div className="col-1"/>
					<div className="col-1"/>
					<div className="col-1"/>
					<div className="col-1"/>
					<div className="col-1"/>
					<div className="col-1"/>
					<div className="col-1"/>
				</div>
			</div>
		);
	}
}
