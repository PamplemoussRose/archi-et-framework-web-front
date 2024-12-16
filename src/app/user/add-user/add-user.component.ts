import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';
import {UtilisateurModel} from '../../../models/utilisateur.model';
import {UtilisateurService} from '../../../services/utilisateur.service';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {

  user: UtilisateurModel = {
    id: 0,
    nom: '',
    prenom: '',
    mail: '',
    password: '',
    username: ''
  }

  constructor(
    private userService: UtilisateurService,
    private readonly router: Router
  ) {}

  goBack(): void {
    this.router.navigate(['user']);
  }

  saveUser(): void {
    if (!(this.user.nom == "" || this.user.prenom == "" || this.user.mail == "" || this.user.password == "" || this.user.username == "")) {
      this.userService.create(this.user).subscribe(() => {
        alert('Utilisateur ajouté');
        this.goBack();
      });
    } else {
      alert('Veuillez remplir tous les champs');
    }
  }
}
