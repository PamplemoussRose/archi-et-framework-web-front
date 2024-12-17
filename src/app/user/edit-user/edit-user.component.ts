import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UtilisateurModel } from '../../../models/utilisateur.model';
import { UtilisateurService } from '../../../services/utilisateur.service';

/**
 * Composant permettant de modifier ou supprimer un utilisateur existant.
 */
@Component({
  selector: 'app-edit-user',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
})
export class EditUserComponent implements OnInit {

  /**
   * L'utilisateur à modifier.
   */
  user!: UtilisateurModel;

  /**
   * Constructeur pour injecter les services nécessaires.
   *
   * @param route Service ActivatedRoute pour obtenir l'ID de l'utilisateur.
   * @param userService Service pour gérer les utilisateurs.
   * @param router Service Angular Router pour naviguer entre les pages.
   */
  constructor(
    private route: ActivatedRoute,
    private userService: UtilisateurService,
    private readonly router: Router
  ) {}

  /**
   * Récupère l'ID de l'utilisateur depuis l'URL et charge les données de l'utilisateur correspondant.
   */
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.userService.getById(parseInt(id)).subscribe((data) => {
        this.user = data;
      });
    }
  }

  /**
   * Retourne à la liste des utilisateurs.
   */
  goBack(): void {
    this.router.navigate(['user']);
  }

  /**
   * Sauvegarde les modifications apportées à l'utilisateur.
   */
  saveChanges(): void {
    // Vérifie que tous les champs nécessaires sont remplis.
    if (this.user.nom && this.user.prenom && this.user.mail && this.user.username) {
      // Met à jour l'utilisateur via le service et redirige après la mise à jour.
      this.userService.update(this.user).subscribe(() => {
        alert('Utilisateur modifié');
        this.goBack();
      });
    } else {
      // Si un champ est manquant, un message d'alerte est affiché.
      alert('Veuillez remplir tous les champs');
    }
  }

  /**
   * Supprime l'utilisateur de la base de données.
   */
  deleteUser(): void {
    this.userService.delete(this.user.id).subscribe(() => {
      alert('Utilisateur supprimé');
      this.goBack();
    });
  }
}
