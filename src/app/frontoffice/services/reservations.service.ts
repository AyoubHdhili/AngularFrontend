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


  getAllReservations() {
    return this._http.get<Reservation[]>(this.apiUrl + 'retrieve-all-reservation');
  }

  getReservationbyID(idreser: number) {
    return this._http.get<Reservation>(`${this.apiUrl}retrieve-reservation/${idreser}`);
  }

  getReservationbyStudent(studentid: number) {
    const headers = this.getHeaders();
    const options = { headers, withCredentials: true };
    return this._http.get<Reservation[]>(`${this.apiUrl}reservationsbystudent/${studentid}`,options);
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
