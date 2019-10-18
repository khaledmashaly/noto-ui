import { Component, OnInit } from '@angular/core';
import { User } from '../entities/User';
import { Store } from '@ngrx/store';
import { AppState } from '../store/states/app.state';
// import { Router, NavigationEnd } from '@angular/router';
// import { AuthService } from '../auth.service';
// import { UserDetails } from '../shared/auth';
// import { Observable, of } from 'rxjs';
// import { filter } from 'rxjs/operators';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
	isLoggedIn = false;
	user: User = null;
	// navEnd: Observable<NavigationEnd>;

	constructor(
		// private router: Router,
		// private auth: AuthService,
		private store: Store<AppState>
	) {
		// this.navEnd = this.router.events.pipe(
		// 	filter(event => event instanceof NavigationEnd)
		// ) as Observable<NavigationEnd>;
	}

	ngOnInit() {
		this.store
				.select(appState => appState.userState)
				.subscribe(userSate => {
					this.user = userSate.user;
					this.isLoggedIn = userSate.isLoggedIn;
				});
		// this.checkLoginStatus();
		// this.navEnd.subscribe(() => {
		// 	this.checkLoginStatus();
		// });
	}

	// private checkLoginStatus(): void {
	// 	this.isLoggedIn = of(this.auth.isLoggedIn());
	// 	if (this.isLoggedIn) {
	// 		this.user = this.auth.decodeToken();
	// 	}
	// 	else {
	// 		this.user = null;
	// 	}
	// 	console.log('inside ngOnInit() of Header, isLoggedIn:', this.isLoggedIn, ', userDetails:', this.user);
	// }
}
