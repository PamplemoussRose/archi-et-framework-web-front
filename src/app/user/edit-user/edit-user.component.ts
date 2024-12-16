import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {UtilisateurModel} from '../../../models/utilisateur.model';
import {UtilisateurService} from '../../../services/utilisateur.service';

@Component({
  selector: 'app-edit-user',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.css'
})
export class EditUserComponent implements OnInit{
  user!: UtilisateurModel;

  constructor(
    private route: ActivatedRoute,
    private userService: UtilisateurService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.userService.getById(parseInt(id)).subscribe((data) => {
        this.user = data;
      });
    }
  }

  goBack(): void {
    this.router.navigate(['user']);
  }

  saveChanges(): void {
    if (!(this.user.nom == "" || this.user.prenom == "" || this.user.mail == "" || this.user.username == "")) {
      this.userService.update(this.user).subscribe(() => {
        alert('Utilisateur modifié');
        this.goBack();
      });
    } else {
      alert('Veuillez remplir tous les champs');
    }
  }

  deleteUser(): void {
    this.userService.delete(this.user.id).subscribe(() => {
      alert('Utilisateur supprimé');
      this.goBack();
    });
  }
}

