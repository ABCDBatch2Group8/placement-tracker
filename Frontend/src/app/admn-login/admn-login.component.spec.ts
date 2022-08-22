import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmnLoginComponent } from './admn-login.component';

describe('AdmnLoginComponent', () => {
  let component: AdmnLoginComponent;
  let fixture: ComponentFixture<AdmnLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmnLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmnLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
