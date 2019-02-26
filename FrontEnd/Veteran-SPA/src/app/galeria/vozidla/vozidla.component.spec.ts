/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VozidlaComponent } from './vozidla.component';

describe('VozidlaComponent', () => {
  let component: VozidlaComponent;
  let fixture: ComponentFixture<VozidlaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VozidlaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VozidlaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
