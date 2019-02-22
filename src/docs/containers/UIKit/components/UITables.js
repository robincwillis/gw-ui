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
					add classes <code>.space-1</code>, <code>.space-2</code>, <code>.space-3</code>, or <code>.space-4</code> to adjust the vertical spacing using the corresponding variables in <code>variables.scss</code>.
					</div>
				}
			>
			</Section>
		);
	}
}



export default UITables;