import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmnSubadmnComponent } from './admn-subadmn.component';

describe('AdmnSubadmnComponent', () => {
  let component: AdmnSubadmnComponent;
  let fixture: ComponentFixture<AdmnSubadmnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmnSubadmnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmnSubadmnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
