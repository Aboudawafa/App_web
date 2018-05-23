import { HttpClient } from '@angular/common/http';
import { value } from './../data/dropdowns';
import { Injectable } from '@angular/core';
import {Http,Response} from "@angular/http";
import {Etudiant} from "./../modals/etudiant";
import {Observable} from "rxjs/Observable";
import { data } from '../data/smart-data-table';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { map } from 'rxjs/operators';

@Injectable()
export class EtudiantService {
    public etudiants: BehaviorSubject<any>;
    private dataStore: {  
        etudiants: Etudiant[]
      };
    
   filesToUpload: Array<File> = []; 

  constructor(public _http:Http) { 
    this.dataStore = { etudiants: [] };
    this.etudiants = new BehaviorSubject({});
  }
  public setActionEntity(action): void {
   // console.log(action);
    this.etudiants.next(action);
  }


  getAllEtudiants():Observable<any>{
    return this._http.get("http://localhost:3000/etudiants");
  }
 getEtudiantbyId(id : number) :Observable<any> {
    return this._http.get("http://localhost:3000/etudiants/"+ id );
 }

 addEtudiant(data): Observable<any> {
    const formData = new FormData();
    formData.append("photo", data.photo,data.photo.name);
    formData.append("email",data.email);
    formData.append("firstName",data.firstName);
    formData.append("lastName",data.lastName);
    formData.append("cin",data.cin);
    formData.append("date_naissance",data.date_naissance);
    formData.append("username",data.username);
    formData.append("password",data.password);
    formData.append("classe",data.classe);

  return  this._http.post('http://localhost:3000/etudiants', formData)
} 

updateEtudiant(id : number, data) : Observable<any>{
    return this._http.put("http://localhost:3000/etudiants/" +id, data);

}
deleteEtudiant(id : number) : Observable<any>{
    return this._http.delete("http://localhost:3000/etudiants/"+id );
}

}






