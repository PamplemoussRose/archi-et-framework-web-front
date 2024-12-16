import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";
import {ReservationModel} from '../../../models/reservation.model';
import {ReservationService} from '../../../services/reservation.service';
import {UtilisateurModel} from '../../../models/utilisateur.model';
import {UtilisateurService} from '../../../services/utilisateur.service';
import {TerrainModel} from '../../../models/terrain.model';
import {TerrainService} from '../../../services/terrain.service';

@Component({
  selector: 'app-add-reserv',
  standalone: true,
    imports: [
      FormsModule,
      NgForOf
    ],
  templateUrl: './add-reserv.component.html',
  styleUrl: './add-reserv.component.css'
})
export class AddReservComponent {

  reserv: ReservationModel = {
    idUtilisateur: 1,
    idTerrain: 1,
    reservation: 0
  };
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

  saveReserv(): void {
    if (this.reserv.reservation == null || this.reserv.reservation <= 0) {
      alert('Veuillez renseigner une quantité valide');
    } else {
      this.resService.create(this.reserv).subscribe(() => {
        alert('Modifications sauvegardées');
        this.goBack();
      });
    }
  }

}
