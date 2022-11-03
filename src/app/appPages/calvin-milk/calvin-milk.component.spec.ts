import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalvinMilkComponent } from './calvin-milk.component';

describe('CalvinMilkComponent', () => {
  let component: CalvinMilkComponent;
  let fixture: ComponentFixture<CalvinMilkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalvinMilkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalvinMilkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
