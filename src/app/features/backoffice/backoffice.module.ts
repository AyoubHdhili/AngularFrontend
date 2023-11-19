import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BackofficeComponent} from "../../backoffice/backoffice.component";
import { BackofficeRoutingModule } from './backoffice-routing.module';



@NgModule({
  declarations: [
    BackofficeComponent,
  ],
  imports: [
    CommonModule,
    BackofficeRoutingModule
  ]
})
export class BackofficeModule { }
