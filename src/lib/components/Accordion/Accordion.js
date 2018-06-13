import React, { Component } from 'react';

import Collapse from 'components/Collapse';

import './Accordion';

export class Accordion extends Component {


	state = {
		items : this.props.items
	}


	openItem = (index) => {
		let items = this.state.items.map( (item, itemIndex)=> {
			if(itemIndex === index) {
				item.open = true;
			}
			item.open = itemIndex === index ? true : false;
			return item;
		});

		// console.log(items);

		this.setState({
			items : items
		});

	}

	render() {
		return (
			<ul className="accordian">
				{this.state.items.map( (item, index) => {
					// console.log(item.open);
					return(<Collapse
									hasArrow={this.props.hasArrow}
									ellipsis={this.props.ellipsis}
									id={index + 1}
									closeable={false}
									key={index}
									title={item.title}
									open={item.open}
									onOpen={this.openItem.bind(this, index)}
								>
									{item.content}
								</Collapse>);
				})}
			</ul>
		);
	}
}

export default Accordion;
