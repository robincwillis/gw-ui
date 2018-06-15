import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PopperJS, { referenceObject } from 'popper.js';

import './Popup.scss';

import ClickOutside from 'react-click-outside';

export class Popup extends Component {

	state = {
		open : this.props.open || false,
		styles : {}
	}

	update = () => {
    if (this.popperInstance) {
      this.popperInstance.scheduleUpdate();
    }
  }

	handleClickOutside() {
		this.props.closePopup();
	}

	componentDidMount () {
		this.popperInstance = new PopperJS(this.props.target, this.popper, {
			placement : this.props.position,
			modifiers : {
				preventOverflow: {
					boundariesElement: 'window',
					padding: 0
				},
				offset : {
					offset : '0, 20px'
				},
				arrow: { element: this.arrow },
				applyStyle: { enabled: false }
			},
			onCreate: (data) => this.setState({data}),
			onUpdate: (data) => this.setState({data})
		});
	}

	componentWillUnmount () {
		this.popperInstance.destroy();
	}

	getPopperStyle (data) {
		if (!data) { return {}; }
		const left = Math.round(data.offsets.popper.left);
		const top = Math.round(data.offsets.popper.top);
		const transform = `translate3d(${left}px, ${top}px, 0)`;

		return {
			position: data.offsets.popper.position,
			transform,
			WebkitTransform: transform,
			top: 0,
			left: 0,
			zIndex : 10000
		};
	}

	getArrowStyle (data) {
		if (!data) { return {}; }
		const left = Math.round(data.offsets.arrow.left);
		const top = Math.round(data.offsets.arrow.top);
		let styles = { position: 'absolute', left };

		if(data.flipped) {
			styles.bottom = top;
			styles.transform = `rotate(180deg)`;
		} else {
			styles.top = top;
		}

		return styles;

	}

	getTransitionName() {
		return 'popup-trans-' + this.props.position;
	}

	getClassName() {
		return this.props.className ? this.props.className : '';
	}

	render() {
		let props = Object.assign({}, this.props.children.props, this.props);
		delete props.children;
		let content = React.cloneElement(this.props.children, props);

		return (
			<div
				ref={(el) => (this.popper = el)}
				className='popup'
				style={this.getPopperStyle(this.state.data)}
			>
				<div
					ref={(el) => (this.arrow = el)}
					className='arrow'
					style={this.getArrowStyle(this.state.data)}
				/>

				{content}
			</div>
		);
	}
}

export default ClickOutside(Popup);
