import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { ContactsComponent } from "./contacts/contacts.component";
import { PricingComponent } from "./pricing/pricing.component";
import { ProductsComponent } from "./products/products.component";
import { ProjectsComponent } from "./projects/projects.component";
import { ServicesComponent } from "./services/services.component";
import { TeamComponent } from "./team/team.component";
import { TestimonialsComponent } from "./testimonials/testimonials.component";
import { SignInComponent } from "./sign-in/sign-in.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { AuthGuard } from "./shared/services/auth/auth.guard";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'contacts', component: ContactsComponent },
  { path: 'pricing', component: PricingComponent, canActivate: [AuthGuard] },
  { path: 'products', component: ProductsComponent, canActivate: [AuthGuard] },
  { path: 'projects', component: ProjectsComponent, canActivate: [AuthGuard] },
  { path: 'services', component: ServicesComponent, canActivate: [AuthGuard] },
  { path: 'team', component: TeamComponent },
  { path: 'testimonials', component: TestimonialsComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  {
    path: 'studentdash',
    loadChildren: () =>
      import('./features/student/student.module').then(
        (m) => m.StudentModule
      ),
  },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
