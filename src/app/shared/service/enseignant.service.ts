import { Enseignant } from './../modals/enseignant';
import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class EnseignantService {
    public enseignants: BehaviorSubject<any>;
    private dataStore: {  
        enseignants:Enseignant[]
      };
    
  public setActionEntity(action): void {
   // console.log(action);
    this.enseignants.next(action);
  }

  constructor(public _http:Http) { 
    this.dataStore = { enseignants: [] };
    this.enseignants = new BehaviorSubject({});
  }
  getEnseignants():Observable<any>{
    return this._http.get("http://localhost:3000/enseignants");
  }
  Enseignant
 getEnseignantbyId(id : number) :Observable<any> {
    return this._http.get("http://localhost:3000/enseignants/"+ id );
 }
addEnseignant(data) : Observable<any>{
    return this._http.post("http://localhost:3000/enseignants", data);
}
updateEnseignant(id : number, data) : Observable<any>{
    return this._http.put("http://localhost:3000/enseignants/" +id, data);

}
deleteEnseignant(id : number) : Observable<any>{
    return this._http.delete("http://localhost:3000/enseignants/"+id );
}

}