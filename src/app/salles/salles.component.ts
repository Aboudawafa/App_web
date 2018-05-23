import { Salle } from './../shared/modals/salle';
import { Component, OnInit } from '@angular/core';
import { SalleService } from '../shared/service/salle.service';
import { NgbModal, NgbPaginationConfig } from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute } from '@angular/router';
import { SalleComponent } from '../salle/salle.component';
import { value } from './../shared/data/dropdowns';
import { data } from './../shared/data/smart-data-table';
import { FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import { NgForm, FormsModule } from '@angular/forms';
import { ElementRef, ViewChild, Input } from '@angular/core';
import {  ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { EtudiantService } from '../shared/service/etudiant.service';
import { id } from '@swimlane/ngx-charts/release/utils';
import { ModalsComponent } from '../components/bootstrap/modals/modals.component';
import * as $ from 'jquery';



@Component({
  selector: 'app-salles',
  templateUrl: './salles.component.html',
  styleUrls: ['./salles.component.scss'],
  providers: [NgbPaginationConfig] // add NgbPaginationConfig to the component providers
})
export class SallesComponent implements OnInit {
  salle: Salle;
  salles: Salle[];
  

  
  constructor(
    private salleservice: SalleService,
    private modalService: NgbModal,
    private router: Router,
    private route: ActivatedRoute ,
   

  ) {
   }



  ngOnInit() {
    this.getallSalles();
  }



  getallSalles() {

    this.salleservice.getSalles().subscribe(data => {
  
    console.log(data)
    var data = JSON.parse(data._body);
     this.salles = (data.data);
   
      this.salles.forEach(element => {
        element.selected = false;
      });
    })
  }
  switch(id) {
    this.salles.forEach(element => {
      if (element.id === id) {
        element.selected = !element.selected;
      }
    });
  }

  delete() {
    this.salles.forEach((element, index) => {

      if (element.selected == true) {
        console.log(element.id);
        this.salles.splice(index, 1);
        this.salleservice.deleteSalle(element.id).subscribe(data => {
        //  this.salle = JSON.parse(data._body)
          var data = JSON.parse(data._body);
          this.salle= (data.data);
        })
      }

    });
  }


  
}
