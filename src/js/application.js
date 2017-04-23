import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import UIKit from 'containers/UIKit/UIKit';

ReactDOM.render(
	<Router history={browserHistory}>
		<Route path='*' component={UIKit} />
	</Router>,
	document.getElementById('root')
);
