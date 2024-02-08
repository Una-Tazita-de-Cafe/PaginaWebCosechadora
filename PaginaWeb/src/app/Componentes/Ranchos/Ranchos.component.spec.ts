/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RanchosComponent } from './Ranchos.component';

describe('RanchosComponent', () => {
  let component: RanchosComponent;
  let fixture: ComponentFixture<RanchosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RanchosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RanchosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
