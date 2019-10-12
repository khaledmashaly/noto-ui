import { createAction, props } from '@ngrx/store';
import { User } from '../../entities/User';

export const setActiveUser = createAction('[User] Set Active User', props<{ user: User }>());
