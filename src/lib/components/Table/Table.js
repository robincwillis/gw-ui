import React, { Component } from 'react';
import moment from 'moment';

import Button from 'components/Button';

import './Table.scss';

export class ImageCell extends Component {
	render () {

		const style = {
			width : this.props.width || 50,
			height : this.props.height || 50,
			background : this.props.background || 'transparent'
		}

		return (
			<Cell {...this.props}>
				<div style={style}>
					<img src={this.props.src} />
				</div>
			</Cell>
		)
	}
}

export class ActionCell extends Component {
	render () {
		return (
			<Cell {...this.props}>
				{this.props.edit ? (
					<Button
						className="small transparent circle"
						tooltipText="Edit"
						tooltipPosition="top"
						icon="edit"
						onClick={this.props.edit.bind(this, this.props.item)}
					/>
				) : false}
				{this.props.delete ? (
					<Button
						className="small transparent circle hover-alert"
						tooltipText="Delete"
						tooltipPosition="top"
						icon="trash"
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

export class DateCell extends Component {
	render () {

		let format = this.props.format || 'MM/dd/YYYY';

		return(<Cell {...this.props}>
				<span>{moment(this.props.data[this.props.index][this.props.col]).format(format)}</span>
			</Cell>);
	}
}

export class ButtonCell extends Component {
	render () {
		return(<Cell {...this.props}>
			<Button
				className={this.props.buttonClass}
				label={this.props.label}
				tooltipText={this.props.tooltipText}
				tooltipPosition={this.props.tooltipPosition}
				materialIcon={this.props.materialIcon}
				icon={this.props.icon}
				onClick={this.props.onClick.bind(this, this.props.item)}
			/>
		</Cell>);
	}
}

export class Cell extends Component {

	className () {
		let className = "list-cell";
		if(this.props.className) {
			className += " " + this.props.className;
		}
		if(this.props.overflow) {
			className += " " + 'overflow-cell';
		}
		return className;
	}

	style () {
		return this.props.style ? this.props.style : {};
	}

	render () {
		var value;
		if(this.props.children) {
			value = this.props.children;
		} else if(this.props.value && typeof this.props.value === "function") {
			value = this.props.value(this.props.data[this.props.index][this.props.col])
		} else if (this.props.value){
			value = this.props.value;
		} else if (this.props.data[this.props.index][this.props.col]) {
			value = this.props.data[this.props.index][this.props.col];
		} else {
			value = (<span className="empty-cell"/>);
		}
		//var value = this.props.children ? this.props.children : this.props.data[this.props.index][this.props.col];
		//shouldn't nest ternary
		//is value passed as a prop?
		//do we have children?
		//or formatter function to run the value through?

		//var value = this.props.children ? this.props.children : this.props.data[this.props.index][this.props.col] ? this.props.data[this.props.index][this.props.col] : (<span className="empty-cell"/>);
		return(
			<div
				style={this.style()}
				key={this.props.index}
				className={this.className()}
				>
					<span className="data">{value}</span>
			</div>
			);
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

export default class Table extends Component {

	listClass () {
    var listClass = 'table';
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
			let props = Object.assign({key : colIndex, header : true}, column.props);

			if (React.isValidElement(column.props.header)) {
				cell = React.cloneElement(column.props.header, props);
			} else if (typeof column.props.header === 'string') {
				cell = (<Cell className={column.props.className} {...props}>{column.props.header}</Cell>);
			} else {
				cell = (<Cell className={column.props.className} {...props}><span /></Cell>);
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
