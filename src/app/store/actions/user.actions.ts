import { createAction, props } from '@ngrx/store';
import { User } from '../../entities/User';

interface UserLoginProps {
	user: User;
}

interface UserLoadProfileSuccessProps {
	user: User;
}

interface UserLoginFailProps {
	errorMessage: string;
}

export const setActiveUser = createAction('[User] Set Active User', props<{ user: User }>());

export const userLogin = createAction('[User] login', props<UserLoginProps>());
export const userLoadProfile = createAction('[User] load profile');
export const userLoadProfileSuccess = createAction('[User] load profile success', props<UserLoadProfileSuccessProps>());
export const userLoginFail = createAction('[User] login fail', props<UserLoginFailProps>());
