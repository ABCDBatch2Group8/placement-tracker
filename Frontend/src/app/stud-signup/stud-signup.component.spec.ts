import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudSignupComponent } from './stud-signup.component';

describe('StudSignupComponent', () => {
  let component: StudSignupComponent;
  let fixture: ComponentFixture<StudSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudSignupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
