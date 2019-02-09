import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import { AdvertisementService } from 'src/app/_services/advertisement.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { Router } from '@angular/router';
import { Advertisement } from 'src/app/_models/advertisement';

@Component({
  selector: 'app-advertisement-new',
  templateUrl: './advertisement-new.component.html',
  styleUrls: ['./advertisement-new.component.css']
})
export class AdvertisementNewComponent implements OnInit {

  // advertisement: Advertisement;
  userId = this.authService.decodedToken.nameid;
  newAdvertisement: any = { UserId: this.userId };

  constructor(private authService: AuthService, private advService: AdvertisementService,
    private alertify: AlertifyService,  private router: Router) { }

  ngOnInit() {
    console.log(this.userId);
  }

  create() {
    console.log(this.newAdvertisement);
    this.advService.createNew(this.newAdvertisement).subscribe((advertisement: Advertisement) => {
      this.alertify.success('Advertisement created successful');
      console.log(advertisement);
      this.router.navigate(['/advertisements/', advertisement.id]);
    }, error => {
      this.alertify.error(error);
    });
  }

}
