import { Component, OnInit } from '@angular/core';
import { MatiereService } from '../shared/service/matiere.service';
import { Matiere } from '../shared/modals/matiere';

@Component({
  selector: 'app-matieres',
  templateUrl: './matieres.component.html',
  styleUrls: ['./matieres.component.scss']
})
export class MatieresComponent implements OnInit {


  matiere: Matiere;
  matieres: Matiere[];

  constructor(
    private matiereservice :MatiereService,
  ) { }

 
  ngOnInit() {
    this.getallMatieres();
  }
  getallMatieres() {

    this.matiereservice.getMatieres().subscribe(data => {
      var data = JSON.parse(data._body);
      this.matieres  = (data.data);
 
      this.matieres.forEach(element => {
        element.selected = false;
      });
    })
  }
  switch(id) {
    this.matieres.forEach(element => {
      if (element.id === id) {
        element.selected = !element.selected;
 

      }
    });
  }

  delete() {
    this.matieres.forEach((element, index) => {

      if (element.selected == true) {
        console.log(element.id);
        this.matieres.splice(index, 1);
        this.matiereservice.deleteMatiere(element.id).subscribe(data => {
          this.matiere = JSON.parse(data._body)
        })
      }

    });
  }

}
