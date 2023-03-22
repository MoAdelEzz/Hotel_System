import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSubadminComponent } from './form-subadmin.component';

describe('FormSubadminComponent', () => {
  let component: FormSubadminComponent;
  let fixture: ComponentFixture<FormSubadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormSubadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSubadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
