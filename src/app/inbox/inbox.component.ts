import { value } from './../shared/data/dropdowns';
import { data } from './../shared/data/smart-data-table';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import { Etudiant } from './../shared/modals/etudiant';
import { NgForm, FormsModule } from '@angular/forms';
import { Component, OnInit, ElementRef, ViewChild, Input } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Mail, Message } from './inbox.model';
import { EtudiantService } from '../shared/service/etudiant.service';
import { id } from '@swimlane/ngx-charts/release/utils';
import { ModalsComponent } from '../components/bootstrap/modals/modals.component';
import * as $ from 'jquery';
import { RegisterPageComponent } from '../pages/content-pages/register/register-page.component';



@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})

export class InboxComponent  {
  etudiant: Etudiant;
  etudiants: Etudiant[];


  constructor(private etudiantservice: EtudiantService, 
   private modalService: NgbModal,
   private router: Router,
   private route: ActivatedRoute ) { 

   }

  ngOnInit() {
    this.getallEtudiants();
  }


  getallEtudiants() {

    this.etudiantservice.getAllEtudiants().subscribe(data => {

      this.etudiants = JSON.parse(data._body);
      this.etudiants.forEach(element => {
        element.selected = false;
      });
    })
  }
  switch(id) {
    this.etudiants.forEach(element => {
      if (element.id === id) {
        element.selected = !element.selected;
      }
    });
  }
  delete() {
    this.etudiants.forEach((element, index) => {

      if (element.selected == true) {
        console.log(element.id);
        this.etudiants.splice(index, 1);
        this.etudiantservice.deleteEtudiant(element.id).subscribe(data => {
          this.etudiant = JSON.parse(data._body)
        })
      }

    });
  }
  /*openModal() {
    this.modals.open(this.register);
  }*/
OpenUpdate() {
  let updateList = [];
  this.etudiants.forEach(element => {
    if(element.selected == true) {
      this.etudiantservice.setActionEntity(element);
    }
  });
  
  this.modalService.open(RegisterPageComponent);
}
openContent() {
        this.modalService.open(RegisterPageComponent);
    }

    

}

