import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Reservation } from 'src/app/shared/models/reservation';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ReservationRequest } from '../gestion-chambrefront/gestion-chambrefront.component';

@Injectable({
  providedIn: 'root'
})
export class ReservationsService {

  apiUrl: string = environment.baseUrl + "reservation/";
  token: string = environment.token || '';
  constructor(private _http: HttpClient) { }

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Authorization': `Bearer ${this.token}`,
      'Content-Type': 'application/json',
    });
  }
  headers = this.getHeaders();
  options = { headers: this.headers };


  getAllReservations() {
    return this._http.get<Reservation[]>(this.apiUrl + 'retrieve-all-reservation', this.options);
  }

  getReservationbyID(idreser: number) {
    return this._http.get<Reservation>(`${this.apiUrl}retrieve-reservation/${idreser}`, this.options);
  }

  getReservationbyStudent(studentid: number) {
    return this._http.get<Reservation[]>(`${this.apiUrl}reservationsbystudent/${studentid}`, this.options);
  }
  reserveachambre(idetudiant: number, idchambre: number, body: ReservationRequest, send: boolean, idmatch: number): Observable<any> {
    return this._http.put(`${this.apiUrl}newreserv/${idetudiant}/${idchambre}/${send}/${idmatch}`, body, this.options);
  }
  validate(idstud: number, idreserv: number, code: string): Observable<any> {
    return this._http.patch(`${this.apiUrl}validate/${idstud}/${idreserv}/${code}`, this.options);
  }
  ModifyReservation(reservation: Reservation) {
    return this._http.put<Reservation>(`${this.apiUrl}update`, reservation, this.options);
  }

  DeleteReservation(idreser: number): Observable<any> {
    return this._http.delete(`${this.apiUrl}delete/${idreser}`, this.options);
  }


}
