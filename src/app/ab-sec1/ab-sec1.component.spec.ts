import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbSec1Component } from './ab-sec1.component';

describe('AbSec1Component', () => {
  let component: AbSec1Component;
  let fixture: ComponentFixture<AbSec1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AbSec1Component]
    });
    fixture = TestBed.createComponent(AbSec1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
