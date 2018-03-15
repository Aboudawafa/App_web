import { Unite } from './../modals/unite';

import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class UniteService {
  constructor(public _http:Http) { }
  getUnites():Observable<any>{
    return this._http.get("http://localhost:4000/unites");
  }
 getUnitebyId(id : number) :Observable<any> {
    return this._http.get("http://localhost:4000/unites/"+ id );
 }
addUnite(data) : Observable<any>{
    return this._http.post("http://localhost:4000/unites", data);
}
updateUnite(id : number, data) : Observable<any>{
    return this._http.put("http://localhost:4000/unites/" +id, data);

}
deleteUnite(id : number) : Observable<any>{
    return this._http.delete("http://localhost:4000/unites/"+id );
}

}