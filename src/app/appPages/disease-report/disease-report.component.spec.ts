import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiseaseReportComponent } from './disease-report.component';

describe('DiseaseReportComponent', () => {
  let component: DiseaseReportComponent;
  let fixture: ComponentFixture<DiseaseReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiseaseReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiseaseReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
