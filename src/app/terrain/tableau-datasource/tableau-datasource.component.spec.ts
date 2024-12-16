import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableauDatasourceComponent } from './tableau-datasource.component';

describe('TableauDatasourceComponent', () => {
  let component: TableauDatasourceComponent;
  let fixture: ComponentFixture<TableauDatasourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableauDatasourceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableauDatasourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
