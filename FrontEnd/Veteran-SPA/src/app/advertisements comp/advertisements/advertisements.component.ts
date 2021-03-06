import { Component, OnInit } from '@angular/core';
import { Advertisement } from 'src/app/_models/advertisement';
import { ActivatedRoute, Router } from '@angular/router';
import { AdvertisementService } from 'src/app/_services/advertisement.service';
import { User } from 'src/app/_models/user';
import { Pagination, PaginationResult } from 'src/app/_models/pagination';
import { Category } from 'src/app/_models/category';

@Component({
  selector: 'app-advertisements',
  templateUrl: './advertisements.component.html',
  styleUrls: ['./advertisements.component.css']
})
export class AdvertisementsComponent implements OnInit {
advertisement: Advertisement[];
category: Category;
user: User;
pagination: Pagination;
advParams: any = {};

  constructor(private route: ActivatedRoute, private advService: AdvertisementService,
    private router: Router) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.advertisement = data['advertisementArr'].result;
      this.pagination = data['advertisementArr'].pagination;
    });
    this.getCategories();
    console.log(this.advertisement);
  }
  newAdv() {
    this.router.navigateByUrl('/advertisements/new');
  }

  pageChanged(event: any): void {
    this.pagination.currentPage = event.page;
    this.getAds();
  }

  getAds() {
    this.advService.getAdvertisements(this.pagination.currentPage, this.pagination.itemsPerPage, this.advParams)
    .subscribe((res: PaginationResult<Advertisement[]>) => {
      this.advertisement = res.result;
      this.pagination = res.pagination;
    }, error => {
      console.log(error);
    });
  }

  getCategories() {
    this.advService.getCategories().subscribe(data => {
      this.category = data;
    }, error => {
      console.log(error);
    });
  }

  resetFilter() {
    this.advParams.CategoryId = '';
    this.getAds();
  }

}
