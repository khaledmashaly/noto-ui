import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../../entities/User';

@Component({
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {
	user: User;

	constructor(private auth: AuthService) { }

	ngOnInit() {
		this.auth.profile().subscribe(
			user => this.user = user,
			err => console.log(err)
		);
	}

}
