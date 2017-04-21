import React, { Component } from 'react';
import { browserHistory } from 'react-router';

import { UserAuthWrapper } from 'redux-auth-wrapper';
import { connect } from 'react-redux';
import { routerReducer, syncHistoryWithStore, routerActions, routerMiddleware } from 'react-router-redux';
import { firebaseConnect, helpers } from 'react-redux-firebase';
const { pathToJS } = helpers;

export const NotAuthenticated = UserAuthWrapper({
	wrapperDisplayName: 'UserIsNotAuthenticated',
	allowRedirectBack: false,
	failureRedirectPath: '/',
	authSelector: ({ firebase }) => pathToJS(firebase, 'auth'),
	predicate: auth => auth === null,
	redirectAction: routerActions.replace
});

export const Authenticated = UserAuthWrapper({
	wrapperDisplayName: 'UserIsAuthenticated',
	allowRedirectBack: false,
	failureRedirectPath: '/login',
	authSelector: ({ firebase }) => pathToJS(firebase, 'auth'),
	predicate: auth => auth !== null,
	redirectAction: routerActions.replace
});

//Disabled

export const AuthenticatedEnabled = UserAuthWrapper({
	wrapperDisplayName: 'UserISAuthenticatedEnabled',
	allowRedirectBack: false,
	failureRedirectPath: '/',
	authSelector : state => state.user,
	authenticatingSelector: state => state.user.loading,
	predicate: user => user && !user.disabled ,
	redirectAction: routerActions.replace
});

//Admin
export const AuthenticatedAdmin = UserAuthWrapper({
	wrapperDisplayName: 'UserIsAuthenticatedAdmin',
	allowRedirectBack: false,
	failureRedirectPath: '/',
	authSelector : state => state.user,
	authenticatingSelector: state => state.user.loading,
	predicate: user => user && user.role === 'admin',
	redirectAction: routerActions.replace
});
