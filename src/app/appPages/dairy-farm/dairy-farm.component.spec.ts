import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DairyFarmComponent } from './dairy-farm.component';

describe('DairyFarmComponent', () => {
  let component: DairyFarmComponent;
  let fixture: ComponentFixture<DairyFarmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DairyFarmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DairyFarmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
