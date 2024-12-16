import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

  constructor(private readonly router: Router) {}

  goTerrain(): void {
    this.router.navigate(['terrain']);
  }

  goMap(): void {
    this.router.navigate(['map']);
  }

  goReserv(): void {
    this.router.navigate(['reserv']);
  }

  goAddReserv(): void {
    this.router.navigate(['add-reserv']);
  }

  goUser(): void {
    this.router.navigate(['user']);
  }

  goAddUser(): void {
    this.router.navigate(['add-user']);
  }

}
