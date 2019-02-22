import React, { Component } from 'react';
import Section from './UISection';
import SubSection from './UISubSection';
import Table, { Column, Cell } from 'components/Table';

class UISpacing extends Component {
	render() {

		const data = [
			{
				prefix : 'm',
				description : 'Margin'
			},
			{
				prefix : 'p',
				description : 'Padding'
			},
			{
				prefix : 'x',
				description : 'X-axis (left and right)'
			},
			{
				prefix : 'y',
				description : 'Y-axis (top and bottom)'
			},
			{
				prefix : 't',
				description : 'Top'
			},
			{
				prefix : 'r',
				description : 'Right'
			},
			{
				prefix : 'b',
				description : 'Bottom'
			},
			{
				prefix : 'l',
				description : 'Left'
			},
			{
				prefix : 'n',
				description : 'negative (ie: mtn-1 = margin-top: -$space-1)'
			},
			{
				prefix : '1',
				description : '$space-1 variable'
			},
			{
				prefix : '2',
				description : '$space-2 variable'
			},
			{
				prefix : '3',
				description : '$space-3 variable'
			},
			{
				prefix : '4',
				description : '$space-4 variable'
			},
			{
				prefix : 'gutter',
				description : '$gutter variable'
			},
			{
				prefix : 'gutter-tight',
				description : '$gutter-tight variable'
			},
			{
				prefix : 'margin',
				description : '$margin variable'
			},
		];

		return (
			<div>
				<Section
					id={this.props.id}
					key={this.props.id}
					title="Spacing"
					description={
						<div>
							<p><code>@import "{}/node_modules/gw-ui/dist/sass/spacing.scss";</code></p>
							<p>The spacing stylesheet offers a number of helper classes to vertically and horizontally space elements either through margins or padding. You can construct these classes through this system: <code>margin/padding + direction + amount</code></p>

							<p><span className="p medium-weight">margin options:</span><code>m mx my mt mr mb ml</code><br/>
							<span className="p medium-weight">padding options:</span><code>p px py pt pr pb pl</code><br/>
							<span className="p medium-weight">negative modifier:</span><code>n</code><br/>
							<span className="p medium-weight">spacing options:</span><code>1, 2, 3, 4, gutter, gutter-tight, margin</code></p>

							<h6>Examples</h6>
							<ul>
								<li className="p"><code>.m-2</code>: margin on all sides measuring <code>$space-2</code> variable</li>
								<li className="p"><code>.mtn-1</code>: margin-top of negative <code>$space-1</code> variable</li>
							</ul>
						</div>
					}
				/>
				<Table
					data={data}
					className="space-1 p sm"
				>
					<Column
						header="Prefix"
						className="narrow"
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