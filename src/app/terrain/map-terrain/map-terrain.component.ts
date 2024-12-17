import { AfterViewInit, Component } from '@angular/core';
import * as L from 'leaflet';
import { Router } from '@angular/router';
import { TerrainService } from '../../../services/terrain.service';
import { TerrainModel } from '../../../models/terrain.model';

// Configuration de l'icône par défaut pour Leaflet.
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
  shadowSize: [41, 41],
});
L.Marker.prototype.options.icon = iconDefault;

/**
 * Composant pour afficher une carte interactive avec les terrains.
 */
@Component({
  selector: 'app-map-terrain',
  standalone: true,
  imports: [],
  templateUrl: './map-terrain.component.html',
  styleUrls: ['./map-terrain.component.css'],
})
export class MapTerrainComponent implements AfterViewInit {

  /**
   * Liste des terrains récupérés depuis le service.
   */
  private terrains: TerrainModel[] = [];

  /**
   * Instance de la carte Leaflet.
   */
  private map!: L.Map;

  /**
   * Constructeur pour injecter les dépendances nécessaires.
   *
   * @param router Service Angular Router pour naviguer entre les pages.
   * @param terrainService Service pour gérer les données des terrains.
   */
  constructor(
    private readonly router: Router,
    private readonly terrainService: TerrainService
  ) {}

  /**
   * Initialise la carte Leaflet.
   */
  private initMap(): void {
    this.map = L.map('map', {
      center: [47.383333, 0.683333], // Centre initial de la carte (Ville de Tours).
      zoom: 11,
    });

    // Ajout des tuiles OpenStreetMap à la carte.
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    });

    tiles.addTo(this.map);
  }

  /**
   * Méthode appelée après le rendu du composant pour initialiser la carte et charger les terrains.
   */
  ngAfterViewInit(): void {
    this.initMap();
    this.fetchTerrains();
  }

  /**
   * Navigue vers la page d'accueil.
   */
  goHome(): void {
    this.router.navigate(['']);
  }

  /**
   * Récupère les terrains depuis le service et ajoute les marqueurs à la carte.
   */
  private fetchTerrains(): void {
    this.terrainService.get().subscribe((terrains: TerrainModel[]) => {
      this.terrains = terrains;
      this.terrains.forEach((terrain) => {
        this.addMarker(terrain);
      });
    });
  }

  /**
   * Ajoute un marqueur sur la carte pour un terrain donné.
   *
   * @param terrain TerrainModel contenant les informations du terrain.
   */
  private addMarker(terrain: TerrainModel): void {
    if (this.map) {
      // Transformation des coordonnées de texte en nombres.
      const [lat, lng] = terrain.point_geo.split(',').map(Number);

      // Vérifie que les coordonnées sont valides.
      if (!isNaN(lat) && !isNaN(lng)) {
        const marker = L.marker([lat, lng], { icon: iconDefault }).addTo(this.map);

        // Ajoute une popup au marqueur avec les informations du terrain.
        marker.bindPopup(
          '<div>'+terrain.id+' - '+terrain.nom+'' +
          '<br><br>'+
          terrain.point_geo+'</div>'
        );
      } else {
        console.error(`Coordonnées invalides pour le terrain: ${terrain.nom}`);
      }
    }
  }
}
