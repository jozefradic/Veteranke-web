import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  // to store username and pass
  loginCredential: any = {};

  constructor() { }

  ngOnInit() {
  }

  login() {
    console.log(this.loginCredential);
  }

}
