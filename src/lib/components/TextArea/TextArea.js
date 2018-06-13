import React, { Component } from 'react';

import './TextArea.scss';

class TextArea extends Component {

	static defaultProps = {
		rows : 4,
		maxHeight : 1000,
		autoComplete : "off",
		autoFocus : false
	}

	state = {
		focused : this.props.autoFocus,
		className : this.props.className
	}

	componentDidMount () {
		this.resize();
	}

	className () {
		let className = this.state.className  + ' ' + 'input-wrap';
		if(this.state.error) { className += ' ' + 'error' }
		if(this.state.validated) { className += ' ' + 'validated' }
		if(this.state.hasValue) { className += ' has-value' }
		return className;
	}

	handleChange = (event) => {
		if(this.props.onChange) { this.props.onChange(event)}
	}

	handleKeypress = (event) => {
		if(this.props.onKeyPress) { this.props.onKeyPress(event)}
	}

	handleFocus = (event) => {
		this.setState({focused : true});
		if(this.props.onFocus) {this.props.onFocus(event)}
	}

	handleBlur = (event) => {
		this.setState({focused : false});
		if (this.props.onBlur) {this.props.onBlur(event)}
	}

	resize = (event) => {
		let { textArea } = this;
		let { maxHeight } = this.props;
		textArea.style.height = "";
		textArea.style.height = Math.min(textArea.scrollHeight, maxHeight) + "px";
	}

	render() {
		return (
			<div className={this.className()}>
				<textarea
					ref={(el) => this.textArea = el}
					disabled={this.props.disabled}
					autoFocus={this.props.autoFocus}
					placeholder={this.props.placeholder}
					value={this.props.value}
					name={this.props.name}
					rows={this.props.rows}
					onInput={this.resize}
					onChange={this.handleChange}
					onKeyPress={this.handleKeypress}
					onFocus={this.handleFocus}
					onBlur={this.handleBlur}
					autoComplete={this.props.autoComplete}
					readOnly={this.props.readOnly}
					{...this.props.textareaProps}
				/>
			</div>
		);
	}
}

export default TextArea;
