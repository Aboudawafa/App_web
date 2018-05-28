import { Component, OnInit } from '@angular/core';
import { Noteinfos } from '../shared/modals/noteinfo';
import { NoteinfoService } from '../shared/service/noteinfo.service';
@Component({
  selector: 'app-noteinfos',
  templateUrl: './noteinfos.component.html',
  styleUrls: ['./noteinfos.component.scss']
})
export class NoteinfosComponent implements OnInit {

  noteinfo:Noteinfos;
   noteinfos :Noteinfos[];


  constructor(public servicenoteinfo: NoteinfoService) { }

 
  ngOnInit() {
    this.getallnoteinfos();
  }

  getallnoteinfos() {

    this.servicenoteinfo.getNoteInfos().subscribe(data => {
      var data = JSON.parse(data._body);
      this.noteinfos  = (data.data);
      this.noteinfos.forEach(element => {

      });
    })
  }

  getallnoteinfosNotread() {

    this.servicenoteinfo.getnoteinfonotread().subscribe(data => {
      var data = JSON.parse(data._body);
      this.noteinfos  = (data.data);
      this.noteinfos.forEach(element => {

      });
    })
  }

  switch(id) {
    this.noteinfos.forEach(element => {
      if (element.id === id) {
        element.selected = !element.selected;
 

      }
    });
  }

  delete() {
    this.noteinfos.forEach((element, index) => {

      if (element.selected == true) {
        console.log(element.id);
        this.noteinfos.splice(index, 1);
        this.servicenoteinfo.deletenoteinfo(element.id).subscribe(data => {
          this.noteinfo = JSON.parse(data._body)
        })
      }

    });
  }}
