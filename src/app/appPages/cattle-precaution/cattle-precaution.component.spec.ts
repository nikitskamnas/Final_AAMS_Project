import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CattlePrecautionComponent } from './cattle-precaution.component';

describe('CattlePrecautionComponent', () => {
  let component: CattlePrecautionComponent;
  let fixture: ComponentFixture<CattlePrecautionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CattlePrecautionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CattlePrecautionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
