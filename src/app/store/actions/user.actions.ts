import { createAction, props } from '@ngrx/store';
import { User } from '../../entities/User';

interface UserLoginProps {
	user: User;
}

interface UserLoginFailProps {
	errorMessage: string;
}

export const setActiveUser = createAction('[User] Set Active User', props<{ user: User }>());

export const userLogin = createAction('[User] login', props<UserLoginProps>());
export const userLoginSuccess = createAction('[User] login success');
export const userLoginFail = createAction('[User] login fail', props<UserLoginFailProps>());
