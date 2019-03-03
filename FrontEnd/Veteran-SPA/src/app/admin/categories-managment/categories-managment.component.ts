import { Component, OnInit, Input } from '@angular/core';
import { AdvertisementService } from 'src/app/_services/advertisement.service';
import { Category } from 'src/app/_models/category';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertifyService } from 'src/app/_services/alertify.service';

@Component({
  selector: 'app-categories-managment',
  templateUrl: './categories-managment.component.html',
  styleUrls: ['./categories-managment.component.css']
})
export class CategoriesManagmentComponent implements OnInit {
categories: Category;
toggleBtn = false;
toggleBtnCategory = false;
editForm: FormGroup;
newCategoryForm: FormGroup;
rowId: number;

  constructor(private advService: AdvertisementService, private fb: FormBuilder,
    private alertify: AlertifyService) { }

  ngOnInit() {
    this.getCategories();
    this.createForm();
    this.createCategoryForm();
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
  if (this.editForm.valid) {
    this.advService.updateCategory(this.rowId, this.editForm.value).subscribe(() => {
      this.alertify.success('Kategória bola úspešne aktualizovaná');
      this.getCategories();
    },  error => {
     this.alertify.error(error);
    });
  }
  this.toggleBtn = false;
}

createForm() {
  this.editForm = this.fb.group({
    name: ['', Validators.required],
  });
}

opsBtnCategory() {
  this.toggleBtnCategory = true;
}
cancelCat() {
  this.toggleBtnCategory = false;
}

newCategory() {
  console.log(this.newCategoryForm.value);
  if (this.newCategoryForm.valid) {
    this.advService.createNewCategory(this.newCategoryForm.value).subscribe(() => {
      this.alertify.success('Kategória bola úspešne pridaná');
      this.getCategories();
    },  error => {
     this.alertify.error(error);
    });
    this.toggleBtnCategory = false;
  }
}

createCategoryForm() {
  this.newCategoryForm = this.fb.group({
    name: ['', Validators.required],
  });
}
}
