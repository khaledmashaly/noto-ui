import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../entities/User';
import { AuthService } from '../../services/auth.service';

@Component({
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.sass']
})
export class LoginComponent {
	user: User = {
		email: '',
		password: ''
	};

	constructor(private router: Router, private auth: AuthService) { }

	login() {
		this.auth
			.login(this.user)
			.subscribe(
				() => {
					console.log('success login subscribe');
					this.router.navigate(['/notes']);
				},
				err => console.error('error in login subscribe:', err)
			);
	}
}
