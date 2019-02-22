import React, { Component } from 'react';
import Section from './UISection';
import SubSection from './UISubSection';
import Table, { Column, Cell } from 'components/Table';

class UISpacing extends Component {
	render() {

		const data = [
			{
				prefix : 'm-',
				description : 'Margin'
			},
			{
				prefix : 'mt-',
				description : 'Margin top'
			},
			{
				prefix : 'mr-',
				description : 'Margin right'
			},
			{
				prefix : 'mb-',
				description : 'Margin'
			},
			{
				prefix : 'ml-',
				description : 'Margin'
			}
		];

		return (
			<div>
				<Section
					id={this.props.id}
					key={this.props.id}
					title="Spacing"
					description={
						<div>
							<code>@import "{}/node_modules/gw-ui/dist/sass/spacing.scss";</code>
							<p>The spacing stylesheet offers a number of helper classes to vertically and horizontally space elements either through margins or padding

									you can construct these classes through this system -> margin / padding + direction + amount;

									<label>type</label>
									[m] margin
									[p] padding

									<label>direction</label>

									[] all
									[t] top
									[r] right
									[b] bottom
									[l] left
									[x] horizontal (left and right)
									[y] vertical (top and bottom)

									[n] negative
									[tn] negative top
									[rn] negative right
									[bn] negative bottom
									[ln] negative left
									[xn] negative horizontal
									[yn] negative vertical

									<label>amount, these corrosponding to spacing variables in variables.scss</label>

									[1] $space-1
									[2] $space-2
									[3] $space-3
									[4] $space-4
									[gutter] $gutter
									[gutter-right] $gutter-tight
									[gutter-wide] $gutter-wide


									<label>Mobile Spacing Classes</label>

									.p-margin
									.pt-margin
									.pr-margin
									.pb-margin
									.pl-margin
									.px-margin
									.py-margin

									</p>
						</div>
					}
				/>
				<Table
					data={data}
					className="space-1 p sm"
				>
					<Column
						header="Prefix"
						className="short"
						col="prefix"
						cell={<Cell />}
					/>

					<Column
						header="Description"
						col="description"
						cell={<Cell />}
					/>

				</Table>
			</div>
		);
	}
}



export default UISpacing;