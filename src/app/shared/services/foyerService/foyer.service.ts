import { Injectable } from '@angular/core';
import { Foyer } from '../../models/foyer';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoyerService {

  apiUrl = environment.baseUrl+'foyer/';
  httpOptions = {};
  list: Foyer[] = []
  constructor(private _http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    };
  }


  fetchFoyer() {
    return this._http.get(this.apiUrl+'retrieve-all-foyer', this.httpOptions);
  }

  removeFoyer(id: number) {
    return this._http.delete(this.apiUrl + 'delete-foyer/'+id, this.httpOptions);
  }

  addFoyer(data: any): Observable<any> {

    return this._http.post<any>('http://localhost:8089/app/foyer/add-foyer', data, this.httpOptions);
  }
}
