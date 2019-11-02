import { createReducer, on, Action } from '@ngrx/store';
import { User } from '../../entities/User';
import { setActiveUser, userLogin, userLoginSuccess, userLoginFail } from '../actions/user.actions';
import { UserState, userInitialState } from '../states/user.state';

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
	on(userLoginSuccess, () => {
		return {
			user: null,
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
