import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmnDashboardComponent } from './admn-dashboard.component';

describe('AdmnDashboardComponent', () => {
  let component: AdmnDashboardComponent;
  let fixture: ComponentFixture<AdmnDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmnDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmnDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
