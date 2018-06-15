import React, { Component } from 'react';
import InlineSVG from 'svg-inline-react';

import Input from 'components/Input';

import './ToggleListItem.scss';

export class ToggleListItem extends Component {

	state = {
		selected : false
	}

	selectItem (event) {
		// console.log(event.target.checked);
		this.setState({
			selected : event.target.checked
		});
	}

	render() {
		return (
			<label htmlFor={this.props.title} className={this.state.selected === true ? ('toggle-list-item flex-grid tight-gutter no-break middle active') : ('toggle-list-item flex-grid tight-gutter no-break middle')}>
				{this.props.icon ? (
					<div className="col no-grow">
						<InlineSVG src={this.props.icon} element="span" className="icon" />
					</div>
				) : false}
				<div className="col-5 grow">
					<p className="sm bold ellipsis">{this.props.title}</p>
				</div>
				{this.props.externalLink ? (
					<div className="col no-grow">
						<a className="button transparent circle tiny" href={this.props.externalLink} target="_blank"><i className="material-icons icon">open_in_new</i></a>
					</div>
				) : false}
				<div className="col no-grow align-right">
					<Input type="toggle" id={this.props.title} checked={this.state.selected || this.props.selected} onChange={this.selectItem.bind(this)} />
				</div>
			</label>
		);
	}
}

export default ToggleListItem;
