import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Advertisement } from '../_models/advertisement';
import { PaginationResult } from '../_models/pagination';
import { map } from 'rxjs/operators';
import { Category } from '../_models/category';

@Injectable({
  providedIn: 'root'
})
export class AdvertisementService {
baseUrl = environment.apiUrl;

constructor(private http: HttpClient) { }

getAdvertisements(page?, itemsPerPage?, advParams?): Observable<PaginationResult<Advertisement[]>> {
  const paginatedResult: PaginationResult<Advertisement[]> = new PaginationResult<Advertisement[]> ();

  let params = new HttpParams();

  if (page != null && itemsPerPage != null) {
    params = params.append('pageNumber', page);
    params = params.append('pageSize', itemsPerPage);
  }
  if (advParams != null) {
    params = params.append('categoryId', advParams.CategoryId);
  }
  return this.http.get<Advertisement[]>(this.baseUrl + 'advertisement', { observe: 'response', params})
  .pipe(
    map(response => {
      paginatedResult.result = response.body;
      if (response.headers.get('Pagination') != null) {
        paginatedResult.pagination = JSON.parse(response.headers.get('Pagination'));
      }
      return paginatedResult;
    })
  );
}

getAdvertisement(id): Observable<Advertisement> {
  return this.http.get<Advertisement>(this.baseUrl + 'advertisement/' + id);
}

createNew(model: any) {
  return this.http.post(this.baseUrl + 'advertisement', model);
}

getCategories(): Observable<Category> {
  return this.http.get<Category>(this.baseUrl + 'advertisement/categories');
}

}
