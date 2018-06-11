import React, { Component } from 'react';
import InlineSVG from 'svg-inline-react';

export default class UIGrid extends Component {

	render () {
		return (
      <section>
        <div className="container">
          <div className="inline-grid">
            <div className="col-6">
              <h3>The Float Grid</h3>
            </div>
            <div className="col-6">
              <p>Buttons act the same whether they are <code>button</code> elements, <code>a.button</code>, or just have a class of <code>.button</code></p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="float-grid example">
            <div className="col-12"><div className="ui-box short">col-12</div></div>
            <div className="col-11"><div className="ui-box short">col-11</div></div>
            <div className="col-1"><div className="ui-box short">col-1</div></div>
            <div className="col-10"><div className="ui-box short">col-10</div></div>
            <div className="col-2"><div className="ui-box short">col-2</div></div>
            <div className="col-9"><div className="ui-box short">col-9</div></div>
            <div className="col-3"><div className="ui-box short">col-3</div></div>
            <div className="col-8"><div className="ui-box short">col-8</div></div>
            <div className="col-4"><div className="ui-box short">col-4</div></div>
            <div className="col-7"><div className="ui-box short">col-7</div></div>
            <div className="col-5"><div className="ui-box short">col-5</div></div>
            <div className="col-6"><div className="ui-box short">col-6</div></div>
            <div className="col-6"><div className="ui-box short">col-6</div></div>
          </div>
        </div>
      </section>
		);
	}
}