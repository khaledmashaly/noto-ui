import { createReducer, on, Action } from '@ngrx/store';
import { User } from '../../entities/User';
import { setActiveUser } from '../actions/user.actions';
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
	})
);
