import { VehiclegaleryService } from './../../_services/vehiclegalery.service';
import { Album } from './../../_models/album';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { NgxGalleryOptions, NgxGalleryImage } from 'ngx-gallery';

@Component({
  selector: 'app-vozidla',
  templateUrl: './vozidla.component.html',
  styleUrls: ['./vozidla.component.css']
})
export class VozidlaComponent implements OnInit {

  albums: Album;
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  constructor(private albumService: VehiclegaleryService, private alertify: AlertifyService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.albums = data['albums'];
    });
  }


  // getVehiclesAlbums() {
  //   this.albumService.getVehiclesGalery().subscribe((data: Album[]) => {
  //     this.albums = data;
  //   }, error => {
  //     console.log(error);
  //   });

  // }

}
