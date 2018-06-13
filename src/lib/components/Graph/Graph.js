import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import d3Graph from './d3/d3Graph';

import './graph.scss';

const defaults = {
	width  : '100%',
	height : '100%',
	margin : 10,
	barHeight : 10,
	barPadding : 2,
	strokeColor : 'black',
	backgroundColor : 'white',
	fillColor : 'blue',
}

export class Graph extends Component {

	//Styling Settings Here
	componentDidMount () {
		this.el = ReactDOM.findDOMNode(this);
		defaults.width = this.el.offsetWidth;
		defaults.height = this.el.offsetHeight;
		const props = this.props.styles;
		d3Graph.draw(this.el, Object.assign(defaults, props), this.getGraphState());

		window.addEventListener("resize", this.update);

	}

	//Scale, Data, Domain etc.
	getGraphState () {

		//TODO Map Data from Props
		let data = this.props.data.map(d => Object.assign({}, d));

		return {
			data : data,
			type : this.props.type,
			x : this.props.x,
			y : this.props.y
		}

	}

	componentWillUnmount () {
		window.removeEventListener("resize", this.update);
	}

	componnentDidReceiveProps (prevProps) {
		this.update();
	}

	update = () => {

		defaults.width = this.el.offsetWidth;
		defaults.height = this.el.offsetHeight;
		const props = this.props.styles;

		d3Graph.draw(this.el, Object.assign(defaults, props), this.getGraphState())
	}

	render () {
		let style = {
			height : this.props.height
		}
		return (
			<div className="graph" style={style}>
			</div>
		);
	}
}

export default Graph;