
import { Component, OnInit } from '@angular/core';
import { Classe } from '../shared/modals/classe';
import { ClasseService } from '../shared/service/classe.service';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})
export class ClassesComponent implements OnInit {
    classe: Classe;
    classes: Classe[];
  
  constructor(
    private serviceclasse:ClasseService,
  ) { }




  ngOnInit() {
    this.getallClasse();
  }
  getallClasse() {

    this.serviceclasse.getClasses().subscribe(data => {
      var data = JSON.parse(data._body);
      this.classes  = (data.data);
 
      this.classes.forEach(element => {
        element.selected = false;
      });
    })
  }
  switch(id) {
    this.classes.forEach(element => {
      if (element.id === id) {
        element.selected = !element.selected;
 

      }
    });
  }

  delete() {
    this.classes.forEach((element, index) => {

      if (element.selected == true) {
        console.log(element.id);
        this.classes.splice(index, 1);
        this.serviceclasse.deleteClasse(element.id).subscribe(data => {
          this.classe = JSON.parse(data._body)
        })
      }

    });
   
  }}
