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
    });
  }


  getAllStudents() {
    const headers = this.getHeaders();
    const options = { headers, withCredentials: true };
    return this._http.get<Etudiant[]>(this.apiUrl + 'retrieve-all-etudiants',  options );
  }

  getStudentbyID(idstudent: number) {
    const headers = this.getHeaders();
    const options = { headers, withCredentials: true };

    return this._http.get<Etudiant>(`${this.apiUrl}retrieve-etudiant/${idstudent}`, options);
  }

  addStudent(student: Etudiant): Observable<any> {
    return this._http.post(`${this.apiUrl}add-etudiant`, student);
  }

  ModifyStudent(student: Etudiant) {
    return this._http.put<Etudiant>(`${this.apiUrl}update`, student);
  }

  DeleteStudent(idstudent: number): Observable<any> {
    return this._http.delete(`${this.apiUrl}remove-etudiant${idstudent}`);
  }

}
