import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {TerrainModel} from '../../../models/terrain.model';
import {TerrainService} from '../../../services/terrain.service';

@Component({
  selector: 'app-edit-terrain',
  standalone: true,
  imports: [
    FormsModule,
  ],
  templateUrl: './edit-terrain.component.html',
  styleUrl: './edit-terrain.component.css'
})
export class EditTerrainComponent implements OnInit {
  terrain!: TerrainModel;

  constructor(
    private route: ActivatedRoute,
    private terrainService: TerrainService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.terrainService.getById(parseInt(id)).subscribe((data) => {
        this.terrain = data;
      });
    }
  }

  goBack(): void {
    this.router.navigate(['terrain']);
  }

  saveChanges(): void {
    if (!(this.terrain.nom == "" || this.terrain.point_geo == "")) {
      if (this.terrain.quantite == null || this.terrain.quantite <= 0) {
        alert('Veuillez renseigner une quantité valide');
      } else {
        this.terrainService.update(this.terrain).subscribe(() => {
          alert('Modifications sauvegardées');
          this.goBack();
        });
      }
    } else {
      alert('Veuillez remplir tous les champs');
    }
  }

  deleteTerrain(): void {
    this.terrainService.delete(this.terrain.id).subscribe(() => {
      alert('Terrain supprimé');
      this.goBack();
    });
  }
}
