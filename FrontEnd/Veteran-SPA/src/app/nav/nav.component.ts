import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @ViewChild('loginForm') loginForm: NgForm;
  logBtn = false;
  // to store username and pass
  loginCredential: any = {};

  toggleNavbar = true;
// inject module auth service
  constructor(public authService: AuthService, private alertify: AlertifyService,
    private router: Router) {
    }

  ngOnInit() {
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const nav = document.getElementById('navBar');
    if (number > 100) {
      nav.classList.add('navbar1');
    } else {
      nav.classList.remove('navbar1');
    }
  }


// send loginCredential(premenna z navbar) and send it to auth.service (tam však premennu volame model)
  login() {
    this.authService.login(this.loginCredential).subscribe(next => {
      this.alertify.success('Logged in succesfully');
      this.loginForm.reset();
      window.location.reload();

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
    localStorage.removeItem('user');
    this.authService.decodedToken = null;
    this.authService.currentUser = null;
    this.alertify.message('Logged out');
    window.location.reload();

    this.router.navigate(['/home']);
  }

  cancelLogin() {
    this.logBtn = false;
  }

  logInForm() {
    this.logBtn = true;
  }

}
