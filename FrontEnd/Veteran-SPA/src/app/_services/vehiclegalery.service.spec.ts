/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { VehiclegaleryService } from './vehiclegalery.service';

describe('Service: Vehiclegalery', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VehiclegaleryService]
    });
  });

  it('should ...', inject([VehiclegaleryService], (service: VehiclegaleryService) => {
    expect(service).toBeTruthy();
  }));
});
