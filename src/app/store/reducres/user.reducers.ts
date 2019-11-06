import { createReducer, on } from '@ngrx/store';
import { setActiveUser, userLogin, userLoadProfile, userLoginFail, userLoadProfileSuccess } from '../actions/user.actions';
import { userInitialState } from '../states/user.state';

export const userReducer = createReducer(
	userInitialState,
	on(setActiveUser, (state, { user }) => {
		return {
			user,
			isLoggedIn: true,
			loading: false,
			errorMessage: ''
		};
	}),
	on(userLogin, () => {
		return {
			user: null,
			isLoggedIn: false,
			loading: true,
			errorMessage: ''
		};
	}),
	on(userLoadProfile, () => {
		return {
			user: null,
			isLoggedIn: true,
			loading: true,
			errorMessage: ''
		};
	}),
	on(userLoadProfileSuccess, (state, action) => {
		return {
			user: action.user,
			isLoggedIn: true,
			loading: false,
			errorMessage: ''
		};
	}),
	on(userLoginFail, (state, action) => {
		return {
			user: null,
			isLoggedIn: false,
			loading: false,
			errorMessage: action.errorMessage
		};
	})
);
