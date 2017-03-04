import React, { Component } from 'react';

import Grid from '../UIGrid/UIGrid.js';
import Buttons from '../UIButtons/UIButtons.js';
import Inputs from '../UIInputs/UIInputs.js';
import Icons from '../UIIcons/UIIcons.js';
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
							<li>
								<a href="#grid">Grid</a>
								<ul>
									<li><a href="#float-grid">Float Grid</a></li>
									<li><a href="#inline-grid">Inline Grid</a></li>
									<li><a href="#flex-grid">Flex Grid</a></li>
								</ul>
							</li>
							<li><a href="#buttons">Buttons</a></li>
							<li><a href="#inputs">Inputs</a></li>
							<li><a href="#icons">Icons</a></li>
							<li><a href="#tooltip">Tooltips</a></li>
							<li><a href="#typography">Typography</a></li>
						</ul>
					</nav>
				</div>

				<Grid />
				<Buttons />
				<Inputs />
				<Icons />
				<Tooltips />
				<Typography />

			</div>
		);

	}
}