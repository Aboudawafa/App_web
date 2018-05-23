
import { value } from './../shared/data/dropdowns';
import { data } from './../shared/data/smart-data-table';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import { Etudiant } from './../shared/modals/etudiant';
import { NgForm, FormsModule } from '@angular/forms';
import { Component, OnInit, ElementRef, ViewChild, Input } from '@angular/core';
import { EtudiantService } from '../shared/service/etudiant.service';
import { id } from '@swimlane/ngx-charts/release/utils';
import * as $ from 'jquery';
import { SeanceService } from '../shared/service/seance.service';
import { Seance } from '../shared/modals/seance';

import { ClasseService } from '../shared/service/classe.service';
import { Classe } from '../shared/modals/classe';
import { element } from 'protractor';




@Component({
  selector: 'app-emplois',
  templateUrl: './emplois.component.html',
  styleUrls: ['./emplois.component.scss']
})
export class EmploisComponent implements OnInit {
   seance :Seance;
   seances:Seance[];
   classe: Classe;
   classes: Classe[];
   public searchString:string;
   public searchStringJour:string;
  constructor(
  
    private seanceservice:SeanceService,
    private classeservice:ClasseService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getallSeance();
  
  }
  getallSeance() {

    this.seanceservice.getSeances().subscribe(data => {
      var data = JSON.parse(data._body);
      this.seances  = (data.data);
      
    //  this.seances = JSON.parse(data._body);
      this.seances.forEach(element => {
/*       element.classe= element.classe.nom;  */
        element.selected = false;
      });
    })
  }
  switch(id) {
    this.seances.forEach(element => {
      if (element.id === id) {
        element.selected = !element.selected;
    /*   this.getSeanceById(element.id);*/

      }
    });
  }




 /* getSeanceById(id) {

    this.seanceservice.getSeancebyId(id).subscribe(data => {

      this.seances = JSON.parse(data._body);
 
    })
  }

  getClasseById(id) {

    this.classeservice.getClassebyId(id).subscribe(data => {

      this.classes = JSON.parse(data._body);
 
    })
  }*/

  delete() {
    this.seances.forEach((element, index) => {

      if (element.selected == true) {
        console.log(element.id);
        this.seances.splice(index, 1);
        this.seanceservice.deleteSeance(element.id).subscribe(data => {
          this.seance = JSON.parse(data._body)
        })
      }

    });
  }
  

}
