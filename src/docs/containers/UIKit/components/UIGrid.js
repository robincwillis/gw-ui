import React, { Component } from 'react';

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
					id={this.props.id}
					title="The Grid"
					description={
						<div>
							<p>The basic grid used is generally a 12 column grid. Although The number of columns is configuable in <code>variables.scss</code>, it is a pretty good column number to stick with.</p>
						</div>
					}
				>
					<SubSection
						title="The Container"
						description={<div>
							<p><code>.container</code> is used for the main content of the site. It sets basic margins on the site and make sure the content of the site stays centered. Unless you want your content to go to the edges of the browser window, content should be wrapped in a container.</p>
							<p>The <code>$margin</code> and <code>$mobile-margin</code> variables in <code>Variables.scss</code> are how <code>.containers</code> spacing should be effected.</p>
						</div>}
					/>
					
					<SubSection 
						title="The Grid Wrapper"
						description={
							<div>
								<p>The flex grid uses the <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox" target="_blank">flexbox</a> model. Using the flex grid requires a <code>div.grid-flex</code> and 1 or more direct descendants divs with a class of <code>.col-#</code> or <code>.col</code></p>
							</div>
						}
					/>

					<SubSection 
						title="Columns"
						description={
							<div>
								<p><code>.col</code> and <code>.col-#</code> Our grid as 12 columns. Use classes <code>.col-1</code> to <code>.col-12</code> to effect the column width.</p>
								<p>Alternatively, you can use just <code>.col</code> and the column will take on the width of its content or you can give it a specific width. This is great for custom cases where you want the grid to go collapse in steps from 4-1.</p>
							</div>
						}
					/>
					<div className="grid-flex">
						<GridItem className="tall" col="1" />
						<GridItem className="tall" col="1" />
						<GridItem className="tall" col="1" />
						<GridItem className="tall" col="1" />
						<GridItem className="tall" col="1" />
						<GridItem className="tall" col="1" />
						<GridItem className="tall" col="1" />
						<GridItem className="tall" col="1" />
						<GridItem className="tall" col="1" />
						<GridItem className="tall" col="1" />
						<GridItem className="tall" col="1" />
						<GridItem className="tall" col="1" />
					</div>
					<div className="grid-flex right mt-gutter">
						<div className="col-8">
							<div className="rich-text">
								<h5>Column Helper Classes</h5>
								<ul>
									<li><code>.col.grow</code> will have the column take up the avaliable space.</li>
									<li><code>.col.no-grow</code> will prevents the column from growing and just keep it the width it is given.</li>
									<li><code>.col.order-#</code> reorder the columns when the grid is not collapsed.</li>
								</ul>
							</div>
						</div>
					</div>

					<SubSection 
						className='no-border'
						title='Horizontal Alignment'
						id={this.props.id + 'HorzAlignment'}
						description={
							<div>
								<p>The flex grid uses a default of <code>justify-content: space-between</code>. This means a <code>.col-3</code> and <code>.col-6</code> will put the 2 columns of extra space between the columns. This can be changed by adding <code>.left</code>, <code>.right</code>, or <code>.center</code> to the grid container.</p>
							</div>
						}
					/>
					<div>
						<div className="grid-flex middle no-break no-gutter slim-space-after space-before">
							<div className="col-4"><code className="medium-weight main-color mr-1">Default (space-between)</code></div>
							<div className="col-8">
								<div className="grid-flex no-break v-spaced">
									<GridItem col="3" className="short" />
									<GridItem col="6" className="short" />
								</div>
							</div>
						</div>
					</div>
					<div>
						<hr className="light-grey my-1"/>
						<div className="grid-flex middle no-break no-gutter slim-space-after space-before">
							<div className="col-4"><code className="light-text-color mr-1">.grid-flex.left</code></div>
							<div className="col-8">
								<div className="grid-flex no-break v-spaced left">
									<GridItem col="3" className="short" />
									<GridItem col="6" className="short" />
								</div>
							</div>
						</div>
					</div>
					<div>
						<hr className="light-grey my-1"/>
						<div className="grid-flex middle no-break no-gutter slim-space-after space-before">
							<div className="col-4"><code className="light-text-color mr-1">.grid-flex.center</code></div>
							<div className="col-8">
								<div className="grid-flex no-break v-spaced center">
									<GridItem col="3" className="short" />
									<GridItem col="6" className="short" />
								</div>
							</div>
						</div>
					</div>
					<div>
						<hr className="light-grey my-1"/>
						<div className="grid-flex middle no-break no-gutter slim-space-after space-before">
							<div className="col-4"><code className="light-text-color mr-1">.grid-flex.right</code></div>
							<div className="col-8">
								<div className="grid-flex no-break v-spaced right">
									<GridItem col="3" className="short" />
									<GridItem col="6" className="short" />
								</div>
							</div>
						</div>
					</div>
					

					<SubSection 
						className="no-border"
						title="Vertical Alignment"
						id={this.props.id + 'VertAlignment'}
						description={
							<div>
								<p>The flex grid uses a default of <code>align-items: flex-start</code> to align columns to the top. This can be changed by adding <code>.middle</code>, <code>.bottom</code>, or <code>.baseline</code></p>
							</div>
						}
					/>
					<div>
						<div className="grid-flex middle no-break slim-space-after space-before">
							<div className="col-4">
								<div className="col no-grow"><code className="medium-weight main-color mr-1">Default (top)</code></div>
							</div>
							<div className="col-8">
								<div className="grid-flex no-break v-spaced">
									<GridItem col="3" className="short"/>
									<GridItem col="5" className="tall" />
									<GridItem col="4" className="short" />
								</div>
							</div>
						</div>
					</div>
					<div>
						<hr className="light-grey my-1"/>
						<div className="grid-flex middle no-break slim-space-after space-before">
							<div className="col-4">
								<div className="col no-grow"><code className="light-text-color mr-1">.grid-flex.middle</code></div>
							</div>
							<div className="col-8">
								<div className="grid-flex no-break v-spaced middle">
									<GridItem col="3" className="short"/>
									<GridItem col="5" className="tall" />
									<GridItem col="4" className="short" />
								</div>
							</div>
						</div>
					</div>
					<div>
						<hr className="light-grey my-1"/>
						<div className="grid-flex middle no-break slim-space-after space-before">
							<div className="col-4">
								<div className="col no-grow"><code className="light-text-color mr-1">.grid-flex.bottom</code></div>
							</div>
							<div className="col-8">
								<div className="grid-flex no-break v-spaced bottom">
									<GridItem col="3" className="short"/>
									<GridItem col="5" className="tall" />
									<GridItem col="4" className="short" />
								</div>
							</div>
						</div>
					</div>
					<div>
						<hr className="light-grey my-1"/>
						<div className="grid-flex middle no-break slim-space-after space-before">
							<div className="col-4">
								<div className="col no-grow"><code className="light-text-color mr-1">.grid-flex.baseline</code></div>
							</div>
							<div className="col-8">
								<div className="grid-flex no-break v-spaced baseline">
									<GridItem col="3"/>
									<div className="col-9">
										<p className="sm medium-weight light-text-color">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hic ambiguo ludimur. Quodcumque in mentem incideret, et quodcumque tamquam occurreret. Itaque vides, quo modo loquantur, nova verba fingunt, deserunt usitata. Nemo nostrum istius generis asotos iucunde putat vivere. Nunc ita separantur, ut disiuncta sint, quo nihil potest esse perversius. Duo Reges: constructio interrete. Quis hoc dicit? Si quae forte-possumus.</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					<SubSection 
						className="no-border"
						id={this.props.id + "Breakpoints"}
						title="Breakpoints"
						description={
							<div>
								<p>By default, each <code>.grid-flex</code> instance will collapse at the <code>$md</code> breakpoint variable, however this can be changed</p>
							</div>
						}
					>
					<div className="rich-text">
						<ul>
							<li><code>.no-break</code> will not-collapse</li>
							<li><code>.break-lg</code> will break at the varibale <code>$lg</code></li>
							<li><code>.break-xlg</code> will break at the varibale <code>$xlg</code></li>
							<li><code>.break-huge</code> will break at the varibale <code>$huge</code></li>
						</ul>
					</div>
					</SubSection>

					<SubSection 
						className="no-border"
						id={this.props.id + "Helpers"}
						title="Other Helper Classes"
						description={
							<div>
								<p>...</p>
							</div>
						}
					>
					<div className="rich-text">
						<h5>On the grid wrapper</h5>
						<ul>
							<h6>Gutter spacing</h6>
							<li><code>.no-gutter</code><br/> will make the space between the grid's columns so there is no gap.</li>
							<li><code>.tight-gutter</code><br/> will make the space between the grid's columns the <code>$tight-gutter</code> variable.</li>
							<li><code>.wide-gutter</code><br/> will make the space between the grid's columns the <code>$wide-gutter</code> variable.</li>
							
							<h6>Vertical spacing</h6>
							<li><code>.v-spaced</code> will change the space under columns to be the same as the space between the columns.</li>
						</ul>
					
						<h5>On columns</h5>
						<ul>
							<li><code>.order-#</code> will order the columns in the grid. The order only takes effect when the grid is not collapsed.<br/><span className="p sm light-text-color">Order ranges from 1 to 4</span></li>
						</ul>

					</div>
					</SubSection>
				</Section>

			</div>
		);
	}
}

export default UIButtons;