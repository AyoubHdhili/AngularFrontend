import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Reservation } from '../core/reservation';
import { Observable } from 'rxjs';
import { Etudiant } from '../core/etudiant';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  apiUrl: string = environment.baseUrl + "etudiant/"
  constructor(private _http: HttpClient) { }

  getAllStudents() {
    return this._http.get<Reservation[]>(this.apiUrl + 'retrieve-all-etudiants');
  }

  getStudentbyID(idstudent: number) {
    return this._http.get<Reservation>(`${this.apiUrl}retrieve-etudiant/${idstudent}`);
  }

  addStudent(student: Etudiant): Observable<any> {
    return this._http.post(`${this.apiUrl}add-etudiant`, student);
  }

  ModifyStudent(student: Etudiant) {
    return this._http.put<Reservation>(`${this.apiUrl}update`, student);
  }

  DeleteStudent(idstudent: number): Observable<any> {
    return this._http.delete(`${this.apiUrl}remove-etudiant${idstudent}`);
  }

}
