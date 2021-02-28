import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MilkboxDetailsComponent } from './milkbox-details.component';

describe('TutorialDetailsComponent', () => {
  let component: MilkboxDetailsComponent;
  let fixture: ComponentFixture<MilkboxDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MilkboxDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MilkboxDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
