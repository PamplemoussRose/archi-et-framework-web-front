import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapTerrainComponent } from './map-terrain.component';

describe('MapTerrainComponent', () => {
  let component: MapTerrainComponent;
  let fixture: ComponentFixture<MapTerrainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapTerrainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapTerrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
