import { Component, OnInit } from '@angular/core';
import { TypeChambre } from 'src/app/shared/enums/typechambre';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ChambreService } from 'src/app/shared/services/chambreService/chambre.service';
import { BlocService } from 'src/app/shared/services/blocService/bloc.service';
import { Bloc } from 'src/app/shared/models/bloc';
@Component({
  selector: 'app-form-chambre',
  templateUrl: './form-chambre.component.html',
  styleUrls: ['./form-chambre.component.scss']
})
export class FormChambreComponent implements OnInit {
  BlocIds: any[] = [];

  constructor (private _ChambreService:ChambreService,private _BlocService:BlocService) {}

  ChambreForm: FormGroup = new FormGroup({
    numeroChambre: new FormControl(
      '',
      [
        Validators.required,
        Validators.minLength(3)
      ]
    ),
    typeC: new FormControl(
      '',
      [
        Validators.required
    
      ]
    ),
   
    idBloc: new FormControl('', Validators.required),

 
  });
ngOnInit(): void {
  this._BlocService.fetchBloc().subscribe({

    next:(data)=>(this.BlocIds= data as Bloc[]) ,
    error:(err)=>console.log(err) ,
    }
    );
}
get chambreTypes() {
  return Object.values(TypeChambre);
}
get numeroChambre() {
  return this.ChambreForm.controls['numeroChambre'];
}  

get typeC() {
  return this.ChambreForm.controls['typeC'];
}
get idBloc() {
  return this.ChambreForm.controls['idBloc'];
}


add(f: FormGroup) {
     
  console.log(f.value)
  console.log("function works !")
  this._ChambreService.addChambre(this.ChambreForm.value).subscribe(
    (response) => {
      console.log('Form data sent successfully:', response);
      // Handle the response or any further logic
    },
    (error) => {
      console.error('Error sending form data:', error);
      // Handle errors accordingly
    }
  );
}


}
