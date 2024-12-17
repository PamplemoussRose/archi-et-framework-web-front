import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from "@angular/forms";
import { NgForOf } from '@angular/common';
import { ReservationModel } from '../../../models/reservation.model';
import { ReservationService } from '../../../services/reservation.service';
import { UtilisateurModel } from '../../../models/utilisateur.model';
import { UtilisateurService } from '../../../services/utilisateur.service';
import { TerrainModel } from '../../../models/terrain.model';
import { TerrainService } from '../../../services/terrain.service';

/**
 * Composant Angular pour modifier une réservation existante.
 * Ce composant permet de charger une réservation par identifiants et de la modifier ou la supprimer.
 */
@Component({
  selector: 'app-edit-reserv',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf
  ],
  templateUrl: './edit-reserv.component.html',
  styleUrls: ['./edit-reserv.component.css']
})
export class EditReservComponent {

  /**
   * Modèle de réservation à modifier.
   */
  reserv!: ReservationModel;

  /**
   * Liste des utilisateurs récupérés depuis le backend.
   */
  users: UtilisateurModel[] = [];

  /**
   * Liste des terrains récupérés depuis le backend.
   */
  terrains: TerrainModel[] = [];

  /**
   * Constructeur pour injecter les dépendances nécessaires.
   *
   * @param route ActivatedRoute pour gérer les paramètres de la route.
   * @param resService Service de réservation pour effectuer des opérations CRUD.
   * @param userService Service utilisateur pour récupérer les utilisateurs.
   * @param terrainService Service terrain pour récupérer les terrains.
   * @param router Router pour gérer la navigation entre les pages.
   */
  constructor(
    private route: ActivatedRoute,
    private readonly resService: ReservationService,
    private readonly userService: UtilisateurService,
    private readonly terrainService: TerrainService,
    private readonly router: Router
  ) {}

  /**
   * Méthode appelée après l'initialisation du composant.
   * Récupère la réservation, les utilisateurs et les terrains depuis le backend.
   */
  ngOnInit(): void {
    const idUser = this.route.snapshot.paramMap.get('user'); // Récupération de l'ID utilisateur depuis l'URL.
    const idTerrain = this.route.snapshot.paramMap.get('terrain'); // Récupération de l'ID terrain depuis l'URL.

    // Charger les données de la réservation.
    if (idUser && idTerrain) {
      this.resService.getById(parseInt(idUser), parseInt(idTerrain)).subscribe((data) => {
        this.reserv = data;
      });
    }

    // Charger la liste des utilisateurs.
    this.userService.get().subscribe((data) => {
      this.users = data;
    });

    // Charger la liste des terrains.
    this.terrainService.get().subscribe((data) => {
      this.terrains = data;
    });
  }

  /**
   * Redirige l'utilisateur vers la page des réservations.
   */
  goBack(): void {
    this.router.navigate(['reserv']);
  }

  /**
   * Sauvegarde les modifications apportées à la réservation.
   * Affiche une alerte si la quantité est invalide.
   * Redirige vers la page des réservations après sauvegarde.
   */
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

  /**
   * Supprime la réservation actuelle.
   * Redirige vers la page des réservations après suppression.
   */
  deleteReserv(): void {
    this.resService.delete(this.reserv.idUtilisateur, this.reserv.idTerrain).subscribe(() => {
      alert('Réservation supprimée');
      this.goBack();
    });
  }
}
