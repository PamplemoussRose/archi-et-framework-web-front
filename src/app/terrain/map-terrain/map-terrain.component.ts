import {AfterViewInit, Component} from '@angular/core';
import * as L from 'leaflet';
import {Router} from '@angular/router';
import {TerrainService} from '../../../services/terrain.service';

const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';
const iconDefault = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});
L.Marker.prototype.options.icon = iconDefault;

@Component({
  selector: 'app-map-terrain',
  standalone: true,
  imports: [],
  templateUrl: './map-terrain.component.html',
  styleUrl: './map-terrain.component.css'
})
export class MapTerrainComponent implements AfterViewInit{

  private terrains: any[] = [];
  private map!: L.Map;

  constructor(private readonly router: Router, private readonly terrainService: TerrainService) {}

  private initMap(): void {
    this.map = L.map('map', {
      center: [ 47.383333, 0.683333 ],
      zoom: 11
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
  }

  ngAfterViewInit(): void {
    this.initMap();
    this.fetchTerrains();
  }

  goHome(): void {
    this.router.navigate(['']);
  }

  fetchTerrains(): void {
    this.terrainService.get().subscribe((terrains) => {
      this.terrains = terrains;
      this.terrains.forEach((terrain) => {
        this.addMarker(terrain);
      });
    });
  }

  private addMarker(terrain:any): void {
    if (this.map) {
      const [lat, lng] = terrain.point_geo.split(',').map(Number);
      const marker = L.marker([lat, lng], { icon: iconDefault }).addTo(this.map);
      marker.bindPopup(
        '<div>'+terrain.id+' - '+terrain.nom+'<br><br>'+terrain.point_geo+'</div>'
      );
    }
  }


}
