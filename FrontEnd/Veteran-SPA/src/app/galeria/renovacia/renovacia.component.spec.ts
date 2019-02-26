/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RenovaciaComponent } from './renovacia.component';

describe('RenovaciaComponent', () => {
  let component: RenovaciaComponent;
  let fixture: ComponentFixture<RenovaciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenovaciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenovaciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
