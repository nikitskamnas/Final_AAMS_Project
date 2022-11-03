import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CattleInfoComponent } from './cattle-info.component';

describe('CattleInfoComponent', () => {
  let component: CattleInfoComponent;
  let fixture: ComponentFixture<CattleInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CattleInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CattleInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
