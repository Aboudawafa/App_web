import { Etudiant } from './../shared/modals/etudiant';
import { NgForm } from '@angular/forms';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Mail, Message } from './inbox.model';
import { EtudiantService } from '../shared/service/etudiant.service';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss'],
  providers: [EtudiantService]
})
export class InboxComponent implements OnInit {

  etudiant: Etudiant;
  etudiants: Etudiant[];


  constructor(private etudiantservice :EtudiantService,
  ) {
  
  }
  ngOnInit() {

  }


  getallEtudiants() {

    this.etudiantservice.getAllEtudiants(this.etudiants).subscribe(data => {
      console.log(data);
  }) 
  }
/*getallEtudiants()
{
        this.etudiantservice.getEtudiants(this.etudiantForm.value).subscribe(data => {
              console.log(data);
          }) 
        
*/
}

 

