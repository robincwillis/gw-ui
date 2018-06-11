import React, { Component } from 'react';

import Button from 'components/Button';
import editIcon from '../../assets/icons/edit';
import trashIcon from '../../assets/icons/trash';

import './ui-list';


export class ActionCell extends Component {
	render () {
		return (
			<Cell {...this.props}>
				{this.props.edit ? (
					<Button
						buttonClass="small transparent circle"
						tooltipText="Edit"
						tooltipPosition="top"
						icon={editIcon}
						onClick={this.props.edit.bind(this, this.props.item)}
					/>
				) : false}
				{this.props.delete ? (
					<Button
						buttonClass="small transparent circle hover-red"
						tooltipText="Delete"
						tooltipPosition="top"
						icon={trashIcon}
						onClick={this.props.delete.bind(this, this.props.item)}
					/>
				) : false}
			</Cell>
		);
	}
}

export class AvatarCell extends Component {
	render () {
		var value = this.props.children ? this.props.children : this.props.data[this.props.index][this.props.col];
		var avatarClass = "avatar " + value;

		let name = this.props.item.name ?  this.props.item.name
					.split(' ')
					.map( (word)=> {
						return word.toUpperCase().charAt(0);
					}).join('').substring(0,1)  : '';

		return (
			<Cell {...this.props}>
				<div className={"avatar " + value}>{name !== '' ? name : 'C'}</div>
			</Cell>
		);
	}
}

export class NestedCell extends Component {
	render () {
		let value = this.props.data[this.props.index][this.props.parent][this.props.col];

		return (
			<Cell {...this.props}>
				<span className="truncate">{value}</span>
			</Cell>
		);
	}
}

export class SelectCell extends Component {
	render () {
		let value = this.props.data[this.props.index][this.props.col];

		return (<Cell {...this.props}>
			<select
				value={value}
				name={this.props.col}
			>
				{this.props.options.map( (option, index) => {
					return (<option
							key={index}
							value={option.value}
							>
							{option.label}
						</option>);
				})}
			</select>
		</Cell>);
	}
}

export class Cell extends Component {

	className () {
		return this.props.className ? "list-cell " + this.props.className : "list-cell";
	}

	render () {
		var value = this.props.children ? this.props.children : this.props.data[this.props.index][this.props.col];
		var value = this.props.children ? this.props.children : this.props.data[this.props.index][this.props.col] ? this.props.data[this.props.index][this.props.col] : (<span className="empty-cell"/>);
		return(<div key={this.props.index} className={this.className()}><span className="data">{value}</span></div>);
	}
}

export class Row extends Component {
	className () {
		return this.props.className ? "list-row " + this.props.className : "list-row";
	}
	render () {
		return (<div className={this.className()}>{this.props.children}</div>);
	}
}

export class Column extends Component {
	render () {
		// Columns don't render
		// They just get looped through to create Table Rows
		// and pass props down to cell
		return null;
	}
}

export class Table extends Component {

	listClass () {
    var listClass = 'ui-list';
    if(this.props.listClass) {
      listClass += ' ' + this.props.listClass;
    }
    if(this.props.alignment) {
      listClass += ' align-' + this.props.alignment;
    }
    return listClass;
  }

	render () {

		//omit certain keys from being passed down
		//customize table class, table style

		if(this.props.children.constructor !== Array ) {
			console.error('Table, needs at least 2 columns');
		}

		//Table Header
		//TODO, do we need to pass more props down?
		let headerCells = this.props.children.filter( (column)=> {
			return column;
		}).map( (column, colIndex)=> {
			//TODO make it ok to pass a string
			//TODO let header cells inherit the same classes that body cells do
			var cell;
			if (React.isValidElement(column.props.header)) {
				cell = React.cloneElement(column.props.header, {key:colIndex, header:true});
			} else if (typeof column.props.header === 'string') {
				cell = (<Cell className={column.props.className} header={true} key={colIndex}>{column.props.header}</Cell>);
			} else {
				cell = (<Cell className={column.props.className} header={true} key={colIndex}><span /></Cell>);
			}
			return (cell);
		});

		var header = (<div className="header-container"><Row className="header" key="header">{headerCells}</Row></div>);

		//Table Body
		let body = this.props.data.map( (item, rowIndex)=> {
			let cells = this.props.children.filter( (column)=> {
				return column;
			}).map( (column, colIndex)=> {

				//Here we compose all the props for each of cells,
				//Maybe a better way to do this

				let props = Object.assign({},column.props, this.props, {index:rowIndex, key:colIndex, item:item});
				delete props.children;
				delete props.header;
				delete props.cell;

				var cell;

				if (React.isValidElement(column.props.cell)) {
					cell = React.cloneElement(column.props.cell, props);
				} else if (typeof column.props.cell === 'function') {
					cell = column.props.cell(props);
				}
				return cell;
			});
			return (<Row key={rowIndex}>{cells}</Row>);
		});

		return (
			<div>
				<div className={this.listClass()}>
					{header}
					{body}
				</div>
			</div>
			);
	}
}
