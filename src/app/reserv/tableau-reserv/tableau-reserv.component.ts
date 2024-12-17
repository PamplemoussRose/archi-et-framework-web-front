import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReservationModel } from '../../../models/reservation.model';
import { ReservationService } from '../../../services/reservation.service';
import { UtilisateurModel } from '../../../models/utilisateur.model';
import { TerrainModel } from '../../../models/terrain.model';
import { UtilisateurService } from '../../../services/utilisateur.service';
import { TerrainService } from '../../../services/terrain.service';

/**
 * Composant Angular pour afficher et gérer les réservations sous forme de tableau avec pagination.
 */
@Component({
  selector: 'app-tableau-reserv',
  standalone: true,
  imports: [
    MatTableModule,
    MatPaginatorModule,
    FormsModule,
    CommonModule
  ],
  templateUrl: './tableau-reserv.component.html',
  styleUrls: ['./tableau-reserv.component.css']
})
export class TableauReservComponent {

  /**
   * Colonnes affichées dans le tableau des réservations.
   */
  displayedColumns: string[] = ['idUtilisateur', 'idTerrain', 'Reservation'];

  /**
   * Source des données pour le tableau.
   */
  dataSource!: MatTableDataSource<ReservationModel>;

  /**
   * Liste des utilisateurs récupérés depuis le backend.
   */
  users!: UtilisateurModel[];

  /**
   * Liste des terrains récupérés depuis le backend.
   */
  terrains!: TerrainModel[];

  /**
   * Référence à l'objet de pagination Angular Material.
   */
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  /**
   * Constructeur pour injecter les services nécessaires.
   *
   * @param resService Service pour gérer les opérations CRUD sur les réservations.
   * @param userService Service pour récupérer les utilisateurs.
   * @param terrainService Service pour récupérer les terrains.
   * @param router Service Angular Router pour la navigation entre les pages.
   */
  constructor(
    private readonly resService: ReservationService,
    private readonly userService: UtilisateurService,
    private readonly terrainService: TerrainService,
    private readonly router: Router
  ) {}

  /**
   * Initialisation du composant.
   * Récupère les réservations, utilisateurs et terrains depuis le backend.
   */
  ngOnInit(): void {
    // Chargement des réservations.
    this.resService.get().subscribe(value => {
      this.dataSource = new MatTableDataSource<ReservationModel>(value);
      this.dataSource.paginator = this.paginator; // Attache la pagination au tableau.
    });

    // Chargement des utilisateurs.
    this.userService.get().subscribe(value => {
      this.users = value;
    });

    // Chargement des terrains.
    this.terrainService.get().subscribe(value => {
      this.terrains = value;
    });
  }

  /**
   * Récupère le nom d'un utilisateur à partir de son ID.
   *
   * @param id ID de l'utilisateur.
   * @returns Nom d'utilisateur correspondant ou une chaîne vide.
   */
  getUser(id: number): string {
    const user = this.users.find(u => u.id === id);
    return user ? user.username : 'Utilisateur inconnu';
  }

  /**
   * Récupère le nom d'un terrain à partir de son ID.
   *
   * @param id ID du terrain.
   * @returns Nom du terrain correspondant ou une chaîne vide.
   */
  getTerrain(id: number): string {
    const terrain = this.terrains.find(t => t.id === id);
    return terrain ? terrain.nom : 'Terrain inconnu';
  }

  /**
   * Gère le clic sur une ligne du tableau.
   * Redirige vers la page d'édition de la réservation sélectionnée.
   *
   * @param row Ligne du tableau représentant une réservation.
   */
  onRowClicked(row: { idUtilisateur: string; idTerrain: string }): void {
    this.router.navigate(['/edit-reserv', row.idUtilisateur, row.idTerrain]);
  }

  /**
   * Redirige vers la page pour ajouter une nouvelle réservation.
   */
  addTerrain(): void {
    this.router.navigate(['/add-reserv']);
  }

  /**
   * Redirige vers la page d'accueil.
   */
  goHome(): void {
    this.router.navigate(['']);
  }
}
