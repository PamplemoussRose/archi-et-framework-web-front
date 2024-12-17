import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from "@angular/forms";
import { NgForOf } from "@angular/common";
import { ReservationModel } from '../../../models/reservation.model';
import { ReservationService } from '../../../services/reservation.service';
import { UtilisateurModel } from '../../../models/utilisateur.model';
import { UtilisateurService } from '../../../services/utilisateur.service';
import { TerrainModel } from '../../../models/terrain.model';
import { TerrainService } from '../../../services/terrain.service';

/**
 * Composant Angular pour ajouter une nouvelle réservation.
 * Ce composant permet de créer une réservation en sélectionnant un utilisateur,
 * un terrain et en spécifiant une quantité.
 */
@Component({
  selector: 'app-add-reserv',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf
  ],
  templateUrl: './add-reserv.component.html',
  styleUrls: ['./add-reserv.component.css']
})
export class AddReservComponent {

  /**
   * Modèle de réservation utilisé dans le formulaire.
   */
  reserv: ReservationModel = {
    idUtilisateur: 1,
    idTerrain: 1,
    reservation: 0
  };

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
   * Récupère les utilisateurs et les terrains depuis le backend.
   */
  ngOnInit(): void {
    this.userService.get().subscribe((data) => {
      this.users = data;
    });

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
   * Sauvegarde une nouvelle réservation.
   * Affiche une alerte si la quantité est invalide.
   * Redirige vers la page des réservations après sauvegarde.
   */
  saveReserv(): void {
    if (this.reserv.reservation == null || this.reserv.reservation <= 0) {
      alert('Veuillez renseigner une quantité valide');
    } else {
      this.resService.create(this.reserv).subscribe(() => {
        alert('Réservation ajoutée avec succès');
        this.goBack();
      });
    }
  }
}
