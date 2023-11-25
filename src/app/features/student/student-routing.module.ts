import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModifyinfosComponent } from 'src/app/pages/student/modifyinfos/modifyinfos.component';
import { ReservationsComponent } from 'src/app/pages/student/reservations/reservations.component';
import { StudentComponent } from 'src/app/pages/student/student.component';

const routes: Routes = [
  {
    path: 'student', component: StudentComponent, children: [
      {path : 'modify', component : ModifyinfosComponent},
      {path : 'reservations' , component : ReservationsComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
