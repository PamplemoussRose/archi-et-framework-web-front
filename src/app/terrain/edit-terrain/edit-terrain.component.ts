import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TerrainModel } from '../../../models/terrain.model';
import { TerrainService } from '../../../services/terrain.service';

/**
 * Composant Angular pour modifier ou supprimer un terrain existant.
 */
@Component({
  selector: 'app-edit-terrain',
  standalone: true,
  imports: [
    FormsModule,
  ],
  templateUrl: './edit-terrain.component.html',
  styleUrls: ['./edit-terrain.component.css']
})
export class EditTerrainComponent implements OnInit {

  /**
   * Modèle de données représentant le terrain à éditer.
   */
  terrain!: TerrainModel;

  /**
   * Constructeur pour injecter les dépendances nécessaires.
   *
   * @param route Service Angular ActivatedRoute pour accéder aux paramètres de route.
   * @param terrainService Service pour gérer les opérations CRUD sur les terrains.
   * @param router Service Angular Router pour naviguer entre les pages.
   */
  constructor(
    private readonly route: ActivatedRoute,
    private readonly terrainService: TerrainService,
    private readonly router: Router
  ) {}

  /**
   * Initialise le composant et charge les données du terrain à partir de son ID.
   */
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.terrainService.getById(parseInt(id)).subscribe((data) => {
        this.terrain = data;
      });
    }
  }

  /**
   * Navigue vers la liste des terrains.
   */
  goBack(): void {
    this.router.navigate(['terrain']);
  }

  /**
   * Sauvegarde les modifications apportées au terrain après validation des données.
   */
  saveChanges(): void {
    // Vérification des champs obligatoires.
    if (this.terrain.nom.trim() !== '' && this.terrain.point_geo.trim() !== '') {
      // Vérification de la validité de la quantité.
      if (this.terrain.quantite == null || this.terrain.quantite <= 0) {
        alert('Veuillez renseigner une quantité valide'); // Avertissement pour une quantité invalide.
      } else {
        // Appel au service pour mettre à jour les données du terrain.
        this.terrainService.update(this.terrain).subscribe(() => {
          alert('Modifications sauvegardées'); // Confirmation de la sauvegarde.
          this.goBack(); // Retour à la liste des terrains.
        });
      }
    } else {
      alert('Veuillez remplir tous les champs obligatoires'); // Avertissement si des champs sont vides.
    }
  }

  /**
   * Supprime le terrain actuel.
   */
  deleteTerrain(): void {
    this.terrainService.delete(this.terrain.id).subscribe(() => {
      alert('Terrain supprimé'); // Confirmation de la suppression.
      this.goBack(); // Retour à la liste des terrains.
    });
  }
}
