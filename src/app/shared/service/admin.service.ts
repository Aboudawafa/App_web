import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Admin} from "./../modals/admin";
import {Observable} from "rxjs/Observable";

@Injectable()
export class AdminService {
  constructor(public _http:Http) { }
  getAdmins():Observable<any>{
    return this._http.get("http://localhost:4000/admins");
  }
 getAdminbyId(id : number) :Observable<any> {
    return this._http.get("http://localhost:4000/admins/"+ id );
 }
addAdmin(data) : Observable<any>{
    return this._http.post("http://localhost:4000/admins", data);
}
updateAdmin(id : number, data) : Observable<any>{
    return this._http.put("http://localhost:4000/admins/" +id, data);

}
deleteAdmin(id : number) : Observable<any>{
    return this._http.delete("http://localhost:4000/admins/"+id );
}

}