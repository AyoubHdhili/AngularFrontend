import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Reservation } from '../core/reservation';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationsService {

  apiUrl: string = environment.baseUrl + "reservation/"
  constructor(private _http: HttpClient) { }

  getAllReservations() {
    return this._http.get<Reservation[]>(this.apiUrl + 'retrieve-all-reservation');
  }

  getReservationbyID(idreser: number) {
    return this._http.get<Reservation>(`${this.apiUrl}retrieve-reservation/${idreser}`);
  }

  reserveachambre(idetudiant: number, idchambre: number, reservation: Reservation): Observable<any> {
    return this._http.put(`${this.apiUrl}${idetudiant}/${idchambre}`, reservation);
  }

  ModifyReservation(reservation: Reservation) {
    return this._http.put<Reservation>(`${this.apiUrl}update`, reservation);
  }

  DeleteReservation(idreser: number): Observable<any> {
    return this._http.delete(`${this.apiUrl}delete-reservation${idreser}`);
  }


}
