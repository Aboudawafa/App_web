import { Absence } from './../modals/absence';
import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class AbsenceService {
  constructor(public _http:Http) { }
  getAbsences():Observable<any>{
    return this._http.get("http://localhost:4000/absences");
  }
 getAbsencebyId(id : number) :Observable<any> {
    return this._http.get("http://localhost:4000/absences/"+ id );
 }
addAbsence(data) : Observable<any>{
    return this._http.post("http://localhost:4000/absences", data);
}
Absence
updateAbsence(id : number, data) : Observable<any>{
    return this._http.put("http://localhost:4000/absences/" +id, data);

}
deleteAbsence(id : number) : Observable<any>{
    return this._http.delete("http://localhost:4000/absences/"+id );
}
}