import { Injectable } from '@angular/core';
import { Bloc } from '../../models/bloc';
import { Observable, tap } from 'rxjs';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Foyer } from '../../models/foyer';

@Injectable({
  providedIn: 'root'
})
export class BlocService {


  apiUrl = environment.baseUrl+'bloc/';
  apiUrl2 = environment.baseUrl+'foyer/';
  constructor(private _http: HttpClient) { }

  getFoyerOptions(): Observable<string[]> {
    return this._http.get<string[]>(this.apiUrl2+'ids'); // Assuming it returns an array of numbers (foyer IDs)
  }
  fetchBloc() {
    return this._http.get(this.apiUrl+'retrieve-all-bloc');
  }
  getBlocs()
  {
   return this._http.get(this.apiUrl+'retrieve-all-bloc') ;
  }

  deleteBloc(id:number)
  {
    return this._http.delete (this.apiUrl+"delete-bloc/"+id) ; 
  }

  addBloc(data: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
    
      })
    };

    return this._http.post<any>('http://localhost:8089/app/bloc/add-bloc', data, httpOptions);
  }

}
