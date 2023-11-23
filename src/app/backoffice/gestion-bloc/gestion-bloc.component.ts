import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bloc } from 'src/app/shared/models/bloc';
import { BlocService } from 'src/app/shared/services/blocService/bloc.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-gestion-bloc',
  templateUrl: './gestion-bloc.component.html',
  styleUrls: ['./gestion-bloc.component.scss']
})
export class GestionBlocComponent implements OnInit,OnDestroy{

  blocs:Bloc[]=[];
  constructor(private router: Router,private _BlocService: BlocService) { }
  ngOnDestroy(): void {
    

  }
  ngOnInit(): void {
    console.log('I m mounted');

    this._BlocService.getBlocs().subscribe({
       next:(data)=>this.blocs=data as Bloc[],
       error: (error:any) => console.log(error),
        complete:()=>console.log("complete")

     }) ;
}

deleteBloc(id:number) 
{
  this._BlocService.deleteBloc(id).subscribe({
    next: () => this.blocs = this.blocs.filter((bloc) => bloc.idBloc !== id),
 
    error: (error:any) => console.log(error)
  
  }) ;  
}

}
