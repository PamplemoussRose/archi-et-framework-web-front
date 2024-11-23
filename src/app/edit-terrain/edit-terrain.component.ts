import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TerrainModel} from '../../models/terrain.model';
import {TerrainService} from '../../services/terrain.service';
import {FormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-edit-terrain',
  standalone: true,
  imports: [
    FormsModule,
    NgIf
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
    this.router.navigate(['']);
  }

  saveChanges(): void {

    this.terrainService.update(this.terrain).subscribe(() => {
      alert('Modifications sauvegardées avec succès!');
    });
    this.goBack();
  }
}
