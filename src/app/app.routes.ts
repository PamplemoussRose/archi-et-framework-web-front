import { Routes } from '@angular/router';
import {TableauComponent} from './tableau/tableau.component';
import {FormComponent} from './form/form.component';

export const routes: Routes = [
  { path: '', component: TableauComponent },
  { path: 'form/:nom/:quantite/:description/:point_geo', component: FormComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
