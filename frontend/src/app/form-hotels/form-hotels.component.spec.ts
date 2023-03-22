import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormHotelsComponent } from './form-hotels.component';

describe('FormHotelsComponent', () => {
  let component: FormHotelsComponent;
  let fixture: ComponentFixture<FormHotelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormHotelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormHotelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
