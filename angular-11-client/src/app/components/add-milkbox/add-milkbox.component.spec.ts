import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMilkBoxComponent } from './add-milkbox.component';

describe('AddTutorialComponent', () => {
  let component: AddMilkBoxComponent;
  let fixture: ComponentFixture<AddMilkBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMilkBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMilkBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
