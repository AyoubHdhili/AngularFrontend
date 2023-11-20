import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Reservation } from '../core/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationsService {

  apiUrl : string = environment.baseUrl+"reservations/"
  constructor(private _http: HttpClient) { }

  getAllReservations() {
    return this._http.get<Reservation[]>(this.apiUrl);
  }


}
