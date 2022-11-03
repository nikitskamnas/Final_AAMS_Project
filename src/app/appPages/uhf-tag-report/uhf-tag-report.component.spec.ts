import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UhfTagReportComponent } from './uhf-tag-report.component';

describe('UhfTagReportComponent', () => {
  let component: UhfTagReportComponent;
  let fixture: ComponentFixture<UhfTagReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UhfTagReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UhfTagReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
