import { createAction, props } from '@ngrx/store';
import { User } from '../../entities/User';

export const setActiveUser = createAction('[User] Set Active User', props<{ user: User }>());

export const userLogin = createAction('[User] login', props<User>());
export const userLoginSuccess = createAction('[User] login success', props<User>());
export const userLoginFail = createAction('[User] login fail', props<Error>());
