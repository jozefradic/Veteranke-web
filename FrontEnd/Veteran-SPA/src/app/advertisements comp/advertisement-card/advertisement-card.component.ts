import { Component, OnInit, Input } from '@angular/core';
import { Advertisement } from 'src/app/_models/advertisement';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/_models/user';

@Component({
  selector: 'app-advertisement-card',
  templateUrl: './advertisement-card.component.html',
  styleUrls: ['./advertisement-card.component.css']
})
export class AdvertisementCardComponent implements OnInit {
@Input() advertisement: Advertisement;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  }

}
