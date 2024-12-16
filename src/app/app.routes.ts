import { Routes } from '@angular/router';
// HOME
import {HomePageComponent} from './home/home-page/home-page.component';
// TERRAINS
import {TableauDatasourceComponent} from './terrain/tableau-datasource/tableau-datasource.component';
import {EditTerrainComponent} from './terrain/edit-terrain/edit-terrain.component';
import {AddTerrainComponent} from './terrain/add-terrain/add-terrain.component';
import {MapTerrainComponent} from './terrain/map-terrain/map-terrain.component';
// RESERVATIONS
import {TableauReservComponent} from './reserv/tableau-reserv/tableau-reserv.component';
import {EditReservComponent} from './reserv/edit-reserv/edit-reserv.component';
import {AddReservComponent} from './reserv/add-reserv/add-reserv.component';
// USER
import {TableauUserComponent} from './user/tableau-user/tableau-user.component';
import {EditUserComponent} from './user/edit-user/edit-user.component';
import {AddUserComponent} from './user/add-user/add-user.component';

//---------------------------------------------------------------------------//

export const routes: Routes = [
  // HOME
  {path: '', component: HomePageComponent},
  // TERRAINS
  { path: 'terrain', component: TableauDatasourceComponent },
  { path: 'edit/:id', component: EditTerrainComponent },
  { path: 'add', component: AddTerrainComponent },
  { path: 'map', component: MapTerrainComponent},
  // RESERVATIONS
  { path: 'reserv', component: TableauReservComponent },
  { path: 'edit-reserv/:user/:terrain', component: EditReservComponent },
  { path: 'add-reserv', component: AddReservComponent },
  // USER
  { path: 'user', component: TableauUserComponent},
  { path: 'edit-user/:id', component: EditUserComponent},
  { path: 'add-user', component: AddUserComponent},
  // AUTRES CHEMINS
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
