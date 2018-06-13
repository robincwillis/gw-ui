import React, { Component } from 'react';
import { connect } from 'react-redux';

import actionWrapper from 'util/actionWrapper';
import * as modalActions from 'actions/modal';
import * as notificationActions from 'actions/notifications';

import Modal from 'components/Modal';
import Button from 'components/Button';
import Section from './UISection';
import SubSection from './UISubSection';
import UIComponent from './UIComponent';

export class GridItem extends Component {
	render () {
		return (
			<div className={"col-" + this.props.col}>
				<div className={this.props.className + " ui-kit-grid-item"}>
					{this.props.col}
				</div>
			</div>
		)
	}
}

export class UIButtons extends Component {

	defaultModal = () => {
		this.props.modalActions.showModal('default-modal');
	}

	render() {

		return (
			<div>
				<Section 
					id="grid"
					title="The Grid"
					description={
						<div>
							<p>The basic grid used is generally a 12 column grid. Although The number of columns is configuable in <code>variables.scss</code>, it is a pretty good column number to stick with.</p>
						</div>
					}
				>
					<SubSection 
						title="Flex Grid"
						description={
							<div>
								<p>The flex grid uses the <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox" target="_blank">flexbox</a> model. Using the flex grid requires a <code>div.flex-grid</code> and 1 or more children divs with a class of <code>.col-#</code></p>
							</div>
						}
					/>
					<div className="flex-grid">
						<GridItem col="1" />
						<GridItem col="1" />
						<GridItem col="1" />
						<GridItem col="1" />
						<GridItem col="1" />
						<GridItem col="1" />
						<GridItem col="1" />
						<GridItem col="1" />
						<GridItem col="1" />
						<GridItem col="1" />
						<GridItem col="1" />
						<GridItem col="1" />
					</div>

					<SubSection 
						className="no-border"
						title={<h4>Horizontal Alignment</h4>}
						description={
							<div>
								<p>The flex grid uses a default of <code>justify-content: space-between</code>. This means a <code>.col-3</code> and <code>.col-6</code> will put the 2 columns of extra space between the columns. This can be changed by adding <code>.left</code>, <code>.right</code>, or <code>.center</code> to the grid container.</p>
							</div>
						}
					/>
					<div>
						<hr className="light-grey"/>
						<div className="flex-grid middle no-break no-gutter slim-space-after space-before">
							<div className="col-4"><code className="light-text-color slim-space-right">Default</code></div>
							<div className="col-8">
								<div className="flex-grid no-break v-spaced">
									<GridItem col="3" className="short" />
									<GridItem col="6" className="short" />
								</div>
							</div>
						</div>
					</div>
					<div>
						<hr className="light-grey"/>
						<div className="flex-grid middle no-break no-gutter slim-space-after space-before">
							<div className="col-4"><code className="light-text-color slim-space-right">.flex-grid.left</code></div>
							<div className="col-8">
								<div className="flex-grid no-break v-spaced left">
									<GridItem col="3" className="short" />
									<GridItem col="6" className="short" />
								</div>
							</div>
						</div>
					</div>
					<div>
						<hr className="light-grey"/>
						<div className="flex-grid middle no-break no-gutter slim-space-after space-before">
							<div className="col-4"><code className="light-text-color slim-space-right">.flex-grid.right</code></div>
							<div className="col-8">
								<div className="flex-grid no-break v-spaced right">
									<GridItem col="3" className="short" />
									<GridItem col="6" className="short" />
								</div>
							</div>
						</div>
					</div>
					<div>
						<hr className="light-grey"/>
						<div className="flex-grid middle no-break no-gutter slim-space-after space-before">
							<div className="col-4"><code className="light-text-color slim-space-right">.flex-grid.center</code></div>
							<div className="col-8">
								<div className="flex-grid no-break v-spaced center">
									<GridItem col="3" className="short" />
									<GridItem col="6" className="short" />
								</div>
							</div>
						</div>
					</div>

					<SubSection 
						className="no-border"
						title={<h4>Vertical Alignment</h4>}
						description={
							<div>
								<p>The flex grid uses a default of <code>align-items: flex-start</code> to align columns to the top. This can be changed by adding <code>.middle</code>, <code>.bottom</code>, or <code>.baseline</code></p>
							</div>
						}
					/>
					<div>
						<hr className="light-grey"/>
						<div className="flex-grid middle no-break slim-space-after space-before">
							<div className="col-4">
								<div className="col no-grow"><code className="light-text-color slim-space-right">Default</code></div>
							</div>
							<div className="col-8">
								<div className="flex-grid no-break v-spaced">
									<GridItem col="3" className="short"/>
									<GridItem col="5" className="tall" />
									<GridItem col="4" className="short" />
								</div>
							</div>
						</div>
					</div>
					<div>
						<hr className="light-grey"/>
						<div className="flex-grid middle no-break slim-space-after space-before">
							<div className="col-4">
								<div className="col no-grow"><code className="light-text-color slim-space-right">.flex-grid.middle</code></div>
							</div>
							<div className="col-8">
								<div className="flex-grid no-break v-spaced middle">
									<GridItem col="3" className="short"/>
									<GridItem col="5" className="tall" />
									<GridItem col="4" className="short" />
								</div>
							</div>
						</div>
					</div>
					<div>
						<hr className="light-grey"/>
						<div className="flex-grid middle no-break slim-space-after space-before">
							<div className="col-4">
								<div className="col no-grow"><code className="light-text-color slim-space-right">.flex-grid.bottom</code></div>
							</div>
							<div className="col-8">
								<div className="flex-grid no-break v-spaced bottom">
									<GridItem col="3" className="short"/>
									<GridItem col="5" className="tall" />
									<GridItem col="4" className="short" />
								</div>
							</div>
						</div>
					</div>
					<div>
						<hr className="light-grey"/>
						<div className="flex-grid middle no-break slim-space-after space-before">
							<div className="col-4">
								<div className="col no-grow"><code className="light-text-color slim-space-right">.flex-grid.baseline</code></div>
							</div>
							<div className="col-8">
								<div className="flex-grid no-break v-spaced baseline">
									<GridItem col="3"/>
									<div className="col-9">
										<p className="md medium-weight light-text-color">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hic ambiguo ludimur. Quodcumque in mentem incideret, et quodcumque tamquam occurreret. Itaque vides, quo modo loquantur, nova verba fingunt, deserunt usitata. Nemo nostrum istius generis asotos iucunde putat vivere. Nunc ita separantur, ut disiuncta sint, quo nihil potest esse perversius. Duo Reges: constructio interrete. Quis hoc dicit? Si quae forte-possumus.</p>
									</div>
								</div>
							</div>
						</div>
					</div>

				</Section>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return actionWrapper({
		modalActions
	}, dispatch);
};

export default connect(mapDispatchToProps)(UIButtons);