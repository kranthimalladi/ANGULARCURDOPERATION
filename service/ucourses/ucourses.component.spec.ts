import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UcoursesComponent } from './ucourses.component';

describe('UcoursesComponent', () => {
  let component: UcoursesComponent;
  let fixture: ComponentFixture<UcoursesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UcoursesComponent]
    });
    fixture = TestBed.createComponent(UcoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
