import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubAdmineComponent } from './sub-admine.component';

describe('SubAdmineComponent', () => {
  let component: SubAdmineComponent;
  let fixture: ComponentFixture<SubAdmineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubAdmineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubAdmineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
