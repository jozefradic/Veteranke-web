import { Album } from './../_models/album';
import { VehiclegaleryService } from './../_services/vehiclegalery.service';
import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { AlertifyService } from '../_services/alertify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class VehiclegaleryResolver implements Resolve<Album[]> {
    constructor(private albumservice: VehiclegaleryService, private router: Router,
        private alertify: AlertifyService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<Album[]> {
        return this.albumservice.getVehiclesGalery().pipe(
            catchError(error => {
                this.alertify.error('Problem retrieving data');
                this.router.navigate(['/home']);
                return of(null);
            })
        );
    }
}
