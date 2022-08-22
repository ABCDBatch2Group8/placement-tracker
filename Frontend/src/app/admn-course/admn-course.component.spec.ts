import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmnCourseComponent } from './admn-course.component';

describe('AdmnCourseComponent', () => {
  let component: AdmnCourseComponent;
  let fixture: ComponentFixture<AdmnCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmnCourseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmnCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
