import {Component, ViewChild} from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {Router} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {ReservationModel} from '../../../models/reservation.model';
import {ReservationService} from '../../../services/reservation.service';

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


  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private readonly resService: ReservationService,
              private readonly router: Router) {}

  ngOnInit(): void{
    this.resService.get().subscribe(value => {
        this.dataSource = new MatTableDataSource<ReservationModel>(value);
        this.dataSource.paginator = this.paginator;
      }
    )
  }

  getUser(id: number): string{

      return 'user';
  }

  getTerrain(id: number): string{

    return 'terrain';
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
