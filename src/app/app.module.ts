import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactsComponent } from './frontoffice/contacts/contacts.component';
import { PricingComponent } from './frontoffice/pricing/pricing.component';
import { ProductsComponent } from './products/products.component';
import { ProjectsComponent } from './frontoffice/projects/projects.component';
import { ServicesComponent } from './frontoffice/services/services.component';
import { TeamComponent } from './frontoffice/team/team.component';
import { TestimonialsComponent } from './frontoffice/testimonials/testimonials.component';
import { NavbarComponent } from './frontoffice/navbar/navbar.component';
import { HomeComponent } from './frontoffice/home/home.component';
import { ProductComponent } from './products/product/product.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatButtonModule} from "@angular/material/button";
import {ToastrModule} from "ngx-toastr";
import { FrontofficeComponent } from './frontoffice/frontoffice.component';
import { BackofficeComponent } from './backoffice/backoffice.component';
import { NavbarbackComponent } from './backoffice/navbarback/navbarback.component';
import { SidebarbackComponent } from './backoffice/sidebarback/sidebarback.component';
import { GestionFoyerComponent } from './backoffice/gestion-foyer/gestion-foyer.component';
import { FormFoyerComponent } from './backoffice/forms/form-foyer/form-foyer.component';
import { FormUniversiteComponent } from './backoffice/forms/form-universite/form-universite.component';
import { GestionUniversiteComponent } from './backoffice/gestion-universite/gestion-universite.component';
import { StatistiqueComponent } from './backoffice/statistique/statistique.component';
import { NgApexchartsModule } from "ng-apexcharts";


@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatButtonModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
