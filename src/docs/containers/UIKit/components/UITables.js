import React, { Component } from 'react';

import CodeBlock from 'components/CodeBlock';

import Section from './UISection';
import SubSection from './UISubSection';

import Gist from 'react-gist';


class UITables extends Component {
	render() {
		return (
			<Section
				id={this.props.id}
				key={this.props.id}
				title="Table"
				description={
					<div>

					Components

					Table, Column, Row, Cell

					Special Cells

					Example

					<Gist id='73d64155c7110550145f3112ea21bf17' />

					</div>
				}
			>
			</Section>
		);
	}
}



export default UITables;