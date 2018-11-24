import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ECommercePage } from './ecommerce.page';

describe('ECommercePage', () => {
  let component: ECommercePage;
  let fixture: ComponentFixture<ECommercePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ECommercePage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ECommercePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
