import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BandReportComponent } from './band-report.component';

describe('BandReportComponent', () => {
  let component: BandReportComponent;
  let fixture: ComponentFixture<BandReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BandReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BandReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
