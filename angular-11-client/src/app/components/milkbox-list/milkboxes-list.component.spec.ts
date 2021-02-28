import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MilkboxesListComponent } from './milkboxes-list.component';

describe('TutorialsListComponent', () => {
  let component: MilkboxesListComponent;
  let fixture: ComponentFixture<MilkboxesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MilkboxesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MilkboxesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
