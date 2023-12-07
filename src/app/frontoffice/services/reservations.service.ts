import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Reservation } from 'src/app/shared/models/reservation';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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
  reserveachambre(idetudiant: number, idchambre: number, reservation: Reservation): Observable<any> {
    return this._http.put(`${this.apiUrl}${idetudiant}/${idchambre}`, reservation, this.options);
  }

  ModifyReservation(reservation: Reservation) {
    return this._http.put<Reservation>(`${this.apiUrl}update`, reservation, this.options);
  }

  DeleteReservation(idreser: number): Observable<any> {
    return this._http.delete(`${this.apiUrl}delete-reservation${idreser}`, this.options);
  }


}
