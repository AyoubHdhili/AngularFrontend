import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentService } from 'src/app/services/student.service';
import { Etudiant } from 'src/app/shared/models/etudiant';

@Component({
  selector: 'app-modifyinfos',
  templateUrl: './modifyinfos.component.html',
  styleUrls: ['./modifyinfos.component.scss']
})
export class ModifyinfosComponent {

  constructor(private studentService: StudentService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    //this.studentService.getStudentbyID()

  };

    //// form modify
    yourForm!: FormGroup;
    student!: Etudiant;

    modify() {
      const student: Etudiant = {
        idEtudiant: this.yourForm.value.idEtudiant,
        nomEt: this.yourForm.value.nomEt,
        prenomEt: this.yourForm.value.prenomEt,
        birthDate: this.yourForm.value.birthDate,
        cin: this.yourForm.value.cin,
        email: this.yourForm.value.email,
        ecole: this.yourForm.value.ecole,
        reservations: this.yourForm.value.reservations,
        schoolperformance: this.yourForm.value.schoolperformance,
        interests: this.yourForm.value.interests,
      };

      this.studentService.ModifyStudent(student);
      console.log(this.student);
    }


    initializeForm() {
      this.yourForm = this.formBuilder.group({
        idEtudiant: ['', Validators.required],
        famname: ['', [Validators.required, Validators.pattern('[a-zA-Z-0-9]{8}')]],
        name: ['', [Validators.required, Validators.minLength(3)]],
        birthdate: ['', [Validators.required, Validators.pattern('[1-9][0-9]*')]],
        cin: ['', Validators.required],
        email: ['', Validators.required],
        ecore: ['', [Validators.required]],
        interests: ['', Validators.required]
      });

    }



  }
