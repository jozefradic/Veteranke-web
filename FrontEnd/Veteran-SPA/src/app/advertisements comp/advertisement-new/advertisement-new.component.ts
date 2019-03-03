import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import { AdvertisementService } from 'src/app/_services/advertisement.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Advertisement } from 'src/app/_models/advertisement';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Category } from 'src/app/_models/category';

@Component({
  selector: 'app-advertisement-new',
  templateUrl: './advertisement-new.component.html',
  styleUrls: ['./advertisement-new.component.css']
})
export class AdvertisementNewComponent implements OnInit {

  category: Category;
  advertisement: Advertisement;
  // userId = this.authService.decodedToken.nameid;
  // newAdvertisement: any = { UserId: this.userId };

  advForm: FormGroup;
  types = ['Predaj', 'Kúpa', 'Darujem', 'Vymením'];

  constructor(private authService: AuthService, private advService: AdvertisementService,
    private alertify: AlertifyService,  private router: Router, private route: ActivatedRoute,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.category = data['cat'];
    });
    console.log(this.category);
    this.createAdvForm();
  }

  createAdvForm() {
    this.advForm = this.fb.group({
      name: ['', Validators.required],
      desc: ['', Validators.required],
      price: ['', Validators.compose([Validators.required, Validators.pattern('^[0-9]*')])],
      userId: this.authService.decodedToken.nameid,
      categoryId: ['', Validators.required]
    });
  }
  create() {
    console.log(this.advForm.value);
    if (this.advForm.valid) {
      this.advertisement = Object.assign({}, this.advForm.value);
      this.advService.createNew(this.advertisement).subscribe((advertisement: Advertisement) => {
        this.alertify.success('Inzerát bol úspešne vytvorený');
        this.router.navigate(['/advertisements/', advertisement.id]);
      }, error => {
        this.alertify.error(error);
      });
    }
    // this.advService.createNew(this.advForm).subscribe((advertisement: Advertisement) => {
    //   this.alertify.success('Advertisement created successful');
    //   console.log(advertisement);
    //   this.router.navigate(['/advertisements/', advertisement.id]);
    // }, error => {
    //   this.alertify.error(error);
    // });
  }

}
