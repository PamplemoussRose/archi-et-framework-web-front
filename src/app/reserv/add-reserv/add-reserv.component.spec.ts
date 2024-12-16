import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddReservComponent } from './add-reserv.component';

describe('AddReservComponent', () => {
  let component: AddReservComponent;
  let fixture: ComponentFixture<AddReservComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddReservComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddReservComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
