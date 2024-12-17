import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TerrainService } from '../../../services/terrain.service';
import { TerrainModel } from '../../../models/terrain.model';

/**
 * Composant pour afficher une table paginée des terrains.
 */
@Component({
  selector: 'app-tableau-datasource',
  standalone: true,
  imports: [
    MatTableModule,
    MatPaginatorModule,
    FormsModule,
    CommonModule,
  ],
  templateUrl: './tableau-datasource.component.html',
  styleUrls: ['./tableau-datasource.component.css'],
})
export class TableauDatasourceComponent implements AfterViewInit {

  /**
   * Colonnes affichées dans la table.
   */
  displayedColumns: string[] = ['id', 'nom', 'quant', 'desc', 'geo'];

  /**
   * Source de données pour la table.
   */
  dataSource!: MatTableDataSource<TerrainModel>;

  /**
   * Référence au composant de pagination Angular Material.
   */
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  /**
   * Constructeur pour injecter les services nécessaires.
   *
   * @param terrainService Service pour gérer les données des terrains.
   * @param router Service Angular Router pour naviguer entre les pages.
   */
  constructor(
    private readonly terrainService: TerrainService,
    private readonly router: Router
  ) {}

  /**
   * Initialise le composant après le chargement de la vue.
   * Configure la source de données et la pagination.
   */
  ngAfterViewInit(): void {
    this.terrainService.get().subscribe((value) => {
      this.dataSource = new MatTableDataSource<TerrainModel>(value);

      // Ajoute la pagination après l'initialisation des données.
      this.dataSource.paginator = this.paginator;
    });
  }

  /**
   * Navigue vers la page d'édition pour un terrain sélectionné.
   *
   * @param row TerrainModel sélectionné dans la table.
   */
  onRowClicked(row: TerrainModel): void {
    this.router.navigate(['/edit', row.id]);
  }

  /**
   * Navigue vers la page pour ajouter un nouveau terrain.
   */
  addTerrain(): void {
    this.router.navigate(['/add']);
  }

  /**
   * Navigue vers la page d'accueil.
   */
  goHome(): void {
    this.router.navigate(['']);
  }
}
