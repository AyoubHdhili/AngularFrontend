import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { HttpClient,HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ChambreService {
  apiUrl = environment.baseUrl+'chambre/';
  constructor(private _http: HttpClient) { }

  getChambres()
  {
   return this._http.get(this.apiUrl+'get-all-chambres') ;
  }
  getChambreById (id:number)
  {
    return this._http.get(this.apiUrl+'retrieve-chambre'+id) ;

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
}
