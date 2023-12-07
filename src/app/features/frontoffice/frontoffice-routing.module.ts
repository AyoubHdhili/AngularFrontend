import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TestimonialsComponent} from "../../frontoffice/testimonials/testimonials.component";
import {TeamComponent} from "../../frontoffice/team/team.component";
import {AuthGuard} from "../../shared/auth/auth.guard";
import {ServicesComponent} from "../../frontoffice/services/services.component";
import {ProjectsComponent} from "../../frontoffice/projects/projects.component";
import {ProductsComponent} from "../../products/products.component";
import {PricingComponent} from "../../frontoffice/pricing/pricing.component";
import {ContactsComponent} from "../../frontoffice/contacts/contacts.component";
import {HomeComponent} from "../../frontoffice/home/home.component";
import { StudentComponent } from 'src/app/pages/student/student.component';
import { ModifyinfosComponent } from 'src/app/pages/student/modifyinfos/modifyinfos.component';
import { ReservationsComponent } from 'src/app/pages/student/reservations/reservations.component';
import { AvailableroomsComponent } from 'src/app/pages/student/reservations/availablerooms/availablerooms.component';
const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'contacts', component:ContactsComponent},
  {path:'pricing', component:PricingComponent, canActivate:[AuthGuard]},
  {path:'products', component:ProductsComponent, canActivate:[AuthGuard]},
  {path:'projects', component:ProjectsComponent, canActivate:[AuthGuard]},
  {path:'services', component:ServicesComponent, canActivate:[AuthGuard]},
  {path:'team', component:TeamComponent},
  {path:'testimonials', component:TestimonialsComponent},
  {
    path: 'student', component: StudentComponent, children: [
      {path : 'modify', component : ModifyinfosComponent},
      {path : 'reservations' , component : ReservationsComponent, children: [
        {path : 'availablerooms', component : AvailableroomsComponent }
      ]}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontofficeRoutingModule { }
