import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTE_NAMES } from 'src/app/modules/routing/routes-names';

@Component({
	selector: 'app-floating-action',
	templateUrl: './floating-action.component.html',
	styleUrls: ['./floating-action.component.sass']
})
export class FloatingActionComponent {
	routes = ROUTE_NAMES;

	constructor(
		private router: Router
	) { }

	doAction() {
		this.router.navigate([this.routes.noteCreate]);
	}
}
