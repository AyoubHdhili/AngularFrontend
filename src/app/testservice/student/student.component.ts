import { Component } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent {

  constructor(private _studentService: StudentService) { }


  ngOnInit(): void {
    console.log(this._studentService.getAllStudents());
    console.log(this._studentService.getStudentbyID(1))
    console.log(this._studentService.DeleteStudent(100))

  }
}
