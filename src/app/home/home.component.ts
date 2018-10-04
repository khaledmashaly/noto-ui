import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

	constructor(private router: Router, private auth: AuthService) { }

	ngOnInit() {
		const isLoggedIn = this.auth.isLoggedIn();
		if (isLoggedIn) {
			this.router.navigate(['/notes']);
		}
	}

}
