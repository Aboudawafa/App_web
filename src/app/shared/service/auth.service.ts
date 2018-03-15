
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthServices {

  constructor(private http: HttpClient) { }
  AuthServices
  authEtudiant(data) : Observable<any> {
      return this.http.post<any>('http://localhost:4000/etudiants', data)
  }
  
  authEnseignant(data) : Observable<any>{
    return this.http.post<any>('http://localhost:4000/enseignants', data)
  }
  authAdministrateur(data) : Observable<any>{
    return this.http.post<any>('http://localhost:4000/admins', data)

  }
  }

