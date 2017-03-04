import React, { Component } from 'react';
import InlineSVG from 'svg-inline-react';

import Button from '../Button/Button';
import BoxIcon from '../Icons/Box';

export default class UITooltips extends Component {

	render () {
		return (
			<section id="tooltip">
        <div className="container">
          <div className="section-info">
            <div className="float-grid">
              <div className="col-6">
                <h3>The Tooltip</h3>
              </div>
              <div className="col-6">
                <p>Defining <code>tooltip-text</code> on and element will create a tooltip. By default, the tooltip will appear to the right of the element. To position the tooltip differently, define <code>tooltip-position</code> top, bottom, or left.</p>
                <p>Dig into the <code>tooltip.css</code> fill and tweak the <code>--nipple-size</code> and <code>--tooltip-offset</code> variables for size and spacing.</p>
              </div>
            </div>
          </div>
          <div className="inline-grid">
            <div className="col-3">
              <div className="ui-box">
                <Button
                  buttonClass="small circle transparent"
                  icon={BoxIcon}
                  data-tooltip-text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quodsi ipsam honestatem undique pertectam atque absolutam. Quamquam non negatis nos intellegere quid sit voluptas, sed quid ille dicat. Nunc ita separantur, ut disiuncta sint" 
                  data-tooltip-paragraph="true"
                />
              </div>
              <code>default</code>
            </div>
            <div className="col-3">
              <div className="ui-box">
                <a className="button circle small" data-tooltip-text="Follow on Instagram" data-tooltip-position="bottom">
                  <div className="button-content">
                    <div className="icon">
                      <svg width="16px" height="16px" viewBox="0 0 16 16">
                        <path d="M8.0001,0 C5.8271,0 5.5551,0.009 4.7021,0.048 C3.8501,0.087 3.2691,0.222 2.7601,0.42 C2.2341,0.624 1.7871,0.898 1.3431,1.343 C0.8981,1.787 0.6241,2.234 0.4201,2.76 C0.2221,3.269 0.0871,3.85 0.0481,4.702 C0.0091,5.555 0.0001,5.827 0.0001,8 C0.0001,10.173 0.0091,10.445 0.0481,11.298 C0.0871,12.15 0.2221,12.731 0.4201,13.24 C0.6241,13.766 0.8981,14.213 1.3431,14.657 C1.7871,15.102 2.2341,15.376 2.7601,15.58 C3.2691,15.778 3.8501,15.913 4.7021,15.952 C5.5551,15.991 5.8271,16 8.0001,16 C10.1731,16 10.4451,15.991 11.2981,15.952 C12.1501,15.913 12.7311,15.778 13.2401,15.58 C13.7661,15.376 14.2131,15.102 14.6571,14.657 C15.1021,14.213 15.3761,13.766 15.5801,13.24 C15.7781,12.731 15.9131,12.15 15.9521,11.298 C15.9911,10.445 16.0001,10.173 16.0001,8 C16.0001,5.827 15.9911,5.555 15.9521,4.702 C15.9131,3.85 15.7781,3.269 15.5801,2.76 C15.3761,2.234 15.1021,1.787 14.6571,1.343 C14.2131,0.898 13.7661,0.624 13.2401,0.42 C12.7311,0.222 12.1501,0.087 11.2981,0.048 C10.4451,0.009 10.1731,0 8.0001,0 Z M8.0001,2 C10.1971,2 10.4111,2.01 11.2071,2.046 C11.9021,2.078 12.2591,2.184 12.5161,2.284 C12.8151,2.401 13.0191,2.533 13.2431,2.757 C13.4671,2.981 13.5991,3.185 13.7161,3.484 C13.8161,3.741 13.9221,4.098 13.9541,4.793 C13.9901,5.588 14.0001,5.801 14.0001,8 C14.0001,10.199 13.9901,10.412 13.9541,11.207 C13.9221,11.902 13.8161,12.259 13.7161,12.516 C13.5991,12.815 13.4671,13.019 13.2431,13.243 C13.0191,13.467 12.8151,13.599 12.5161,13.716 C12.2591,13.816 11.9021,13.922 11.2071,13.954 C10.4121,13.99 10.1981,14 8.0001,14 C5.8021,14 5.5881,13.99 4.7931,13.954 C4.0981,13.922 3.7411,13.816 3.4841,13.716 C3.1851,13.599 2.9811,13.467 2.7571,13.243 C2.5331,13.019 2.4011,12.815 2.2841,12.516 C2.1841,12.259 2.0781,11.902 2.0461,11.207 C2.0101,10.411 2.0001,10.197 2.0001,8 C2.0001,5.803 2.0101,5.589 2.0461,4.793 C2.0781,4.098 2.1841,3.741 2.2841,3.484 C2.4011,3.185 2.5331,2.981 2.7571,2.757 C2.9811,2.533 3.1851,2.401 3.4841,2.284 C3.7411,2.184 4.0981,2.078 4.7931,2.046 C5.5891,2.01 5.8031,2 8.0001,2 Z M8,12 C5.790861,12 4,10.209139 4,8 C4,5.790861 5.790861,4 8,4 C10.209139,4 12,5.790861 12,8 C12,10.209139 10.209139,12 8,12 Z M8,10 C9.1045695,10 10,9.1045695 10,8 C10,6.8954305 9.1045695,6 8,6 C6.8954305,6 6,6.8954305 6,8 C6,9.1045695 6.8954305,10 8,10 Z M12,5 C12.5522847,5 13,4.55228475 13,4 C13,3.44771525 12.5522847,3 12,3 C11.4477153,3 11,3.44771525 11,4 C11,4.55228475 11.4477153,5 12,5 Z" id="path-1"></path>
                      </svg>
                    </div>
                  </div>
                </a>
              </div>
              <code>bottom</code>
            </div>
            <div className="col-3">
              <div className="ui-box">
                <a className="button circle small transparent" data-tooltip-text="Close" data-tooltip-position="left">
                  <div className="button-content">
                    <div className="icon">
                      <div className="css-icon-x"></div>
                    </div>
                  </div>
                </a>
              </div>
              <code>left</code>
            </div>
            <div className="col-3">
              <div className="ui-box">
                <a className="button circle small transparent" data-tooltip-text="Done" data-tooltip-position="top">
                  <div className="button-content">
                    <div className="icon">
                      <div className="css-icon-check"></div>
                    </div>
                  </div>
                </a>
              </div>
              <code>top</code>
            </div>
          </div>
        </div>
      </section>
		);
	}
}