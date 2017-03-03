import React, { Component } from 'react';

export default class UIGrid extends Component {

	render () {
		return (
			<section id="grid">
        <div className="container">
          <div className="section-info">
            <div className="grid">
              <div className="col-6">
                <h3>The Grid</h3>
              </div>
              <div className="col-6">
                <p>Our grid setup uses flexbox on a 12 column grid. It's configurable with the <code>--gutter</code> variable.</p>
              </div>
            </div>
          </div>
          <div className="grid gw-example">
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
          <div className="section-info">
            <div className="grid">
              <div className="col-6">
                <h4>Grid Options</h4>
              </div>
              <div className="col-6">
                <p>To align the columns horizontally, add a class of <code>center</code> or <code>right</code>. Left aligned is the default</p>
                <p>To align the columns vertically, add a class of <code>middle</code>, <code>bottom</code>, or <code>baseline</code>. Top aligned is the default</p>
              </div>
            </div>
          </div>
          <h4>Default</h4>
          <div className="grid gw-example">
            <div className="col-2"><div className="placeholder">col-2</div></div>
            <div className="col-5 tall"><div className="placeholder">col-5</div></div>
            <div className="col-3 medium"><div className="placeholder">col-3</div></div>
          </div>
          <h4>Centered</h4>
          <div className="grid gw-example center middle">
            <div className="col-2"><div className="placeholder">col-2</div></div>
            <div className="col-5 tall"><div className="placeholder">col-5</div></div>
            <div className="col-3 medium"><div className="placeholder">col-3</div></div>
          </div>
          <h4>Bottom and Right</h4>
          <div className="grid gw-example right bottom">
            <div className="col-2"><div className="placeholder">col-2</div></div>
            <div className="col-5 tall"><div className="placeholder">col-5</div></div>
            <div className="col-3 medium"><div className="placeholder">col-3</div></div>
          </div>
          <div className="section-info">
            <div className="grid">
              <div className="col-6">
                <h4>Grid Tricks</h4>
              </div>
              <div className="col-6">
                <p>Since this is using flexbox you can reorder the columns any way you like at different media queries using <code>order:</code></p>
              </div>
            </div>
          </div>
          <div className="grid product-block">
            <div className="col title">
              <h3>Product Title</h3>
            </div>
            <div className="col image"><div className="placeholder">Image</div></div>
            <div className="col info">
              <div className="desc">
                <p>This beautiful grey box is the hot item this season. It's really great because it goes with anything. Pair with with a nice pop or red circle or yellow triangle if you want to get really crazy. The grey box is essential in any toolbox.</p>
              </div>
              <div className="options">
                Options
              </div>
              <div className="cta">
                <button>Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>
		);
	}
}