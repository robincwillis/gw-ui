import React, { Component } from 'react';

import Grid from '../UIGrid/UIGrid.js';
import Buttons from '../UIButtons/UIButtons.js';
import Tooltips from '../UITooltips/UITooltips.js';
import Typography from '../UITypography/UITypography.js';

import '../../css/style';
import './app.css';

export default class Order extends Component {

	render () {

		return (
			<div>

				<div className="gw-nav">
					<div className="icon">
						<div className="css-icon-menu"></div>
					</div>
					<nav>
						<ul>
							<li><a href="#grid">Grid</a></li>
							<li><a href="#buttons">Buttons</a></li>
							<li><a href="#tooltip">Tooltips</a></li>
							<li><a href="#typography">Typography</a></li>
						</ul>
					</nav>
				</div>

				<Grid />
				<Buttons />
				<Tooltips />
				<Typography />

			</div>
		);

	}
}