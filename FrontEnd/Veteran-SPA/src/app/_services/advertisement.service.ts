import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Advertisement } from '../_models/advertisement';

@Injectable({
  providedIn: 'root'
})
export class AdvertisementService {
baseUrl = environment.apiUrl;

constructor(private http: HttpClient) { }

getAdvertisements(): Observable<Advertisement[]> {
  return this.http.get<Advertisement[]>(this.baseUrl + 'advertisement');
}

getAdvertisement(id): Observable<Advertisement> {
  return this.http.get<Advertisement>(this.baseUrl + 'advertisement/' + id);
}

}
