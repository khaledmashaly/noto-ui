import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  links: Array<String>;

  constructor() { }

  ngOnInit() {
    this.links = ['Home', 'About', 'Services', 'Contacts'];
  }

}
