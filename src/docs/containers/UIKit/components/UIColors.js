import React, { Component } from 'react';

import Section from './UISection';
import SubSection from './UISubSection';
import UIComponent from './UIComponent';


export class UIColorSwatch extends Component {

	state = {}

	componentDidMount () {
		this.getComponentColor();
	}

	getComponentColor () {
		var componentColor = this.refs.swatchComponent.style.backgroundColor;
		var swatchComponent = this.refs.swatchComponent;
		var swatchColor = window.getComputedStyle(swatchComponent, null).getPropertyValue("background-color");

		var a = swatchColor.split("(")[1].split(")")[0];
		a = a.split(",");

		function componentToHex(c) {
	    var hex = Number(c).toString(16);
	    return hex.length == 1 ? "0" + hex : hex;
		}

		function rgbToHex(r, g, b) {
	    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
		}

		const hex = rgbToHex(a[0], a[1], a[2])
		this.setState({hex, alpha: a[3]});
	}

	render() {
		return (
			<div className={"ui-color-swatch " + this.props.className}>
				<div className="swatch mb-1" ref="swatchComponent"></div>
				<p className="sm medium-weight">${this.props.variable}</p>
				<p className="sm light-text-color">{this.state.hex}{this.state.alpha ? (" alpha " + this.state.alpha) : false}</p>
			</div>
		);
	}
}

export class UIColors extends Component {

	render() {

		return (
			<Section
				id={this.props.id}
				title="Colors"
			>

				<div className="grid-flex left v-spaced">
					<div className="col-3">
						<UIColorSwatch
							className="ui-main-color"
							variable="main-color"
						/>
					</div>
					<div className="col-3">
						<UIColorSwatch
							className="ui-text-color"
							variable="text-color"
						/>
					</div>
					<div className="col-3">
						<UIColorSwatch
							className="ui-light-text-color"
							variable="light-text-color"
						/>
					</div>
					<div className="col-3">
						<UIColorSwatch
							className="ui-success-color"
							variable="success"
						/>
					</div>
					<div className="col-3">
						<UIColorSwatch
							className="ui-notify-color"
							variable="notify"
						/>
					</div>
					<div className="col-3">
						<UIColorSwatch
							className="ui-alert-color"
							variable="alert"
						/>
					</div>
					<div className="col-3">
						<UIColorSwatch
							className="ui-light-grey-color"
							variable="light-grey"
						/>
					</div>
				</div>

			</Section>
		);
	}
}

export default UIColors;