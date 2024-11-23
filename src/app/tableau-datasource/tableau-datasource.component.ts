import {Component, ViewChild} from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {TerrainModel} from '../../models/terrain.model';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {TerrainService} from '../../services/terrain.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tableau-datasource',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule],
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
        //this.dataSource.paginator = this.paginator;
      }
    )
  }

  ngAfterViewInit(): void {
    // Connect the paginator after the view initializes
    if (this.dataSource) {
      this.dataSource.paginator = this.paginator;
    }
  }

  onRowClicked(row: TerrainModel): void {
    this.router.navigate(['/edit', row.id]);
  }
}

