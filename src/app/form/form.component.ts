import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TerrainService } from '../../services/terrain.service';
import { TerrainModel } from '../../models/terrain.model';
import {FormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit {
  nom!: string;
  quantite!: number;
  description!: string;
  point_geo!: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Récupérer les paramètres de l'URL
    this.nom = this.route.snapshot.paramMap.get('nom') || '';
    this.quantite = +(this.route.snapshot.paramMap.get('quantite') || 0);
    this.description = this.route.snapshot.paramMap.get('description') || '';
    this.point_geo = this.route.snapshot.paramMap.get('point_geo') || '';
  }

  goBack(): void {
    window.history.back(); // Retourne à la page précédente
  }
}
