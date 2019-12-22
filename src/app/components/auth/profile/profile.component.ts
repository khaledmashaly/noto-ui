import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from '../../../entities/User';
import { AppState } from 'src/app/store/states/app.state';

@Component({
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.sass']
})
export class ProfileComponent {
	user$ = this.store.select(({ userState }) => userState.user);

	constructor(
		private store: Store<AppState>
	) { }
}
