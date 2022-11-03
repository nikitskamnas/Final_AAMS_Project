import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RuminationReportComponent } from './rumination-report.component';

describe('RuminationReportComponent', () => {
  let component: RuminationReportComponent;
  let fixture: ComponentFixture<RuminationReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RuminationReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RuminationReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
