import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Foyer } from 'src/app/shared/models/foyer';
import { BlocService } from 'src/app/shared/services/blocService/bloc.service';
import { FoyerService } from 'src/app/shared/services/foyerService/foyer.service';
@Component({
  selector: 'app-form-bloc',
  templateUrl: './form-bloc.component.html',
  styleUrls: ['./form-bloc.component.scss']
})
export class FormBlocComponent  implements OnInit {

  foyerIds: any[] = [];

  constructor (private _BlocService: BlocService,private _FoyerService : FoyerService) {}
  BlocForm: FormGroup = new FormGroup({
    nomBloc: new FormControl(
      '',
      [
        Validators.required,
        Validators.minLength(3)
      ]
    ),
    capaciteBloc: new FormControl(
      '',
      [
        Validators.required,
        Validators.minLength(3)
      ]
    ),
   
    idFoyer: new FormControl('', Validators.required),

 
  });

  ngOnInit(): void {
    this._FoyerService.fetchFoyer().subscribe({

    next:(data)=>(this.foyerIds= data as Foyer[]) ,
    error:(err)=>console.log(err) ,
    }
    );
  }

 
  get nomBloc() {
    return this.BlocForm.controls['nomBloc'];
  }  

  get capaciteBloc() {
    return this.BlocForm.controls['capaciteBloc'];
  }
  get idFoyer() {
    return this.BlocForm.controls['idFoyer'];
  }
 
  
  
  add(f: FormGroup) {
     
    console.log(f.value)
    console.log("function works !")
    this._BlocService.addBloc(this.BlocForm.value).subscribe(
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
