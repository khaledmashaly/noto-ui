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
			error: null
		};
	}),
	on(userLogin, () => {
		return {
			user: null,
			isLoggedIn: false,
			loading: true,
			error: null
		};
	}),
	on(userLoginSuccess, () => {
		return {
			user: null,
			isLoggedIn: true,
			loading: false,
			error: null
		};
	}),
	on(userLoginFail, (state, action) => {
		return {
			user: null,
			isLoggedIn: false,
			loading: false,
			error: action.error
		};
	})
);
