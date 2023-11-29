import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BynFormatComponent } from './byn-format.component';

describe('BynFormatComponent', () => {
  let component: BynFormatComponent;
  let fixture: ComponentFixture<BynFormatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BynFormatComponent]
    });
    fixture = TestBed.createComponent(BynFormatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
