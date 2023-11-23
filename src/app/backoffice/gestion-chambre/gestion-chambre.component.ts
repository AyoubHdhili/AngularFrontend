import { Component, OnDestroy, OnInit } from '@angular/core';
import { Chambre } from 'src/app/shared/models/chambre';
import { ChambreService } from 'src/app/shared/services/chambreService/chambre.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gestion-chambre',
  templateUrl: './gestion-chambre.component.html',
  styleUrls: ['./gestion-chambre.component.scss']
})
export class GestionChambreComponent  implements OnInit,OnDestroy {
  chambres:Chambre[]=[];
  constructor( private route: ActivatedRoute,private _ChambreService: ChambreService, ){}
  ngOnDestroy(): void {
    

  }
  ngOnInit(): void {
    this._ChambreService.getChambres().subscribe({
      next:(data)=>this.chambres=data as Chambre[],
      error: (error:any) => console.log(error),
       complete:()=>console.log("complete")

    }) ;
  }
  DeleteChambre(id:number) 
{
  this._ChambreService.DeleteChambre(id).subscribe({
    next: () => this.chambres = this.chambres.filter((chambre) => chambre.idChambre !== id),
 
    error: (error:any) => console.log(error)
  
  }) ;  
}
}
