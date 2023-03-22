import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainAdmineComponent } from './main-admine.component';

describe('MainAdmineComponent', () => {
  let component: MainAdmineComponent;
  let fixture: ComponentFixture<MainAdmineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainAdmineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainAdmineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
