import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, exhaustMap } from 'rxjs/operators';
import { AuthService } from '../../services/auth.service';
import { userLogin, userLoadProfile, userLoginFail, userLoadProfileSuccess } from '../actions/user.actions';
import { of } from 'rxjs';

@Injectable()
export class UserEffects {

	userLogin$ = createEffect(() =>
		this.actions$.pipe(
			ofType(userLogin),
			exhaustMap(
				(action) => this.authService.login(action.user).pipe(
					map(() => userLoadProfile()),
					catchError((error) => of(
						userLoginFail({ errorMessage: error.message })
					))
				)
			)
		)
	);

	userLoadProfile$ = createEffect(() => this.actions$.pipe(
		ofType(userLoadProfile),
		exhaustMap(
			() => this.authService.profile().pipe(
				map((user) => userLoadProfileSuccess({ user })),
				catchError((error) => of(
					userLoginFail({ errorMessage: error.message })
				))
			)
		)
	));

	constructor(
		private actions$: Actions,
		private authService: AuthService
	) { }
}
