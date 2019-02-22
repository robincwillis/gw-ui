import React, { Component } from 'react';

import Table, { Column, Cell } from 'components/Table';

export default class UIProps extends Component {

	render() {
		const data = Object.keys(this.props.props).map((prop) => {
			return {
				name : prop,
				type : this.props.props[prop].type ? this.props.props[prop].type.name : null,
				defaultValue : this.props.props[prop].defaultValue ? this.props.props[prop].defaultValue.value : null,
				required : this.props.props[prop].required
			}
		});

		return (
			<div className="my-3">
				<hr/>
				<div className="grid-flex">
					<div className="col-4">
						<h6 className="main-color">Props for</h6>
						<h2><code>&lt;{this.props.displayName}/&gt;</code></h2>
					</div>
					<div className="col grow">
						<Table
							data={data}
							className="space-1 p sm"
						>
							<Column
								header="Name"
								col="name"
								cell={<Cell />}
							/>

							<Column
								header="Type"
								col="type"
								cell={<Cell />}
							/>

							<Column
								header="Default Value"
								col="defaultValue"
								cell={<Cell />}
							/>

							<Column
								header="Required"
								col="required"
								cell={<Cell value={(value) => value === true ? 'true' : 'false'} />}
							/>
						</Table>
					</div>
				</div>
			</div>
		);
	}
}
