import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BynWrapperContainerComponent } from './byn-wrapper-container.component';

describe('BynWrapperContainerComponent', () => {
  let component: BynWrapperContainerComponent;
  let fixture: ComponentFixture<BynWrapperContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BynWrapperContainerComponent]
    });
    fixture = TestBed.createComponent(BynWrapperContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
