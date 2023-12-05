import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Chambre } from '../../models/chambre';
import { environment } from 'src/environments/environment.development';
import { HttpClient,HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ChambreService {
  apiUrl = environment.baseUrl+'chambre/';
  httpOptions = {};
  constructor(private _http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    };
   }
  affecterChambretoBloc(numeroChambre:number,idBloc:number){
    return this._http.put(this.apiUrl+'affecter-bloc-to-chambre/' + numeroChambre +'/' + idBloc,null);
  }
  getChambres()
  {
   return this._http.get(this.apiUrl+'get-all-chambres') ;
  }
  getChambres2(idBloc: number): Observable<Chambre[]> {
    return this._http.get<Chambre[]>(this.apiUrl + 'byBlocId/' + idBloc);
  }
  getChambreById (id:number)
  {
    return this._http.get(this.apiUrl+'retrieve-chambre/'+id) ;

  }

  DeleteChambre(id: number) {
    return this._http.delete(this.apiUrl + 'delete-chambre/'+id);
  }

  addChambre(data: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
    
      })
    };

    return this._http.post<any>('http://localhost:8089/app/chambre/add-chambre', data, httpOptions);
  }

  updateChambre(id:number, chambre:Chambre){
    return this._http.put(this.apiUrl+'updateChambre/'+id, {numeroChambre:chambre.numeroChambre,typeC:chambre.typeC}, this.httpOptions);
  }
}
