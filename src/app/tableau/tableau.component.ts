import { Component, OnInit  } from '@angular/core';
import {NgForOf} from '@angular/common';
import { Router } from '@angular/router';
import { TerrainService} from '../../services/terrain.service';
import { TerrainModel} from '../../models/terrain.model';

@Component({
  selector: 'app-tableau',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './tableau.component.html',
  styleUrl: './tableau.component.css'
})
export class TableauComponent implements OnInit {
  terrains: TerrainModel[] = []; // Stockage des terrains récupérés

  // Injection du service TerrainService
  constructor(private terrainService: TerrainService, private router: Router) {}

  /**
   * Méthode appelée à l'initialisation du composant.
   * Elle récupère la liste des terrains à afficher dans le tableau.
   */
  ngOnInit(): void {
    this.terrainService.get().subscribe({
      next: (data) => {
        this.terrains = data; // Mise à jour des données locales
      },
      error: (err) => {
        console.error('Erreur lors de la récupération des terrains:', err);
      }
    });
  }

  goToForm(nom: string, quant: number, desc:string, ptgeo:string): void {
    if (desc == null){
      desc = ""
    }
    this.router.navigate(['/form', nom, quant, desc, ptgeo]);
  }

}
