import { HttpClient } from '@angular/common/http';
import { Component,OnDestroy, OnInit } from '@angular/core';
import { Universite } from 'src/app/shared/models/universite';
import { UniversiteService } from 'src/app/shared/services/universiteService/universite.service';

@Component({
  selector: 'app-gestion-universite',
  templateUrl: './gestion-universite.component.html',
  styleUrls: ['./gestion-universite.component.scss']
})
export class GestionUniversiteComponent implements OnInit {
  listUniversite: Universite[] = [];
  constructor(
    private http: HttpClient,
    private _universiteService:UniversiteService
    ){};

  ngOnInit(): void {
  
    this._universiteService.fetchUniversites().subscribe({
      next: (data) => (this.listUniversite = data as Universite[]),
      error: (err) => console.log(err),
    });
  }

  deleteUniversite(id:number) 
{
  this._universiteService.removeUniversite(id).subscribe({
    next: () => this.listUniversite = this.listUniversite.filter((universite) => universite.idUniversite !== id),
 
    error: (error:any) => console.log(error)

  }) ;
}
}
