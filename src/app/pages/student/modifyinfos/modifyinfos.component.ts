import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { StudentService } from 'src/app/frontoffice/services/student.service';
import { Etudiant } from 'src/app/shared/models/etudiant';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-modifyinfos',
  templateUrl: './modifyinfos.component.html',
  styleUrls: ['./modifyinfos.component.scss']
})
export class ModifyinfosComponent {

  id = parseInt(environment.idstudent || '-1');
  data!: Etudiant;
  constructor(private studentService: StudentService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.studentService.getStudentbyID(this.id).subscribe(
      (data) => {
        this.data = data;
        console.log(data)
        this.patchFormWithData();
      }
    );
    this.initializeForm();
  };

  ////  patch data 
  patchFormWithData() {
    const birthDate = this.data.dateNaissance ? new Date(this.data.dateNaissance) : null;
    const formattedDate = birthDate
      ? `${birthDate.getFullYear()}-${(birthDate.getMonth() + 1).toString().padStart(2, '0')}-${birthDate.getDate().toString().padStart(2, '0')}`
      : null;
    const interestsArray = this.data.interests?.split(',');
    this.yourForm.patchValue({
      idEtudiant: this.data.idEtudiant,
      famname: this.data.nomEt,  
      name: this.data.prenomEt,
      dateNaissance: formattedDate,
      cin: this.data.cin,
      email: this.data.email,
      ecole: this.data.ecole,
      interests: interestsArray,
    });

    // Ensure the interests form array has the correct number of controls
    const interestsFormArray = this.yourForm.get('interests') as FormArray;
    interestsFormArray.clear(); // Clear existing controls
    interestsArray != undefined ? interestsArray.forEach(interest => {
      interestsFormArray.push(this.createInterestWithValue(interest));
    }) : undefined;
  }
  // Adjust createInterest to accept an initial value
  createInterestWithValue(value: string): FormControl {
    return this.formBuilder.control(value, Validators.required);
  }

  //// form modify
  yourForm!: FormGroup;
  student!: Etudiant;

  modify() {
    const validInterestsArray: string = this.yourForm.value.interests.filter((interest: string) => interest.trim() !== '').join(',');
    const formattedDate = this.data.dateNaissance ? new Date(this.data.dateNaissance).toISOString().split('T')[0] : null;
    const student: Etudiant = {
      idEtudiant: this.yourForm.value.idEtudiant,
      nomEt: this.yourForm.value.famname,
      prenomEt: this.yourForm.value.name,
      dateNaissance: this.yourForm.value.dateNaissance,
      cin: this.yourForm.value.cin,
      email: this.yourForm.value.email,
      ecole: this.yourForm.value.ecole,
      reservations: this.yourForm.value.reservations,
      schoolperformance: this.yourForm.value.schoolperformance,
      interests: validInterestsArray,
    };

    this.studentService.ModifyStudent(student).subscribe(
      (response) => {
        // Handle successful modification, if needed
        console.log(response);
      },
      (error) => {
        // Handle error, if needed
        console.error(error);
      }
    );
  }

  initializeForm() {
    this.yourForm = this.formBuilder.group({
      idEtudiant: ['', [Validators.required, Validators.pattern('[1-9][0-9]*')]],
      famname: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
      name: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
      dateNaissance: ['', [Validators.required]],
      cin: ['', [Validators.required, Validators.minLength(3), Validators.pattern('[0-9]{8}')]],
      email: ['', Validators.required],
      ecole: ['', [Validators.required]],
      interests: this.formBuilder.array([this.createInterest()])
    });
  }
  getInterestControls(): AbstractControl[] {
    return (this.yourForm.get('interests') as FormArray).controls;
  }

  createInterest(): FormControl {
    return this.formBuilder.control('', Validators.required);
  }

  addInterest() {
    const interests = this.yourForm.get('interests') as FormArray;
    interests.push(this.createInterest());
  }

  removeInterest(i: number) {
    const interests = this.yourForm.get('interests') as FormArray;
    interests.removeAt(i);
  }




}