import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableauReservComponent } from './tableau-reserv.component';

describe('TableauReservComponent', () => {
  let component: TableauReservComponent;
  let fixture: ComponentFixture<TableauReservComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableauReservComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableauReservComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
