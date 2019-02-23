import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { AlertifyService } from '../_services/alertify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Advertisement } from '../_models/advertisement';
import { AdvertisementService } from '../_services/advertisement.service';

@Injectable()
export class AdvertisementResolver implements Resolve<Advertisement[]> {
    pageNumber = 1;
    pageSize = 2;

    constructor(private advService: AdvertisementService, private router: Router,
        private alertify: AlertifyService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<Advertisement[]> {
        return this.advService.getAdvertisements(this.pageNumber, this.pageSize).pipe(
            catchError(error => {
                this.alertify.error('Problem retrieving data');
                this.router.navigate(['/home']);
                return of(null);
            })
        );
    }
}
