import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatButtonModule} from "@angular/material/button";
import {ToastrModule} from "ngx-toastr";
import { GestionUserComponent } from './backoffice/gestion-user/gestion-user.component';
import {BackofficeModule} from "./features/backoffice/backoffice.module";
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { CodeVerificationComponent } from './code-verification/code-verification.component';
import { NewPasswordComponent } from './new-password/new-password.component';
@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    GestionUserComponent,
    ResetPasswordComponent,
    CodeVerificationComponent,
    NewPasswordComponent,

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
    BackofficeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
