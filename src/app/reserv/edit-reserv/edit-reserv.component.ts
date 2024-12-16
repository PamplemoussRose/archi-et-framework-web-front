import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormsModule} from "@angular/forms";
import {NgForOf} from '@angular/common';
import {ReservationModel} from '../../../models/reservation.model';
import {ReservationService} from '../../../services/reservation.service';
import {UtilisateurModel} from '../../../models/utilisateur.model';
import {UtilisateurService} from '../../../services/utilisateur.service';
import {TerrainModel} from '../../../models/terrain.model';
import {TerrainService} from '../../../services/terrain.service';

@Component({
  selector: 'app-edit-reserv',
  standalone: true,
    imports: [
      FormsModule,
      NgForOf
    ],
  templateUrl: './edit-reserv.component.html',
  styleUrl: './edit-reserv.component.css'
})
export class EditReservComponent {

  reserv!: ReservationModel;
  users: UtilisateurModel[] = [];
  terrains: TerrainModel[] = [];

  constructor(
    private route: ActivatedRoute,
    private readonly resService: ReservationService,
    private readonly userService: UtilisateurService,
    private readonly terrainService: TerrainService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    const idUser = this.route.snapshot.paramMap.get('user');
    const idTerrain = this.route.snapshot.paramMap.get('terrain');
    if (idUser && idTerrain) {
      this.resService.getById(parseInt(idUser), parseInt(idTerrain)).subscribe((data) => {
        this.reserv = data;
      });
    }

    this.userService.get().subscribe((data) => {
      this.users = data;
    });

    this.terrainService.get().subscribe((data) => {
      this.terrains = data;
    });
  }

  goBack(): void {
    this.router.navigate(['reserv']);
  }

  saveChanges(): void {
    if (this.reserv.reservation == null || this.reserv.reservation <= 0) {
      alert('Veuillez renseigner une quantité valide');
    } else {
      this.resService.update(this.reserv).subscribe(() => {
        alert('Modifications sauvegardées');
        this.goBack();
      });
    }
  }

  deleteReserv(): void {
    this.resService.delete(this.reserv.idUtilisateur, this.reserv.idTerrain).subscribe(() => {
      alert('Terrain supprimé');
      this.goBack();
    });
  }

}
