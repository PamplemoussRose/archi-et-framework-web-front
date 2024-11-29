import {Component, ViewChild} from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {TerrainModel} from '../../models/terrain.model';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {TerrainService} from '../../services/terrain.service';
import {Router} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

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

  constructor(private readonly terainService: TerrainService, private readonly router: Router) {}

  ngOnInit(): void{
    this.terainService.get().subscribe(value => {
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
}

