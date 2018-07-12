import React, { Component } from 'react';

import './Tabs.scss';

export default class Tabs extends Component {

	static defaultProps = {
		readOnly : false,
		onChange : () => {}
	}

	state = {
		activeTabId : this.props.activeTabId ? this.props.activeTabId : this.props.tabs[0].id
	}

  getActiveTab (tab) {
  	if(tab.active) {
  		return true;
  	} else if( tab.id === this.props.activeTabId) {
  		return true;
  	} else {
  		return false;
  	}
  }

  onChange = (event) => {
  	this.props.onChange(event.target.value);
  }

  className () {
  	this.props.className ? this.props.className : ''
  	var tabClass = false
  	if (this.props.className) {
  		tabClass += ' ' + this.props.className;
  	}
  	if(this.props.readOnly) {
  		className += ' ' + 'read-only'
  	}
  	return tabClass
  }

	render () {
		return (
			<div className={this.className()}>
				<form name={this.props.name} className="ui-tabs">
					{this.props.tabs.map( (tab, index)=> {
						return (
							<input
								readOnly={this.props.readOnly || tab.readOnly}
								onChange={!this.props.readOnly && !tab.readOnly ? this.onChange : ()=>{} }
								type="radio"
								checked={this.getActiveTab(tab)}
								name={this.props.name}
								id={tab.id}
								value={tab.id}
								key={tab.id}
							/>
						)
					})}
					{this.props.tabs.map( (tab, index)=> {
						return (
							<label
								key={tab.id}
								className="tab"
								htmlFor={tab.id}
							>
								{tab.label}
							</label>
						)
					})}

	        <span className="underline"/>
	      </form>
      </div>
		);
	}
}


