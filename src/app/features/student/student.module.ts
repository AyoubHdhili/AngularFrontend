import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from 'src/app/pages/student/student.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { StudentRoutingModule } from './student-routing.module';
import { StudentService } from 'src/app/services/student.service';
import { BreakpointObserver } from '@angular/cdk/layout';
import { ModifyinfosComponent } from 'src/app/pages/student/modifyinfos/modifyinfos.component';
import { ReservationsComponent } from 'src/app/pages/student/reservations/reservations.component';


@NgModule({
  declarations: [StudentComponent, ModifyinfosComponent,ReservationsComponent],
  imports: [
    CommonModule,
    StudentRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [StudentService,BreakpointObserver],
})
export class StudentModule { }
