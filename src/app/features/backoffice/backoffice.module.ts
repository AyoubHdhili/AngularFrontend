import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BackofficeComponent} from "../../backoffice/backoffice.component";
import { BackofficeRoutingModule } from './backoffice-routing.module';
import { NavbarbackComponent } from 'src/app/backoffice/navbarback/navbarback.component';
import { SidebarbackComponent } from 'src/app/backoffice/sidebarback/sidebarback.component';
import { GestionFoyerComponent } from 'src/app/backoffice/gestion-foyer/gestion-foyer.component';
import { FormFoyerComponent } from 'src/app/backoffice/forms/form-foyer/form-foyer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    BackofficeComponent,
    NavbarbackComponent,
    SidebarbackComponent,
    GestionFoyerComponent,
    FormFoyerComponent
  ],
  imports: [
    CommonModule,
    BackofficeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class BackofficeModule { }
