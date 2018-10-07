import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../shared/user';
import { AuthService } from '../auth.service';

@Component({
	templateUrl: './sign-form.component.html',
	styleUrls: ['./sign-form.component.sass']
})
export class SignFormComponent {
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
