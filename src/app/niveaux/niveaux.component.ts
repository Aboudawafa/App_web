import { Component, OnInit } from '@angular/core';
import { Niveau } from '../shared/modals/niveau';
import { NiveauService } from '../shared/service/niveau.service';

@Component({
  selector: 'app-niveaux',
  templateUrl: './niveaux.component.html',
  styleUrls: ['./niveaux.component.scss']
})
export class NiveauxComponent implements OnInit {

  niveau: Niveau;
  niveaux: Niveau[];

constructor(
  private niveauservice: NiveauService,
) { }




ngOnInit() {
  this.getallNiveaux();
}
getallNiveaux() {

  this.niveauservice.getNiveaus().subscribe(data => {
    var data = JSON.parse(data._body);
    this.niveaux  = (data.data);

    this.niveaux.forEach(element => {
      element.selected = false;
    });
  })
}
switch(id) {
  this.niveaux.forEach(element => {
    if (element.id === id) {
      element.selected = !element.selected;


    }
  });
}

delete() {
  this.niveaux.forEach((element, index) => {

    if (element.selected == true) {
      console.log(element.id);
      this.niveaux.splice(index, 1);
      this.niveauservice.deleteNiveau(element.id).subscribe(data => {
        this.niveau = JSON.parse(data._body)
      })
    }

  });
 
}}
