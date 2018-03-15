import { Note } from './../modals/note';
import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class NoteService {
  constructor(public _http:Http) { }
  getNotes():Observable<any>{
    return this._http.get("http://localhost:4000/notes");
  }
 getNotebyId(id : number) :Observable<any> {
    return this._http.get("http://localhost:4000/notes/"+ id );
 }
addNote(data) : Observable<any>{
    return this._http.post("http://localhost:4000/notes", data);
}
updateNote(id : number, data) : Observable<any>{
    return this._http.put("http://localhost:4000/notes/" +id, data);

}
deleteNote(id : number) : Observable<any>{
    return this._http.delete("http://localhost:4000/notes/"+id );
}
}