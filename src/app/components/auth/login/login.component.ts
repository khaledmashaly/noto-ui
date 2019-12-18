import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../../entities/User';
import { AuthService } from '../../../services/auth.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/states/app.state';
import { userLogin } from 'src/app/store/actions/user.actions';

@Component({
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
	user: User = {
		email: '',
		password: ''
	};

	loading = false;
	errorMessage = '';

	constructor(
		private router: Router,
		private auth: AuthService,
		private store: Store<AppState>
	) { }

	ngOnInit() {
		this.store
			.select(appState => appState.userState)
			.subscribe(userState => {
				this.loading = userState.loading;
				this.errorMessage = userState.errorMessage;
			});
	}

	login() {
		this.store.dispatch(userLogin({ user: this.user }));
		// this.auth
		// 	.login(this.user)
		// 	.subscribe(
		// 		() => {
		// 			console.log('success login subscribe');
		// 			this.router.navigate(['/notes']);
		// 		},
		// 		err => console.error('error in login subscribe:', err)
		// 	);
	}
}
