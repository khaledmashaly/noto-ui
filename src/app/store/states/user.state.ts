import { User } from '../../entities/User';

export interface UserState {
	user: User;
	isLoggedIn: boolean;
}

export const userInitialState: UserState = {
	user: null,
	isLoggedIn: false
};
