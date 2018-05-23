import { Type } from './../modals/type_note';
import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class TypeService {
  constructor(public _http:Http) { }
  getTypess():Observable<any>{
    return this._http.get("http://localhost:3000/types");
  }
 getTypesbyId(id : number) :Observable<any> {
    return this._http.get("http://localhost:3000/types/"+ id );
 }
addTypes(data) : Observable<any>{
    return this._http.post("http://localhost:3000/types", data);
}
updateTypes(id : number, data) : Observable<any>{
    return this._http.put("http://localhost:3000/types/" +id, data);

}
deleteTypes(id : number) : Observable<any>{
    return this._http.delete("http://localhost:3000/types/"+id );
}
}