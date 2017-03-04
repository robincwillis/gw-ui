import React, { Component } from 'react';
import Input from '../Input/Input.js';

export default class UIGrid extends Component {

	render () {
		return (
			<section id="grid">
        <div className="container">
          <div className="section-info">
            <div className="float-grid">
              <div className="col-6">
                <h3>The Grid</h3>
              </div>
              <div className="col-6">
                <p>The kit has 3 grid methods to choose from. A <code>.float-grid</code>, <code>.inline-grid</code>, and <code>.flex-grid</code>. They are all configurable with the <code>--gutter</code> variable.</p>
                <p>Because <i>Robin Willis</i> loves pushing columns over, you can add a class of <code>.push-(left/right)-(1-12)</code> to move things around a bit</p>
              </div>
            </div>
          </div>

          <div id="float-grid" className="sub-section-info">
            <div className="float-grid">
              <div className="col-6">
                <h4>The Old School Float</h4>
              </div>
              <div className="col-6">
                <p>A standard solid floating grid. Wrap the row in <code>.float-grid</code> and its children in <code>.col-#</code> or just <code>.col</code> for more control.</p>
                <p>Add a class of <code>.right</code> to float the column right. Great for staggering content a seen in the <a href="#float-example">example</a> below.</p>
              </div>
            </div>
          </div>
          <div className="float-grid gw-example">
            <div className="col-12"><div className="placeholder">col-12</div></div>
            <div className="col-11"><div className="placeholder">col-11</div></div>
            <div className="col-1"><div className="placeholder">col-1</div></div>
            <div className="col-10"><div className="placeholder">col-10</div></div>
            <div className="col-2"><div className="placeholder">col-2</div></div>
            <div className="col-9"><div className="placeholder">col-9</div></div>
            <div className="col-3"><div className="placeholder">col-3</div></div>
            <div className="col-8"><div className="placeholder">col-8</div></div>
            <div className="col-4"><div className="placeholder">col-4</div></div>
            <div className="col-7"><div className="placeholder">col-7</div></div>
            <div className="col-5"><div className="placeholder">col-5</div></div>
            <div className="col-6"><div className="placeholder">col-6</div></div>
            <div className="col-6"><div className="placeholder">col-6</div></div>
          </div>

          <div id="float-example" className="float-grid gw-example product-block">
            <div className="col-5 right title">
              <h3>Product Title</h3>
            </div>
            <div className="col-6 image">
              <div className="placeholder very-tall">Image</div>
            </div>
            <div className="col-5 right info">
              <div className="desc">
                <p>This beautiful grey box is the hot item this season. It's really great because it goes with anything. Pair with with a nice pop or red circle or yellow triangle if you want to get really crazy. The grey box is essential in any toolbox.</p>
              </div>
              <div className="options">
                <Input
                inputType="select"
                placeholder="Select"
                options={[
                  'Product Options',
                  'Option',
                  'Another Option'
                ]}
              />
              </div>
              <div className="cta">
                <button>Buy Now</button>
              </div>
            </div>
          </div>

          <div id="inline-grid" className="sub-section-info">
            <div className="float-grid">
              <div className="col-6">
                <h4>The Classic Inline-Block</h4>
              </div>
              <div className="col-6">
                <p>Wrap the row in <code>.inline-grid</code> and its children in <code>.col-#</code> or just <code>.col</code> for more control.</p>
                <p>Add a class of <code>.center</code> or <code>.right</code> to the container to horizontally align the columns.</p>
                <p>Add a class of <code>.middle</code> or <code>.bottom</code> to the container to vertically align the columns.</p>
              </div>
            </div>
          </div>
          <div className="inline-grid middle center gw-example">
            <div className="col-4 push-right-1"><div className="placeholder tall">col-4.push-right-1</div></div>
            <div className="col-3"><div className="placeholder medium">col-3</div></div>
            <div className="col-4"><div className="placeholder">col-4</div></div>
            <div className="col-5"><div className="placeholder medium">col-5</div></div>
            <div className="col-5"><div className="placeholder tall">col-5</div></div>
            <div className="col-4"><div className="placeholder tall">col-4</div></div>
            <div className="col-4 push-left-1"><div className="placeholder">col-4.push-left-1</div></div>
            <div className="col-3"><div className="placeholder medium">col-3</div></div>
            <div className="col-5"><div className="placeholder medium">col-5</div></div>
            <div className="col-4"><div className="placeholder tall">col-4</div></div>
          </div>

          <div id="flex-grid" className="sub-section-info">
            <div className="float-grid">
              <div className="col-6">
                <h4>The Pimptastic Flex</h4>
              </div>
              <div className="col-6">
                <p>Wrap the row in <code>.flex-grid</code> and its children in <code>.col-#</code> or just <code>.col</code> for more control.</p>
                <h6>Look ma! No pushing.</h6>
                <p>The nice thing about the flex grid, other than being able to use other flex behavior, is that there is no pushing column necessary to get them to align to the outter edges. This is the dafault behavior of our flex-grid.</p>
                <p>Add a class of <code>.center</code>, <code>.right</code> or <code>.left</code> to the container to horizontally align the columns.</p>
                <p>Add a class of <code>.middle</code>, <code>.bottom</code> or <code>.baseline</code> to the container to vertically align the columns.</p>
              </div>
            </div>
          </div>
          <div className="flex-grid bottom gw-example">
            <div className="col-4"><div className="placeholder medium">col-4</div></div>
            <div className="col-5"><div className="placeholder">col-5</div></div>
            <div className="col-2"><div className="placeholder tall">col-2</div></div>
            <div className="col-2"><div className="placeholder medium">col-2</div></div>
            <div className="col-2"><div className="placeholder tall">col-2</div></div>
            <div className="col-2"><div className="placeholder medium">col-2</div></div>
            <div className="col-3"><div className="placeholder">col-3</div></div>
            <div className="col-3"><div className="placeholder medium">col-3</div></div>
            <div className="col-4"><div className="placeholder medium">col-4</div></div>
            <div className="col-4"><div className="placeholder tall">col-4</div></div>
            <div className="col-7"><div className="placeholder medium">col-7</div></div>
            <div className="col-6"><div className="placeholder medium">col-6</div></div>
            <div className="col-4"><div className="placeholder tall">col-4</div></div>
          </div>

        </div>
      </section>
		);
	}
}