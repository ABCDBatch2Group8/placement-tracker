import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmnStudentsComponent } from './admn-students.component';

describe('AdmnStudentsComponent', () => {
  let component: AdmnStudentsComponent;
  let fixture: ComponentFixture<AdmnStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmnStudentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmnStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
