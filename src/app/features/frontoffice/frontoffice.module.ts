import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FrontofficeComponent} from "../../frontoffice/frontoffice.component";
import {ContactsComponent} from "../../frontoffice/contacts/contacts.component";
import {PricingComponent} from "../../frontoffice/pricing/pricing.component";
import {ProductsComponent} from "../../products/products.component";
import {ProjectsComponent} from "../../frontoffice/projects/projects.component";
import {ServicesComponent} from "../../frontoffice/services/services.component";
import {TeamComponent} from "../../frontoffice/team/team.component";
import {TestimonialsComponent} from "../../frontoffice/testimonials/testimonials.component";
import {NavbarComponent} from "../../frontoffice/navbar/navbar.component";
import {ProductComponent} from "../../products/product/product.component";
import { FrontofficeRoutingModule } from './frontoffice-routing.module';
import {HomeComponent} from "../../frontoffice/home/home.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { StudentComponent } from 'src/app/pages/student/student.component';
import { ModifyinfosComponent } from 'src/app/pages/student/modifyinfos/modifyinfos.component';
import { ReservationsComponent } from 'src/app/pages/student/reservations/reservations.component';
import { AvailableroomsComponent } from '../../pages/student/reservations/availablerooms/availablerooms.component';
import { ReservationDialogComponent } from 'src/app/pages/student/reservations/reservation-dialog/reservation-dialog.component';
import { GestionBlocfrontComponent } from 'src/app/frontoffice/gestion-blocfront/gestion-blocfront.component';
import { GestionChambrefrontComponent } from 'src/app/frontoffice/gestion-chambrefront/gestion-chambrefront.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDatepicker } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core'; // Example for MatNativeDateModule
import {MatCheckboxModule} from '@angular/material/checkbox';


@NgModule({
  declarations: [
    FrontofficeComponent,
    ContactsComponent,
    PricingComponent,
    ProductsComponent,
    ProjectsComponent,
    ServicesComponent,
    TeamComponent,
    TestimonialsComponent,
    NavbarComponent,
    ProductComponent,
    HomeComponent,
    StudentComponent,
    ModifyinfosComponent,
    ReservationsComponent,
    AvailableroomsComponent,
    GestionBlocfrontComponent,
    GestionChambrefrontComponent,
    ReservationDialogComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    FrontofficeRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatButtonModule,
    MatIconModule,
    MatNativeDateModule,
    MatCheckboxModule,
  ]
})
export class FrontofficeModule { }
