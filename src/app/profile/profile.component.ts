import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { UserDetails } from '../shared/auth';

@Component({
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {
	user: UserDetails;

	constructor(private auth: AuthService) { }

	ngOnInit() {
		this.auth.profile().subscribe(
			user => this.user = user,
			err => console.log(err)
		);
	}

}
