import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  logBtn = false;
  // to store username and pass
  loginCredential: any = {};
// inject module auth service
  constructor(public authService: AuthService, private alertify: AlertifyService,
    private router: Router ) { }

  ngOnInit() {
  }
// send loginCredential(premenna z navbar) and send it to auth.service (tam však premennu volame model)
  login() {
    this.authService.login(this.loginCredential).subscribe(next => {
      this.alertify.success('Logged in succesfully');
    }, error => {
      this.alertify.error(error);
    }, () => {
      this.router.navigate(['/home']);
    });
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    // if something in token, returnt true, else false
    return !!token;
  }

  loggOut() {
    localStorage.removeItem('token');
    this.alertify.message('Logged out');
    this.router.navigate(['/home']);
  }

  cancelLogin() {
    this.logBtn = false;
  }

  logInForm() {
    this.logBtn = true;
  }

}
