import { Component } from '@angular/core';
import { Router } from '@angular/router';

/**
 * Composant Angular représentant la page d'accueil.
 * Ce composant offre une navigation vers différentes sections de l'application.
 */
@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  /**
   * Constructeur injectant le service `Router` pour gérer la navigation.
   *
   * @param router Service Angular Router utilisé pour naviguer entre les routes.
   */
  constructor(private readonly router: Router) {}

  /**
   * Navigue vers la page des terrains.
   */
  goTerrain(): void {
    this.router.navigate(['terrain']);
  }

  /**
   * Navigue vers la page de la carte des terrains.
   */
  goMap(): void {
    this.router.navigate(['map']);
  }

  /**
   * Navigue vers la page des réservations.
   */
  goReserv(): void {
    this.router.navigate(['reserv']);
  }

  /**
   * Navigue vers la page d'ajout de réservation.
   */
  goAddReserv(): void {
    this.router.navigate(['add-reserv']);
  }

  /**
   * Navigue vers la page des utilisateurs.
   */
  goUser(): void {
    this.router.navigate(['user']);
  }

  /**
   * Navigue vers la page d'ajout d'utilisateur.
   */
  goAddUser(): void {
    this.router.navigate(['add-user']);
  }
}
