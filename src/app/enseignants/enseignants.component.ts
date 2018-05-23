
import { Component, OnInit } from '@angular/core';
import { Enseignant } from '../shared/modals/enseignant';
import { EnseignantService } from '../shared/service/enseignant.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute } from '@angular/router';
import { EnseignantComponent } from '../enseignant/enseignant.component';

@Component({
  selector: 'app-enseignants',
  templateUrl: './enseignants.component.html',
  styleUrls: ['./enseignants.component.scss']
})
export class EnseignantsComponent implements OnInit {
 enseignant:Enseignant;
  enseignants: Enseignant[];
  constructor(
    private enseignantservice:EnseignantService,
  /*  private modalService: NgbModal,
    private router: Router,
    private route: ActivatedRoute,*/
  ) { }

  ngOnInit() {
    this.getallSeance();
  }
  getallSeance() {

    this.enseignantservice.getEnseignants().subscribe(data => {
      var data = JSON.parse(data._body);
      this.enseignants  = (data.data);
 
      this.enseignants.forEach(element => {
        element.selected = false;
      });
    })
  }
  switch(id) {
    this.enseignants.forEach(element => {
      if (element.id === id) {
        element.selected = !element.selected;
 

      }
    });
  }

  delete() {
    this.enseignants.forEach((element, index) => {

      if (element.selected == true) {
        console.log(element.id);
        this.enseignants.splice(index, 1);
        this.enseignantservice.deleteEnseignant(element.id).subscribe(data => {
          this.enseignant = JSON.parse(data._body)
        })
      }

    });
  }
  /*OpenUpdate() {
    let updateList = [];
    this.enseignants.forEach(element => {
      if(element.selected == true) {
        this.enseignantservice.setActionEntity(element);
      }
    });
    
    this.modalService.open(EnseignantComponent);
  }*/
  

}

