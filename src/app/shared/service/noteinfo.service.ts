
import { Injectable } from '@angular/core';
import {Http} from "@angular/http";

import {Observable} from "rxjs/Observable";

@Injectable()
export class NoteinfoService  {
  constructor(public _http:Http) { }

  getNoteInfos():Observable<any>{
    return this._http.get("http://localhost:3000/noteinfo");
  }
 getnoteInfobyId(id : number) :Observable<any> {
    return this._http.get("http://localhost:3000/noteinfo/"+ id );
 }


 getnoteinfonotread() :Observable<any> {
    return this._http.get("http://localhost:3000/noteinfo/allnotifnotread");
 }

 getcountnoteinfonotread() :Observable<any> {
    return this._http.get("http://localhost:3000/noteinfo/countnotifnotread");
 }
addnoteinfo(data) : Observable<any>{
    return this._http.post("http://localhost:3000/noteinfo", data);
}
updatenoteinfo(id : number, data) : Observable<any>{
    return this._http.put("http://localhost:3000/noteinfo/" +id, data);

}
deletenoteinfo(id : number) : Observable<any>{
    return this._http.delete("http://localhost:3000/noteinfo/"+id );
}

}