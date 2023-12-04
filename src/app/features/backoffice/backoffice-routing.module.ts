import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "../../backoffice/dashboard/dashboard.component";
import {AuthGuard} from "../../shared/auth/auth.guard";
import { BackofficeComponent } from 'src/app/backoffice/backoffice.component';
import { GestionFoyerComponent } from 'src/app/backoffice/gestion-foyer/gestion-foyer.component';
import { FormFoyerComponent } from 'src/app/backoffice/forms/form-foyer/form-foyer.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormUniversiteComponent } from 'src/app/backoffice/forms/form-universite/form-universite.component';
import { GestionUniversiteComponent } from 'src/app/backoffice/gestion-universite/gestion-universite.component';
import {StatistiqueComponent} from "../../backoffice/statistique/statistique.component";
const routes: Routes = [
  {path:'dashboard', component:BackofficeComponent },
  {path:'gestion-foyer', component:GestionFoyerComponent},
  {path:'add-foyer', component:FormFoyerComponent},
  { path: 'update/:id', component: FormFoyerComponent },
  {path: 'update-universite/:id', component: FormUniversiteComponent},
  {path:'add-universite', component: FormUniversiteComponent},
  {path:'gestion-universite', component: GestionUniversiteComponent},
  {path : "statistique", component: StatistiqueComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes),


  ],
  exports: [RouterModule]
})
export class BackofficeRoutingModule { }
