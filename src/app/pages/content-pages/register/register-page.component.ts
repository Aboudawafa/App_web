import { EtudiantService } from './../../../shared/service/etudiant.service';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";
import { Etudiant } from '../../../shared/modals/etudiant';
import { NgModel } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-register-page',
    templateUrl: './register-page.component.html',
    styleUrls: ['./register-page.component.scss']
})

export class RegisterPageComponent  {
    private isUpdating = false;


  public etudiant:{

        id:number;
        nom:string;
        prenom:string;
        cin:number;
        date_naissance:Date;
        email:string;
        username:string;
        password:string;
        selected:boolean;
       
       
       } = {
        id:0,
        nom:"",
        prenom:"",
        cin:0,
        date_naissance:new Date,
        email:"",
        username:"",
        password:"",
        selected:false,
       };
    etudiants: Etudiant[];

    constructor(
        private registerEtudiant: EtudiantService,
        private router: Router,
        private etudiantservice:EtudiantService,
        private route: ActivatedRoute ,
        public activeModal: NgbActiveModal,
      ) { }

   

      ngOnInit() {
      
    this.etudiantservice.etudiants.subscribe(data=> {
           this.etudiant = data;
           this.isUpdating = true;
           })
              ;
           }
    onsubmit() {
    
     /*   this.registerEtudiant.addEtudiant(this.etudiant).subscribe(data => {
              console.log(data);
          }) */

          if (this.isUpdating && this.etudiant.id !== undefined) {

            this.etudiantservice.updateEtudiant(this.etudiant.id, this.etudiant)
              .subscribe(data => {
              
              },
              (err: any) => console.log(err));
    
          } 
          else {
    
            this.etudiantservice.addEtudiant(this.etudiant)
              .subscribe((data) => {
                console.log(data);
              
              },
              (err: any) => console.log(err));
              
          }
          
    }
}