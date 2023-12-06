import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "../../backoffice/dashboard/dashboard.component";
import {AuthGuard} from "../../shared/auth/auth.guard";
import { BackofficeComponent } from 'src/app/backoffice/backoffice.component';
import { GestionFoyerComponent } from 'src/app/backoffice/gestion-foyer/gestion-foyer.component';
import { GestionBlocComponent } from 'src/app/backoffice/gestion-bloc/gestion-bloc.component';
import { FormFoyerComponent } from 'src/app/backoffice/forms/form-foyer/form-foyer.component';
import { GestionChambreComponent } from 'src/app/backoffice/gestion-chambre/gestion-chambre.component';
import { FormBlocComponent } from 'src/app/backoffice/forms/form-bloc/form-bloc.component';
import { FormChambreComponent } from 'src/app/backoffice/forms/form-chambre/form-chambre.component';
import { StatistiqueChambreComponent } from 'src/app/backoffice/statistique-chambres/statistique_chambre.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormUniversiteComponent } from 'src/app/backoffice/forms/form-universite/form-universite.component';
import { GestionUniversiteComponent } from 'src/app/backoffice/gestion-universite/gestion-universite.component';
const routes: Routes = [
  {path:'dashboard', component:BackofficeComponent },
  {path:'gestion-foyer', component:GestionFoyerComponent},
  {path:'gestion-bloc', component:GestionBlocComponent},
  {path:'gestion-chambre', component:GestionChambreComponent},
  {path:'add-foyer', component:FormFoyerComponent},
  {path:'add-bloc', component:FormBlocComponent},
  {path:'add-bloc/:id', component:FormBlocComponent},
  {path:'add-chambre', component:FormChambreComponent},
  {path:'add-chambre/:id', component:FormChambreComponent},
  {path:'stat', component:StatistiqueChambreComponent},
  {path:'add-universite', component: FormUniversiteComponent},
  {path:'gestion-universite', component: GestionUniversiteComponent}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackofficeRoutingModule { }
