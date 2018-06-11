import React, { Component } from 'react';
import InlineSVG from 'svg-inline-react';

export default class UIGrid extends Component {

	render () {
		return (
      <section>
        <div className="container">
          <div className="inline-grid">
            <div className="col-6">
              <h3>The Inline Grid</h3>
            </div>
            <div className="col-6">
              <p>Buttons act the same whether they are <code>button</code> elements, <code>a.button</code>, or just have a class of <code>.button</code></p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="inline-grid middle center example">
            <div className="col-4 push-right-1"><div className="ui-box tall">col-4.push-right-1</div></div>
            <div className="col-3"><div className="ui-box">col-3</div></div>
            <div className="col-4"><div className="ui-box short">col-4</div></div>
            <div className="col-5"><div className="ui-box">col-5</div></div>
            <div className="col-5"><div className="ui-box tall">col-5</div></div>
            <div className="col-4"><div className="ui-box tall">col-4</div></div>
            <div className="col-4 push-left-1"><div className="ui-box short">col-4.push-left-1</div></div>
            <div className="col-3"><div className="ui-box">col-3</div></div>
            <div className="col-5"><div className="ui-box">col-5</div></div>
            <div className="col-4"><div className="ui-box tall">col-4</div></div>
          </div>
        </div>
      </section>
		);
	}
}