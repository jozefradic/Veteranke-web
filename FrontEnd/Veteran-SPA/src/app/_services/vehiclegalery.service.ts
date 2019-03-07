import { Album } from './../_models/album';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class VehiclegaleryService {
baseUrl = environment.apiUrl;

constructor(private http: HttpClient) { }

getVehiclesGalery(): Observable<Album[]> {
  return this.http.get<Album[]>(this.baseUrl + 'galery');
}

}
