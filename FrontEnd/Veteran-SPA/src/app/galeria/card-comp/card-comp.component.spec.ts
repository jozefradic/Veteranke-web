/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CardCompComponent } from './card-comp.component';

describe('CardCompComponent', () => {
  let component: CardCompComponent;
  let fixture: ComponentFixture<CardCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
