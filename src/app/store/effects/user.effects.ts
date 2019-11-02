import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, Effect } from '@ngrx/effects';
import { map, mergeMap, catchError, exhaustMap } from 'rxjs/operators';
import { AuthService } from '../../services/auth.service';
import { userLogin, userLoginSuccess, userLoginFail } from '../actions/user.actions';
import { of } from 'rxjs';

@Injectable()
export class UserEffects {

	userLogin$ = createEffect(() =>
		this.actions$.pipe(
			ofType(userLogin),
			exhaustMap(
				(action) => this.authService.login(action.user).pipe(
					map(() => userLoginSuccess()),
					catchError((error) => of(userLoginFail(error)))
				)
			)
		)
	);

	constructor(
		private actions$: Actions,
		private authService: AuthService
	) { }
}
