import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { UserDetails } from '../shared/auth';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
	isLoggedIn: boolean;
	user: UserDetails;

	constructor(private auth: AuthService) { }

	ngOnInit() {
		this.isLoggedIn = this.auth.isLoggedIn();
		if (this.isLoggedIn) {
			this.user = this.auth.decodeToken();
		}
		console.log('inside ngOnInit() of Header, isLoggedIn:', this.isLoggedIn, ', userDetails:', this.user);
	}
}
