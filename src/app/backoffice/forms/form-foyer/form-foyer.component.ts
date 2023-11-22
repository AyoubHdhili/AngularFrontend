import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FoyerService } from 'src/app/shared/services/foyerService/foyer.service';

@Component({
  selector: 'app-form-foyer',
  templateUrl: './form-foyer.component.html',
  styleUrls: ['./form-foyer.component.scss']
})
export class FormFoyerComponent {
  constructor(private _foyerService: FoyerService){}
  FoyerForm: FormGroup = new FormGroup({
    nomFoyer: new FormControl(
      '',
      [
        Validators.required,
        Validators.minLength(3)
      ]
    ),
    capaciteFoyer: new FormControl(
      '',
      [
        Validators.required,
        Validators.minLength(3)
      ]
    ),
   
  



  });

 get nomFoyer() {
    return this.FoyerForm.controls['nomFoyer'];
  }

  get capaciteFoyer() {
    return this.FoyerForm.controls['capaciteFoyer'];
  }
 

  add(f: FormGroup) {

    console.log(f.value)
    console.log("function works !")
    this._foyerService.addFoyer(this.FoyerForm.value).subscribe(
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
