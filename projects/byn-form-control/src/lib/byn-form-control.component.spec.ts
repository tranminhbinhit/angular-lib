import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BynFormControlComponent } from './byn-form-control.component';

describe('BynFormControlComponent', () => {
  let component: BynFormControlComponent;
  let fixture: ComponentFixture<BynFormControlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BynFormControlComponent]
    });
    fixture = TestBed.createComponent(BynFormControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
