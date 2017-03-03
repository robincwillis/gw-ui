import React, { Component } from 'react';
import Button from '../Button/Button.js';

export default class UIButtons extends Component {

	render () {
		return (
      <section id="buttons">
        <div className="container">
          <div className="section-info">
            <div className="grid">
              <div className="col-6">
                <h3>Buttons</h3>
              </div>
              <div className="col-6">
                <p>Buttons act the same whether they are <code>button</code> elements, <code>a.button</code>, or just have a class of <code>.button</code></p>
              </div>
            </div>
          </div>
          <div className="grid">
            <div className="col-3">
              <div className="ui-box">
                <Button label="Tester Button" />
              </div>
              <code>button (Click)</code>
            </div>
            <div className="col-3">
              <div className="ui-box">
                <a className="button">
                  <div className="btn-label">a.button</div>
                </a>
              </div>
              <code>a.button</code>
            </div>
            <div className="col-3">
              <div className="ui-box">
                <input type="submit" className="button" value="Submit"/>
              </div>
              <code>input[type=submit].button</code>
            </div>
            <div className="col-3">
              <div className="ui-box">
                <Button label="Disabled" buttonClass="disabled" />
              </div>
              <code>button.disabled</code>
            </div>
            <div className="col-4">
              <div className="ui-box">
                <Button label="GW" buttonClass="circle" />
              </div>
              <code>.circle</code>
            </div>
            <div className="col-4">
              <div className="ui-box">
                <Button label="Secondary" buttonClass="secondary" />
              </div>
              <code>.secondary</code>
            </div>
            <div className="col-4">
              <div className="ui-box">
                <Button label="Tertiary" buttonClass="tertiary" />
              </div>
              <code>.tertiary</code>
            </div>
            <div className="col-4">
              <div className="ui-box">
                <Button label="Small" buttonClass="small" />
              </div>
              <code>.small</code>
            </div>
            <div className="col-4">
              <div className="ui-box">
                <Button label="Normal" />
              </div>
              <code>Default Size</code>
            </div>
            <div className="col-4">
              <div className="ui-box">
                <Button label="Large" buttonClass="large" />
              </div>
              <code>.large</code>
            </div>
          </div>
        </div>
      </section>
		);
	}
}