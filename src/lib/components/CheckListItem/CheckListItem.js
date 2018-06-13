import React, { Component } from 'react';
import InlineSVG from 'svg-inline-react';

import Input from 'components/Input';
import Avatar from 'components/Avatar';

import './CheckListItem';

export class CheckListItem extends Component {

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
			<label htmlFor={this.props.title} className={this.state.selected === true ? ('check-list-item flex-grid tight-gutter no-break middle active') : ('check-list-item flex-grid tight-gutter no-break middle')}>
				{this.props.avatar ? (
					<div className="col no-grow">
						<Avatar image={this.props.avatar} />
					</div>
				) : false}
				<div className="col-7 grow">
					{this.props.title ? (
						<p className="sm bold ellipsis">{this.props.title}</p>
					) : false}
					{this.props.description ? (
						<p className="sm ellipsis">{this.props.description}</p>
					) : false}
				</div>
				<div className="col no-grow align-right">
					<Input type="checkbox" id={this.props.title} checked={this.state.selected || this.props.selected} onChange={this.selectItem.bind(this)} />
				</div>
			</label>
		);
	}
}

export default CheckListItem;
