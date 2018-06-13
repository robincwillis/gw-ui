import locationHelperBuilder from 'redux-auth-wrapper/history4/locationHelper'
import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect'
import connectedAuthWrapper from 'redux-auth-wrapper/connectedAuthWrapper'

import Loader from 'components/Loader';

import asteroid from 'asteroid_client';


const locationHelper = locationHelperBuilder({})

export const userIsAuthenticated = connectedAuthWrapper({
	authenticatedSelector: state => state.users.get('userId') !== null,
	authenticatingSelector: state => state.users.get('loading'),
	wrapperDisplayName: 'UserIsAuthenticated'
});

export const userIsNotAuthenticated = connectedAuthWrapper({
	authenticatedSelector: (state) => state.users.get('userId') === null,
	authenticatingSelector: state => state.users.get('loading'),
	wrapperDisplayName: 'UserIsNotAuthenticated'
});

export const userIsAuthenticatedRedirect = connectedRouterRedirect({
	authenticatedSelector: state => state.users.get('userId') !== null,
	authenticatingSelector: state => state.users.get('loading'),
	wrapperDisplayName: 'UserIsAuthenticated',
	//AuthenticatingComponent: Loader,
	redirectPath: '/login'
});

export const userIsAdminRedirect = connectedRouterRedirect({
	authenticatedSelector: state => state.users.get('userId') && state.users.get('role') === 'Admin',
	predicate: user => user.get('role') === 'Admin',
	wrapperDisplayName: 'UserIsAdmin',
	allowRedirectBack: false,
	redirectPath: '/'
});

export const userIsNotAuthenticatedRedirect = connectedRouterRedirect({
	authenticatedSelector: state => !state.users.get('userId'),
	wrapperDisplayName: 'UserIsNotAuthenticated',
	allowRedirectBack: false,
	redirectPath: (state, ownProps) => locationHelper.getRedirectQueryParam(ownProps) || '/'
});
