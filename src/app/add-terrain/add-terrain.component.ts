import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TerrainModel} from '../../models/terrain.model';
import {ActivatedRoute, Router} from '@angular/router';
import {TerrainService} from '../../services/terrain.service';

@Component({
  selector: 'app-add-terrain',
  standalone: true,
    imports: [
        FormsModule,
        ReactiveFormsModule
    ],
  templateUrl: './add-terrain.component.html',
  styleUrl: './add-terrain.component.css'
})
export class AddTerrainComponent {

  terrain!: TerrainModel;

  constructor(
    private route: ActivatedRoute,
    private terrainService: TerrainService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {

  }

  goBack(): void {
    this.router.navigate(['']);
  }

  saveTerrain(): void {
    this.terrainService.create(this.terrain).subscribe(() => {
      console.log(this.terrain.id);
      console.log(this.terrain.nom);
      console.log(this.terrain.description);
      console.log(this.terrain.quantite);
      console.log(this.terrain.point_geo);
      alert('Terrain ajouté');
    });
    this.goBack();
  }

}
