import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AbsenceEtudiantService {

    constructor(public _http:Http) { }
    getAbsencebyid(id : number):Observable<any>{
      return this._http.get("http://localhost:3000/absetudiant"+id );
    }

}
