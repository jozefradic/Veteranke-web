import { Component, OnInit } from '@angular/core';
import { Advertisement } from 'src/app/_models/advertisement';
import { ActivatedRoute, Router } from '@angular/router';
import { AdvertisementService } from 'src/app/_services/advertisement.service';
import { User } from 'src/app/_models/user';

@Component({
  selector: 'app-advertisements',
  templateUrl: './advertisements.component.html',
  styleUrls: ['./advertisements.component.css']
})
export class AdvertisementsComponent implements OnInit {
advertisement: Advertisement[];
user: User;

  constructor(private route: ActivatedRoute, private advService: AdvertisementService,
    private router: Router) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.advertisement = data['advertisementArr'];
    });
  }
  newAdv() {
    this.router.navigateByUrl('/advertisements/new');
  }

  // getAds() {
  //   this.advService.getAdvertisements().subscribe((advertisements: Advertisement[]) => {
  //     this.advertisement = advertisements;
  //   }, error => {
  //     console.log(error);
  //   });
  // }

}
