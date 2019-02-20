import { Component, OnInit } from '@angular/core';
import { Advertisement } from 'src/app/_models/advertisement';
import { ActivatedRoute } from '@angular/router';
import { AdvertisementService } from 'src/app/_services/advertisement.service';
import { User } from 'src/app/_models/user';

@Component({
  selector: 'app-advertisements',
  templateUrl: './advertisements.component.html',
  styleUrls: ['./advertisements.component.css']
})
export class AdvertisementsComponent implements OnInit {
advertisements: Advertisement[];
user: User;

  constructor(private route: ActivatedRoute, private advService: AdvertisementService) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.advertisements = data['advertisement'];
    });
  }

  getAds() {
    this.advService.getAdvertisements().subscribe((advertisements: Advertisement[]) => {
      this.advertisements = advertisements;
    }, error => {
      console.log(error);
    });
  }

}
