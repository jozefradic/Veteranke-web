import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  // to store username and pass
  loginCredential: any = {};
// inject module auth service
  constructor(private authService: AuthService ) { }

  ngOnInit() {
  }
// send loginCredential(premenna z navbar) and send it to auth.service (tam však premennu volame model)
  login() {
    this.authService.login(this.loginCredential).subscribe(next => {
      console.log('Logged in succesfully');
    }, error => {
      console.log('Failed to log in');
    });
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    // if something in token, returnt true, else false
    return !!token;
  }

  loggOut() {
    localStorage.removeItem('token');
    console.log('Logged out');
  }

}
