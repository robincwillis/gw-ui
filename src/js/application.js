import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import { Route, IndexRoute, Router, browserHistory } from 'react-router';

import { Authenticated, NotAuthenticated, AuthenticatedAdmin, AuthenticatedEnabled } from './components/AuthenticatedRoute';

import App from './containers/App/App';
import Home from './containers/Home/Home';
import Account from './containers/Account/Account';
import Login from './containers/Login/Login';
import Recover from './containers/Recover/Recover';
import NotFound from './containers/NotFound/NotFound';
import Signup from './containers/Signup/Signup';

import UIKit from './containers/UIKit';
import UIGrid from './containers/UIGrid/UIGrid';

const initialState = window.__INITIAL_STATE__ || {firebase: { authError: null }};

let store = configureStore(initialState, browserHistory);

ReactDOM.render(
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path='/ui-kit' component={UIKit} />
			<Route path='/' component={NotAuthenticated(Login)} />
			<Route path='/recover-password' component={Recover} />
			<Route path='/signup' component={Signup} />
		</Router>
	</Provider>,
	document.getElementById('root')
);


