import { value } from './../shared/data/dropdowns';
import { data } from './../shared/data/smart-data-table';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import { Etudiant } from './../shared/modals/etudiant';
import { NgForm, FormsModule } from '@angular/forms';
import { Component, OnInit, ElementRef, ViewChild, Input } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { EtudiantService } from '../shared/service/etudiant.service';
import { id } from '@swimlane/ngx-charts/release/utils';
import { ModalsComponent } from '../components/bootstrap/modals/modals.component';
import * as $ from 'jquery';
import { RegisterPageComponent } from '../pages/content-pages/register/register-page.component';
import { OrderPipe } from 'ngx-order-pipe';
import * as alertFunctions from '../shared/data/sweet-alerts';


@Component({
  selector: 'app-inbox',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.scss']
})

export class EtudiantComponent  {
 etudiant: Etudiant;
  etudiants: Etudiant[];
  order: string = 'firstName';
  public  searchText:string;
  public  Filterbyclasse:string;
/*public etudiant =new Etudiant();
public etudiants=new Array<Etudiant>();*/

  constructor(private etudiantservice: EtudiantService, 
   private modalService: NgbModal,
   private router: Router,
   private route: ActivatedRoute,
   private orderPipe: OrderPipe ) {
    console.log(this.orderPipe.transform(this.etudiants, this.order));


    }

  ngOnInit() {
    this.getallEtudiants();
  }

  // Confirm & Cancel Button
  confirmCancelButton(){
    alertFunctions.confirmCancelButton();
  }

  getallEtudiants() {

    this.etudiantservice.getAllEtudiants().subscribe(data => {
      //console.log(data._body)
      //this.etudiants = JSON.parse(JSON.stringify(data._body.data));   
     // this.etudiants = JSON.parse(data._body.data);
     // console.log(typeof(data))
    console.log(data)
    var data = JSON.parse(data._body);
     this.etudiants = (data.data);
   
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

