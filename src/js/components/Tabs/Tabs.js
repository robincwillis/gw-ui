import React, { Component } from 'react';
import InlineSVG from 'svg-inline-react';

import './tabs.scss';

export default class Tabs extends Component {

	constructor (props) {
    super(props);
  }

	render () {
		return (
			<div>
				<div className="ui-tabs">
					<div className="tab">Tab</div>
					<div className="tab">Another Tab</div>
					<span className="underline"></span>
				</div>

				<div className="ui-tabs">
					<div className="tab">Tab</div>
					<div className="tab">Another Tab</div>
					<div className="tab">Option</div>
					<span className="underline"></span>
				</div>

				<div className="ui-tabs">
					<div className="tab">Tab</div>
					<div className="tab">Another Tab</div>
					<div className="tab">Option</div>
					<div className="tab">Another Tab</div>
					<span className="underline"></span>
				</div>

				<div className="ui-tabs">
					<div className="tab">Tab</div>
					<div className="tab">Another</div>
					<div className="tab">Option</div>
					<div className="tab">Tab</div>
					<div className="tab">Option</div>
					<span className="underline"></span>
				</div>

				<div className="ui-tabs">
					<div className="tab">Tab</div>
					<div className="tab">Another</div>
					<div className="tab">Option</div>
					<div className="tab">Tab</div>
					<div className="tab">Option</div>
					<div className="tab">Tab</div>
					<span className="underline"></span>
				</div>
			</div>
		);
	}
}
