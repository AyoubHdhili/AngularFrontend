import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ContactsComponent} from "./contacts/contacts.component";
import {PricingComponent} from "./pricing/pricing.component";
import {ProductsComponent} from "./products/products.component";
import {ProjectsComponent} from "./projects/projects.component";
import {ServicesComponent} from "./services/services.component";
import {TeamComponent} from "./team/team.component";
import {TestimonialsComponent} from "./testimonials/testimonials.component";

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path:'contacts', component:ContactsComponent},
  {path:'pricing', component:PricingComponent},
  {path:'products', component:ProductsComponent},
  {path:'projects', component:ProjectsComponent},
  {path:'services', component:ServicesComponent},
  {path:'team', component:TeamComponent},
  {path:'testimonials', component:TestimonialsComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
