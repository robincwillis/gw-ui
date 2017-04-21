import { createStore, applyMiddleware, compose } from 'redux';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import rootReducer from './reducers/root';
import { Router, Route, browserHistory } from 'react-router';
import { firebase as fbConfig } from './config';
import { reactReduxFirebase } from 'react-redux-firebase';

export default function configureStore (initialState, history) {
	const reduxRouterMiddleware = routerMiddleware(browserHistory);

	const createStoreWithMiddleware = compose(
		applyMiddleware(reduxRouterMiddleware),
		reactReduxFirebase(fbConfig, {
			userProfile: 'users',
			enableLogging: false
		})
	)(createStore);

	const store = createStoreWithMiddleware(rootReducer);

	return store;
}


