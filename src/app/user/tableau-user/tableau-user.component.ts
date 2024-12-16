import {Component, ViewChild} from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {Router} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {UtilisateurService} from '../../../services/utilisateur.service';
import {UtilisateurModel} from '../../../models/utilisateur.model';

@Component({
  selector: 'app-tableau-user',
  standalone: true,
  imports: [
    MatTableModule,
    MatPaginatorModule,
    FormsModule,
    CommonModule],
  templateUrl: './tableau-user.component.html',
  styleUrl: './tableau-user.component.css'
})
export class TableauUserComponent {

  displayedColumns: string[] = ['id','nom','prenom','mail','username'];

  dataSource!: MatTableDataSource<UtilisateurModel>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private readonly userService: UtilisateurService, private readonly router: Router) {}

  ngOnInit(): void{
    this.userService.get().subscribe(value => {
        this.dataSource = new MatTableDataSource<UtilisateurModel>(value);
        this.dataSource.paginator = this.paginator;
      }
    )
  }

  onRowClicked(row: UtilisateurModel): void {
    this.router.navigate(['/edit-user', row.id]);
  }

  addTerrain(): void {
    this.router.navigate(['/add-user']);
  }

  goHome(): void {
    this.router.navigate(['']);
  }

}
