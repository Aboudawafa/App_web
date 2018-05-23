
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ajaxRequest } from '../data/sweet-alerts';
import { error } from 'util';


@Injectable()
export class ActualiteService {

   filesToUpload: Array<File> = []; 
    constructor(public _http: Http) { }
    getAllActualites(): Observable<any> {
        return this._http.get("http://localhost:3000/actualites");
    }
    /****************Upload***************/
    addActualite(data): Observable<any> {
        const formData = new FormData();
        formData.append("actImage", data.actImage,data.actImage.name);
        formData.append("titre",data.titre);
        formData.append("description",data.description);
        formData.append("date",data.date);
      
      return  this._http.post('http://localhost:3000/actualites', formData)
    } 
  
   
   
    updateActualite(id: number, data): Observable<any> {
        return this._http.put("http://localhost:3000/actualites/" + id, data);

    }
    deleteActualite(id: number): Observable<any> {
        return this._http.delete("http://localhost:3000/actualites/" + id);
    }
    getActualitebyId(id: number): Observable<any> {
        return this._http.get("http://localhost:3000/actualites/" + id);
    }

}
