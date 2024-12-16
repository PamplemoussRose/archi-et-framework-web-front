import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditReservComponent } from './edit-reserv.component';

describe('EditReservComponent', () => {
  let component: EditReservComponent;
  let fixture: ComponentFixture<EditReservComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditReservComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditReservComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
