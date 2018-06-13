import React, { Component } from 'react';

import Button from 'components/Button';
import Input from 'components/Input';

import './SearchButton';

export class SearchButton extends Component {

	render () {
		return (
			this.props.searchIsOpen === true ? (
				<div className="fancy-input-wrap">
					<Input
						iconLeft="search"
						value={this.props.value}
						onChange={this.props.onChange}
						placeholder={this.props.placeholder ? this.props.placeholder : "Search"} autoFocus={true}
					/>
					<div className="button-wrap">
						<Button
							className="circle transparent"
							icon="close"
							onClick={this.props.closeSearch}
						/>
					</div>
				</div>
			) : (
				<Button
					className="circle light"
					icon="search"
					onClick={this.props.openSearch}
				/>
			)
		);
	}
}

export default SearchButton;
