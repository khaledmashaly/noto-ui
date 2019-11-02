import { User } from '../../entities/User';

export interface UserState {
	user: User;
	isLoggedIn: boolean;
	loading: boolean;
	error: Error;
}

export const userInitialState: UserState = {
	user: null,
	isLoggedIn: false,
	loading: false,
	error: null
};
