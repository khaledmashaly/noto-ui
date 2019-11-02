import { User } from '../../entities/User';

export interface UserState {
	user: User;
	isLoggedIn: boolean;
	loading: boolean;
	errorMessage: string;
}

export const userInitialState: UserState = {
	user: null,
	isLoggedIn: false,
	loading: false,
	errorMessage: ''
};
