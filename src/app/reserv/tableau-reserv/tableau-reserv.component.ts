import {Component, ViewChild} from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {Router} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {ReservationModel} from '../../../models/reservation.model';
import {ReservationService} from '../../../services/reservation.service';
import {UtilisateurModel} from '../../../models/utilisateur.model';
import {TerrainModel} from '../../../models/terrain.model';
import {UtilisateurService} from '../../../services/utilisateur.service';
import {TerrainService} from '../../../services/terrain.service';

@Component({
  selector: 'app-tableau-reserv',
  standalone: true,
  imports: [
    MatTableModule,
    MatPaginatorModule,
    FormsModule,
    CommonModule],
  templateUrl: './tableau-reserv.component.html',
  styleUrl: './tableau-reserv.component.css'
})
export class TableauReservComponent {

  displayedColumns: string[] = ['idUtilisateur','idTerrain','Reservation'];

  dataSource!: MatTableDataSource<ReservationModel>;
  users!: UtilisateurModel[];
  terrains!: TerrainModel[];


  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private readonly resService: ReservationService,
              private readonly userService: UtilisateurService,
              private readonly terrainService: TerrainService,
              private readonly router: Router) {}

  ngOnInit(): void{
    this.resService.get().subscribe(value => {
        this.dataSource = new MatTableDataSource<ReservationModel>(value);
        this.dataSource.paginator = this.paginator;
      }
    )

    this.userService.get().subscribe(value => {
      this.users = value;
    })

    this.terrainService.get().subscribe(value => {
      this.terrains = value;
    })
  }

  getUser(id: number): string{
    let username = " ";
    for (let user of this.users){
      if (user.id === id){
        username = user.username;
      }
    }
    return username;
  }

  getTerrain(id: number): string{
    let nomTerrain = " ";
    for (let terrain of this.terrains){
      if (terrain.id === id){
        nomTerrain = terrain.nom;
      }
    }
    return nomTerrain;
  }

  onRowClicked(row: { idUtilisateur: string; idTerrain: string; }): void {
    this.router.navigate(['/edit-reserv/' + row.idUtilisateur + '/' + row.idTerrain]);
  }

  addTerrain(): void {
    this.router.navigate(['/add-reserv']);
  }

  goHome(): void {
    this.router.navigate(['']);
  }

}
