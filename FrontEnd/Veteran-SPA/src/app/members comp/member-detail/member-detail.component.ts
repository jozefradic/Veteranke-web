import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { User } from 'src/app/_models/user';
import { UserService } from 'src/app/_services/user.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { ActivatedRoute } from '@angular/router';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent implements OnInit {
@ViewChild('') fileInput: ElementRef;
user: User;
galleryOptions: NgxGalleryOptions[];
galleryImages: NgxGalleryImage[];
login = localStorage.getItem('token');

  constructor(private userService: UserService, private alertify: AlertifyService,
    private route: ActivatedRoute, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.user = data['user'];
    });
    this.galleryOptions = [
      {
        // width: '500px',
        // height: '500px',
        // imagePercent: 100,
        // thumbnailsColumns: 4,
        // imageAnimation: NgxGalleryAnimation.Slide
        previewCloseOnClick: true,
        previewCloseOnEsc: true
      },
      {
        breakpoint: 500,
        width: '300px',
        height: '300px',
        thumbnailsColumns: 3
      },
      {
        breakpoint: 300,
        width: '100%',
        height: '200px',
        thumbnailsColumns: 2
      },
    ];
    this.galleryImages = this.getImages();
  }

  getImages() {
    const imageUrls = [];
    for (let i = 0; i < this.user.photos.length; i++) {
      imageUrls.push({
        small: (this.user.photos[i].url),
        medium: (this.user.photos[i].url),
        big: (this.user.photos[i].url),
        url: (this.user.photos[i].url),
      });
    }
    return imageUrls;
  }
  // loadUser() {
  //   this.userService.getUser(+this.route.snapshot.params['id']).subscribe((user: User) => {
  //     this.user = user;
  //   }, error => {
  //     this.alertify.error(error);
  //   });
  // }
  uploadPhoto() {
  }

}
