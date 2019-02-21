import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { AuthService } from 'src/app/_services/auth.service';
import { AdvertisementService } from 'src/app/_services/advertisement.service';
import { Advertisement } from 'src/app/_models/advertisement';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-advertisement-edit',
  templateUrl: './advertisement-edit.component.html',
  styleUrls: ['./advertisement-edit.component.css']
})
export class AdvertisementEditComponent implements OnInit {
advertisement: Advertisement;
editForm: FormGroup;
  constructor(private route: ActivatedRoute, private alertify: AlertifyService,
    private advService: AdvertisementService, private authService: AuthService,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.advertisement = data['advertisement'];
    });
    console.log(this.advertisement);
    this.createAdvForm();
  }

  createAdvForm() {
    this.editForm = this.fb.group({
      name: ['', Validators.required],
      desc: ['', Validators.required],
      price: ['', Validators.compose([Validators.required, Validators.pattern('^[0-9]*')])],
      userId: this.authService.decodedToken.nameid
    });
  }

  create() {
    console.log(this.editForm.value);

  }

}
