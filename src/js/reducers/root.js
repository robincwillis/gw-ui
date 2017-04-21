import { combineReducers } from 'redux';
import drawer from './drawer';
import modal from './modal';
import notifications from './notifications';
import user from './user';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import { firebaseStateReducer as firebase } from 'react-redux-firebase';

const rootReducer = combineReducers({
	drawer,
	modal,
	notifications,
	user,
  firebase,
  routerReducer
});

export default rootReducer;