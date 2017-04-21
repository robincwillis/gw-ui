import React, { Component } from 'react';
import InlineSVG from 'svg-inline-react';

import UIFloatGrid from './UIFloatGrid';
import UIInlineGrid from './UIInlineGrid';
import UIFlexGrid from './UIFlexGrid';
import UIButtons from './UIButtons';
import UIInputs from './UIInputs';
import UIRichText from './UIRichText';
import Tabs from 'components/Tabs';
import PlusIcon from 'assets/icons/plus';

import './ui-kit';

export default class UIKit extends Component {

	render () {
		return (
      <div id="ui-kit">

        <UIFloatGrid />
        <UIInlineGrid />
        <UIFlexGrid />
        <UIButtons />
        <UIInputs />
        <UIRichText />

      </div>
		);
	}
}