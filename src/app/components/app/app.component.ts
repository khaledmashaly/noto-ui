import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/states/app.state';
import { userLoadProfile } from 'src/app/store/actions/user.actions';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
	loading = true;

	constructor(
		private store: Store<AppState>
	) {}

	ngOnInit() {
		this.store
				.select(appState => appState.userState.loading)
				.subscribe(loading => this.loading = loading);
		this.store.dispatch(userLoadProfile());
	}
}
