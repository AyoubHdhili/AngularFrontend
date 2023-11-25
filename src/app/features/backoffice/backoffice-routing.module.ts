import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "../../backoffice/dashboard/dashboard.component";
import {AuthGuard} from "../../shared/auth/auth.guard";
import { BackofficeComponent } from 'src/app/backoffice/backoffice.component';
import { GestionFoyerComponent } from 'src/app/backoffice/gestion-foyer/gestion-foyer.component';
import { FormFoyerComponent } from 'src/app/backoffice/forms/form-foyer/form-foyer.component';
const routes: Routes = [
  {path:'dashboard', component:BackofficeComponent },
  {path:'gestion-foyer', component:GestionFoyerComponent},
  {path:'add-foyer', component:FormFoyerComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackofficeRoutingModule { }
