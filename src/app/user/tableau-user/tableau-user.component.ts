import { Component, ViewChild, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UtilisateurService } from '../../../services/utilisateur.service';
import { UtilisateurModel } from '../../../models/utilisateur.model';

/**
 * Composant affichant un tableau de tous les utilisateurs avec pagination.
 */
@Component({
  selector: 'app-tableau-user',
  standalone: true,
  imports: [
    MatTableModule,
    MatPaginatorModule,
    FormsModule,
    CommonModule
  ],
  templateUrl: './tableau-user.component.html',
  styleUrls: ['./tableau-user.component.css']
})
export class TableauUserComponent implements OnInit {

  /**
   * Colonnes à afficher dans le tableau.
   */
  displayedColumns: string[] = ['id', 'nom', 'prenom', 'mail', 'username'];

  /**
   * Source des données à afficher dans le tableau.
   */
  dataSource!: MatTableDataSource<UtilisateurModel>;

  /**
   * Référence à MatPaginator pour la pagination.
   */
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  /**
   * Constructeur pour injecter les services nécessaires.
   *
   * @param userService Service pour récupérer les utilisateurs.
   * @param router Service de navigation Angular.
   */
  constructor(
    private readonly userService: UtilisateurService,
    private readonly router: Router
  ) {}

  /**
   * Récupère les utilisateurs depuis le service et initialise la pagination.
   */
  ngOnInit(): void {
    this.userService.get().subscribe(value => {
      // Initialise le tableau avec les données récupérées
      this.dataSource = new MatTableDataSource<UtilisateurModel>(value);
      // Associe le paginator au tableau
      this.dataSource.paginator = this.paginator;
    });
  }

  /**
   * Gère le clic sur une ligne du tableau et redirige vers l'édition de l'utilisateur.
   * @param row L'utilisateur sélectionné.
   */
  onRowClicked(row: UtilisateurModel): void {
    this.router.navigate(['/edit-user', row.id]);
  }

  /**
   * Permet d'ajouter un nouvel utilisateur en redirigeant vers la page d'ajout.
   */
  addUser(): void {
    this.router.navigate(['/add-user']);
  }

  /**
   * Redirige l'utilisateur vers la page d'accueil.
   */
  goHome(): void {
    this.router.navigate(['']);
  }
}
