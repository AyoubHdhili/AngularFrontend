import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { StudentService } from 'src/app/services/student.service';
import { Etudiant } from 'src/app/shared/models/etudiant';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-modifyinfos',
  templateUrl: './modifyinfos.component.html',
  styleUrls: ['./modifyinfos.component.scss']
})
export class ModifyinfosComponent {

  id= parseInt(environment.idstudent||'0');
  data = Etudiant;
  constructor(private studentService: StudentService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.fetchdata();
    this.initializeForm();
    //this.studentService.getStudentbyID()

  };

  // fetch data
  fetchdata(){
    this.studentService.getStudentbyID(this.id).subscribe(
      //(data) => this.data = data
    );
  }

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
      idEtudiant: ['', [Validators.required, Validators.pattern('[1-9][0-9]*')]],
      famname: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
      name: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
      birthdate: ['', [Validators.required]],
      cin: ['', [Validators.required, Validators.minLength(3), Validators.pattern('[0-9]{8}')]],
      email: ['', Validators.required],
      ecole: ['', [Validators.required]],
      interests: this.formBuilder.array([this.createInterest()])
    });
  }

  createInterest(): FormControl {
    return this.formBuilder.control('', Validators.required);
  }
  
  getInterestControls(): AbstractControl[] {
    return (this.yourForm.get('interests') as FormArray).controls;
  }

  addInterest() {
    const interests = this.yourForm.get('interests') as FormArray;
    interests.push(this.createInterest());
  }



}