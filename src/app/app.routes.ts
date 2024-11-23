import { Routes } from '@angular/router';
import {TableauDatasourceComponent} from './tableau-datasource/tableau-datasource.component';
import {EditTerrainComponent} from './edit-terrain/edit-terrain.component';

export const routes: Routes = [
  { path: '', component: TableauDatasourceComponent },
  { path: 'edit/:id', component: EditTerrainComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
