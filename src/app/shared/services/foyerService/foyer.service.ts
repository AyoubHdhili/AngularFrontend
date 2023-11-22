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
  list: Foyer[] = []
  constructor(private _http: HttpClient) {}


  fetchFoyer() {
    return this._http.get(this.apiUrl+'retrieve-all-foyer');
  }

  removeFoyer(id: number) {
    return this._http.delete(this.apiUrl + 'delete-foyer/'+id);
  }

  addFoyer(data: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
        // Add any other headers if needed
      })
    };

    return this._http.post<any>('http://localhost:8089/app/foyer/add-foyer', data, httpOptions);
  }
}
