import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Universite } from '../../models/universite';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UniversiteService {

  apiUrl = environment.baseUrl+'universite/';
  list: Universite[] = []
  constructor(private _http: HttpClient) {}


  fetchUniversites() {
    return this._http.get(this.apiUrl+'retrieve-all-universite');
  }
  removeUniversite(id: number) {
    return this._http.delete(this.apiUrl + 'delete-universite/'+id);
  }
  addUniversite(universite: Universite) {
    return this._http.post(this.apiUrl+'add-universite', universite);
  }
  affectFoyertoUniversite(nomUniversite:String,idFoyer:number){
    return this._http.put(this.apiUrl+'affecterFoyer/' + nomUniversite +'/' + idFoyer,null);
  }
}
