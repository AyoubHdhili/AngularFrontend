import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BackofficeComponent} from "../../backoffice/backoffice.component";
import { BackofficeRoutingModule } from './backoffice-routing.module';
import { NavbarbackComponent } from 'src/app/backoffice/navbarback/navbarback.component';
import { SidebarbackComponent } from 'src/app/backoffice/sidebarback/sidebarback.component';
import { GestionFoyerComponent } from 'src/app/backoffice/gestion-foyer/gestion-foyer.component';
import { GestionBlocComponent } from 'src/app/backoffice/gestion-bloc/gestion-bloc.component';
import { FormFoyerComponent } from 'src/app/backoffice/forms/form-foyer/form-foyer.component';
import {  FormBlocComponent} from 'src/app/backoffice/forms/form-bloc/form-bloc.component' ; 
import { FormChambreComponent } from 'src/app/backoffice/forms/form-chambre/form-chambre.component';
import {GestionChambreComponent} from 'src/app/backoffice/gestion-chambre/gestion-chambre.component'  ; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StatistiqueChambreComponent } from 'src/app/backoffice/statistique-chambres/statistique_chambre.component';
import { NgApexchartsModule } from 'ng-apexcharts';



@NgModule({
  declarations: [
    BackofficeComponent,
    NavbarbackComponent,
    SidebarbackComponent,
    GestionFoyerComponent,
    GestionBlocComponent,
    GestionChambreComponent,
    FormBlocComponent,
    FormChambreComponent,
    StatistiqueChambreComponent,
    
    FormFoyerComponent
  ],
  imports: [
    CommonModule,
    BackofficeRoutingModule,
    FormsModule,
    NgApexchartsModule,
    ReactiveFormsModule,
  ]
})
export class BackofficeModule { }
