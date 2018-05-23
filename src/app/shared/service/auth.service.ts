
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/Rx';
@Injectable()
export class AuthServices {
/*   public token: string; */

  constructor(private http: Http) {

     /*  var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token; */
   }

  authEtudiant(data) : Observable<any> {
      return this.http.post('http://localhost:3000/auth/login', data).map((response: Response) => {
      /* let token = response.json() && response.json().token ;
      console.log("token :"+token);
      if (token) {
          // set token property
          this.token = token;
        
          // store username and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', data);
    

          // return true to indicate successful login
          return true;
      } else {
          // return false to indicate failed login
          return false;
      } */
  }).catch(this.handleError);

  }
  private handleError (error: any) {
    let errMsg: string;
    if (error instanceof Response) {
          const body = error.json().message|| '';
          const err = body.error || JSON.stringify(body);
            errMsg = `${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    return Observable.throw(errMsg);
  }

  
  /* authEnseignant(data) : Observable<any>{
    return this.http.post('http://localhost:3000/auth/login', data)
  } */
  authAdministrateur(data) : Observable<any>{
    return this.http.post('http://localhost:3000/auth/login', data)

  }
  }

