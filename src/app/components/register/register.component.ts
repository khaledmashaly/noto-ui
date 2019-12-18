import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { User } from '../../entities/User';
import { ROUTE_NAMES } from 'src/app/modules/routing/routes-names';

@Component({
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.sass']
})
export class RegisterComponent {
	user: User = {
		email: '',
		password: ''
	};
	routes = ROUTE_NAMES;

	constructor(private router: Router, private auth: AuthService) { }

	register() {
		this.auth
			.register(this.user)
			.subscribe(
				() => this.router.navigate([this.routes.userHome]),
				err => console.error(err)
			);
	}
}
