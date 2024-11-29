import { Routes } from '@angular/router';
import {TableauDatasourceComponent} from './tableau-datasource/tableau-datasource.component';
import {EditTerrainComponent} from './edit-terrain/edit-terrain.component';
import {AddTerrainComponent} from './add-terrain/add-terrain.component';

export const routes: Routes = [
  { path: '', component: TableauDatasourceComponent },
  { path: 'edit/:id', component: EditTerrainComponent },
  { path: 'add', component: AddTerrainComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
