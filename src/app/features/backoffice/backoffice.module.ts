import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BackofficeComponent} from "../../backoffice/backoffice.component";
import { BackofficeRoutingModule } from './backoffice-routing.module';
import { NavbarbackComponent } from 'src/app/backoffice/navbarback/navbarback.component';
import { SidebarbackComponent } from 'src/app/backoffice/sidebarback/sidebarback.component';
import { GestionFoyerComponent } from 'src/app/backoffice/gestion-foyer/gestion-foyer.component';
import { FormFoyerComponent } from 'src/app/backoffice/forms/form-foyer/form-foyer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormUniversiteComponent } from 'src/app/backoffice/forms/form-universite/form-universite.component';
import { GestionUniversiteComponent } from 'src/app/backoffice/gestion-universite/gestion-universite.component';


@NgModule({
  declarations: [
    BackofficeComponent,
    NavbarbackComponent,
    SidebarbackComponent,
    GestionFoyerComponent,
    FormFoyerComponent,
    FormUniversiteComponent,
    GestionUniversiteComponent
  ],
  imports: [
    CommonModule,
    BackofficeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class BackofficeModule { }
