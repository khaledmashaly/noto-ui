import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { User } from '../shared/user';

@Component({
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.sass']
})
export class RegisterComponent {
	user: User = {
		email: '',
		password: ''
	};

	constructor(private router: Router, private auth: AuthService) { }

	register() {
		this.auth
			.register(this.user)
			.subscribe(
				() => this.router.navigateByUrl('/profile'),
				err => console.error(err)
			);
	}
}
