import {Component, ViewChild} from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {Router} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {TerrainService} from '../../../services/terrain.service';
import {TerrainModel} from '../../../models/terrain.model';

@Component({
  selector: 'app-tableau-datasource',
  standalone: true,
  imports: [
    MatTableModule,
    MatPaginatorModule,
    FormsModule,
    CommonModule],
  templateUrl: './tableau-datasource.component.html',
  styleUrl: './tableau-datasource.component.css'
})
export class TableauDatasourceComponent {

  displayedColumns: string[] = ['id','nom','quant','desc','geo'];

  dataSource!: MatTableDataSource<TerrainModel>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private readonly terrainService: TerrainService, private readonly router: Router) {}

  ngOnInit(): void{
    this.terrainService.get().subscribe(value => {
        this.dataSource = new MatTableDataSource<TerrainModel>(value);
        this.dataSource.paginator = this.paginator;
      }
    )
  }

  onRowClicked(row: TerrainModel): void {
    this.router.navigate(['/edit', row.id]);
  }

  addTerrain(): void {
    this.router.navigate(['/add']);
  }

  goHome(): void {
    this.router.navigate(['']);
  }
}

