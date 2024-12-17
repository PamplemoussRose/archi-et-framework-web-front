import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { Router } from '@angular/router';
import { TerrainModel } from '../../../models/terrain.model';
import { TerrainService } from '../../../services/terrain.service';

/**
 * Composant Angular pour ajouter un nouveau terrain.
 * Permet de saisir les détails d'un terrain et de l'enregistrer dans le système.
 */
@Component({
  selector: 'app-add-terrain',
  standalone: true,
  imports: [
    FormsModule,
  ],
  templateUrl: './add-terrain.component.html',
  styleUrls: ['./add-terrain.component.css']
})
export class AddTerrainComponent {

  /**
   * Modèle de données pour le formulaire d'ajout de terrain.
   */
  terrain: TerrainModel = {
    id: 0,
    nom: '',
    quantite: 0,
    description: '',
    point_geo: ''
  };

  /**
   * Constructeur pour injecter les services nécessaires.
   *
   * @param terrainService Service pour gérer les opérations CRUD sur les terrains.
   * @param router Service Angular Router pour naviguer entre les pages.
   */
  constructor(
    private readonly terrainService: TerrainService,
    private readonly router: Router
  ) {}

  /**
   * Navigue vers la liste des terrains.
   */
  goBack(): void {
    this.router.navigate(['terrain']);
  }

  /**
   * Enregistre un nouveau terrain dans le système après validation des données.
   */
  saveTerrain(): void {
    // Vérification des champs obligatoires.
    if (this.terrain.nom.trim() !== '' && this.terrain.point_geo.trim() !== '') {
      // Vérification de la validité de la quantité.
      if (this.terrain.quantite == null || this.terrain.quantite <= 0) {
        alert('Veuillez renseigner une quantité valide'); // Avertissement pour une quantité invalide.
      } else {
        // Appel au service pour enregistrer le terrain.
        this.terrainService.create(this.terrain).subscribe(() => {
          alert('Terrain ajouté'); // Confirmation de l'ajout.
          this.goBack(); // Retour à la liste des terrains.
        });
      }
    } else {
      alert('Veuillez remplir tous les champs obligatoires'); // Avertissement si des champs sont vides.
    }
  }
}
