import { Component, OnInit } from '@angular/core';
import { AdvertisementService } from 'src/app/_services/advertisement.service';
import { Category } from 'src/app/_models/category';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-categories-managment',
  templateUrl: './categories-managment.component.html',
  styleUrls: ['./categories-managment.component.css']
})
export class CategoriesManagmentComponent implements OnInit {
categories: Category;
toggleBtn = false;
editForm: FormGroup;
rowId: number;

  constructor(private advService: AdvertisementService, private fb: FormBuilder) { }

  ngOnInit() {
    this.getCategories();
    this.createForm();
  }

getCategories() {
  this.advService.getCategories().subscribe((categories: Category) => {
    this.categories = categories;
}, error => {
  console.log(error);
});
}

opsBtn(id) {
  this.toggleBtn = true;
  this.rowId = id;
}

cancel() {
  this.toggleBtn = false;
  this.rowId = null;
}

save() {
  console.log(this.editForm.value);
}

createForm() {
  this.editForm = this.fb.group({
    name: ['', Validators.required],
  });
}
}
