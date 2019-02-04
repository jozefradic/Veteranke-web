import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {
  // declare property
values: any;

user = this.authService.decodedToken.nameid;

  constructor(private http: HttpClient, private authService: AuthService) { }

  ngOnInit() {
    this.getAdvertisements();
    console.log(this.user);
  }
// method
  // getValues() {
  //   this.http.get('http://localhost:5000/api/values').subscribe(response => {
  //     this.values = response;
  //   }, error => {
  //     console.log(error);
  //   });
  // }

getAdvertisements() {
  this.http.get('http://localhost:5000/api/Advertisement').subscribe(res => {
    this.values = res;
    // console.log(this.values);
    // console.log(this.values.name);

  }, error => {
    console.log(error);
  });
}

}
