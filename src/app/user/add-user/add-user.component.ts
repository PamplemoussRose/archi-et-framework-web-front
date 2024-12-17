import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UtilisateurModel } from '../../../models/utilisateur.model';
import { UtilisateurService } from '../../../services/utilisateur.service';

/**
 * Composant pour ajouter un nouvel utilisateur.
 */
@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [
    FormsModule,
  ],
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent {

  /**
   * Modèle d'utilisateur à ajouter.
   */
  user: UtilisateurModel = {
    id: 0,
    nom: '',
    prenom: '',
    mail: '',
    password: '',
    username: ''
  };

  /**
   * Constructeur pour injecter les services nécessaires.
   *
   * @param userService Service pour gérer les utilisateurs.
   * @param router Service Angular Router pour naviguer entre les pages.
   */
  constructor(
    private userService: UtilisateurService,
    private readonly router: Router
  ) {}

  /**
   * Retourne à la page des utilisateurs.
   */
  goBack(): void {
    this.router.navigate(['user']);
  }

  /**
   * Sauvegarde un nouvel utilisateur après avoir validé les champs.
   */
  saveUser(): void {
    // Vérifie que tous les champs nécessaires sont remplis.
    if (this.user.nom && this.user.prenom && this.user.mail && this.user.password && this.user.username) {
      // Crée un utilisateur via le service et redirige après l'ajout.
      this.userService.create(this.user).subscribe(() => {
        alert('Utilisateur ajouté');
        this.goBack();
      });
    } else {
      // Si un champ est manquant, un message d'alerte est affiché.
      alert('Veuillez remplir tous les champs');
    }
  }
}
