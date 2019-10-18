import { ActionReducerMap } from '@ngrx/store';
import { AppState } from '../states/app.state';
import { userReducer } from './user.reducers';

export const reducerMap: ActionReducerMap<AppState, any> = {
	userState: userReducer
};
