import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';
import { Etudiant } from 'src/app/shared/models/etudiant';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  apiUrl: string = environment.baseUrl + "etudiant/";
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


  getAllStudents() {
    return this._http.get<Etudiant[]>(this.apiUrl + 'retrieve-all-etudiants', this.options);
  }

  getStudentbyID(idstudent: number) {
    return this._http.get<Etudiant>(`${this.apiUrl}retrieve-etudiant/${idstudent}`, this.options);
  }

  addStudent(student: Etudiant): Observable<any> {
    return this._http.post(`${this.apiUrl}add-etudiant`, student, this.options);
  }

  ModifyStudent(student: Etudiant) {
    console.log(student)
    return this._http.post<Etudiant>(`${this.apiUrl}update`, student, this.options);
  }

  DeleteStudent(idstudent: number): Observable<any> {
    return this._http.delete(`${this.apiUrl}remove-etudiant${idstudent}`, this.options);
  }

}
