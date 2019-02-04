import { Component, OnInit } from '@angular/core';
import { Advertisement } from 'src/app/_models/advertisement';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-advertisement-detail',
  templateUrl: './advertisement-detail.component.html',
  styleUrls: ['./advertisement-detail.component.css']
})
export class AdvertisementDetailComponent implements OnInit {
advertisement: Advertisement;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe( data => {
      this.advertisement = data['advertisement'];
    });
  }

}
