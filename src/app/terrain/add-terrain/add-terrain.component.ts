import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {Router} from '@angular/router';
import {TerrainModel} from '../../../models/terrain.model';
import {TerrainService} from '../../../services/terrain.service';

@Component({
  selector: 'app-add-terrain',
  standalone: true,
  imports: [
      FormsModule,
  ],
  templateUrl: './add-terrain.component.html',
  styleUrl: './add-terrain.component.css'
})
export class AddTerrainComponent {

  terrain: TerrainModel = {
    id: 0,
    nom: '',
    quantite: 0,
    description: '',
    point_geo: ''
  };

  constructor(
    private terrainService: TerrainService,
    private readonly router: Router
  ) {}

  goBack(): void {
    this.router.navigate(['terrain']);
  }

  saveTerrain(): void {
    if (!(this.terrain.nom == "" || this.terrain.point_geo == "")) {
      if (this.terrain.quantite == null || this.terrain.quantite <= 0) {
        alert('Veuillez renseigner une quantité valide');
      } else {
        this.terrainService.create(this.terrain).subscribe(() => {
          alert('Terrain ajouté');
          this.goBack();
        });
      }
    } else {
      alert('Veuillez remplir tous les champs');
    }
  }

}
