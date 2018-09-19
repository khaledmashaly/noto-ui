import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user';
import { AuthService } from '../auth.service';

@Component({
	selector: 'app-sign-form',
	templateUrl: './sign-form.component.html',
	styleUrls: ['./sign-form.component.sass']
})
export class SignFormComponent implements OnInit {

	user: User = {
		email: '',
		password: ''
	};

	constructor(private authService: AuthService) { }

	ngOnInit() {

	}

	login() {
		console.log(this.user);
		this.authService
			.login(this.user)
			.subscribe();
	}
}
