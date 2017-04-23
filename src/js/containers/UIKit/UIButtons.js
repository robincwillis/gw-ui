import React, { Component } from 'react';
import InlineSVG from 'svg-inline-react';

import Button from 'components/Button';
import PlusIcon from 'assets/icons/plus';
import CheckIcon from 'assets/icons/check';
import TrashIcon from 'assets/icons/trash2';
import HistoryIcon from 'assets/icons/history';

export default class UIButtons extends Component {

	render () {
		return (
      <section>
        <div className="container">
          <div className="inline-grid">
            <div className="col-6">
              <h3>Buttons</h3>
            </div>
            <div className="col-6">
              <p>Buttons act the same whether they are <code>button</code> elements, <code>a.button</code>, or just have a class of <code>.button</code></p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="inline-grid">
            {/* Default Buttons */}
            <div className="col-3">
              <div className="ui-box">
                <Button
                  label="Button"
                  icon={PlusIcon}
                />
              </div>
              <p className="code">button or .button</p>
            </div>

            <div className="col-3">
              <div className="ui-box">
                <Button
                  buttonClass="loading"
                  label="Button"
                />
              </div>
              <p className="code">button.loading</p>
            </div>

            <div className="col-3">
              <div className="ui-box">
                <Button
                  buttonClass="success"
                  icon={CheckIcon}
                />
              </div>
              <p className="code">button.success</p>
            </div>

            <div className="col-3">
              <div className="ui-box">
                <Button
                  buttonClass="error"
                  label="Error"
                />
              </div>
              <p className="code">button.error</p>
            </div>

            {/* Secondary Buttons */}
            <div className="col-3">
              <div className="ui-box">
                <Button
                  buttonClass="secondary"
                  label="Button"
                />
              </div>
              <p className="code">button.secondary</p>
            </div>

            <div className="col-3">
              <div className="ui-box">
                <Button
                  buttonClass="secondary loading"
                  label="Button"
                />
              </div>
              <p className="code">button.secondary.loading</p>
            </div>

            <div className="col-3">
              <div className="ui-box">
                <Button
                  buttonClass="secondary success"
                  label="Button"
                />
              </div>
              <p className="code">button.secondary.success</p>
            </div>

            <div className="col-3">
              <div className="ui-box">
                <Button
                  buttonClass="secondary error"
                  label="Button"
                />
              </div>
              <p className="code">button.secondary.error</p>
            </div>

            {/* Tertiary Buttons */}
            <div className="col-3">
              <div className="ui-box">
                <Button
                  buttonClass="tertiary"
                  label="Button"
                />
              </div>
              <p className="code">button.tertiary</p>
            </div>

            <div className="col-3">
              <div className="ui-box">
                <Button
                  buttonClass="tertiary loading"
                  label="Button"
                />
              </div>
              <p className="code">button.tertiary.loading</p>
            </div>

            <div className="col-3">
              <div className="ui-box">
                <Button
                  buttonClass="tertiary success"
                  label="Button"
                />
              </div>
              <p className="code">button.tertiary.success</p>
            </div>

            <div className="col-3">
              <div className="ui-box">
                <Button
                  buttonClass="tertiary error"
                  label="Button"
                />
              </div>
              <p className="code">button.tertiary.error</p>
            </div>

            {/* Button Sizes */}
            <div className="col-3">
              <div className="ui-box">
                <Button
                  buttonClass="large"
                  label="Large"
                />
              </div>
              <p className="code">button.large</p>
            </div>

            <div className="col-3">
              <div className="ui-box">
                <Button
                  buttonClass="medium"
                  label="Medium"
                />
              </div>
              <p className="code">button.medium</p>
            </div>

            <div className="col-3">
              <div className="ui-box">
                <Button
                  buttonClass="small"
                  label="Small"
                />
              </div>
              <p className="code">button.small</p>
            </div>

            <div className="col-3">
              <div className="ui-box">
                <Button
                  buttonClass="tiny"
                  label="Tiny"
                />
              </div>
              <p className="code">button.tiny</p>
            </div>

            <div className="col-3">
              <div className="ui-box">
                <Button
                  buttonClass="circle"
                  label="GW"
                />
              </div>
              <p className="code">button.circle</p>
            </div>

            <div className="col-3">
              <div className="ui-box">
                <Button
                  buttonClass="square alert-btn"
                  icon={TrashIcon}
                />
              </div>
              <p className="code">button.square.alert-btn</p>
            </div>

            <div className="col-3">
              <div className="ui-box">
                <Button
                  buttonClass="circle notify-btn"
                  icon={HistoryIcon}
                />
              </div>
              <p className="code">button.square.alert-btn</p>
            </div>

            <div className="col-3">
              <div className="ui-box">
                <Button
                  buttonClass="square success-btn"
                  icon={PlusIcon}
                />
              </div>
              <p className="code">button.square.alert-btn</p>
            </div>
          </div>
        </div>
      </section>
		);
	}
}