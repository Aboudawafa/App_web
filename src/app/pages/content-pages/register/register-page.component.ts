import { Classe } from './../../../shared/modals/classe';
import { EtudiantService } from './../../../shared/service/etudiant.service';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";
import { Etudiant } from '../../../shared/modals/etudiant';
import { NgModel } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ClasseService } from '../../../shared/service/classe.service';

@Component({
    selector: 'app-register-page',
    templateUrl: './register-page.component.html',
    styleUrls: ['./register-page.component.scss']
})

export class RegisterPageComponent  {
  filesToUpload: Array<File> = []; 

  image:File;
  @ViewChild('fileInput') fileInput: ElementRef;
 
    private isUpdating = false;
classe:Classe;
classes:Classe[];
  /* public etudiant:{

    id: number;
 email: string;
 firstName:  string;
 lastName : string;
 cin:number;
 date_naissance:Date;
 username: string;
 password: string;

 selected:boolean;

       
       } = {
        id: 0,
        email: "",
        firstName:  "",
        lastName : "",
        cin:0,
        date_naissance:new Date,
        username: "",
        password: "",
        
     
        selected:false,
       }; */
       etudiant:Etudiant;
    etudiants: Etudiant[];

    constructor(
        private registerEtudiant: EtudiantService,
        private router: Router,
        private etudiantservice:EtudiantService,
        private classeservice:ClasseService,
        private route: ActivatedRoute ,
        public activeModal: NgbActiveModal,
      ) { }

      fileChangeEvent(fileInput: any) {
        this.image = fileInput.target.files;
        
           this.etudiant.photo = this.image[0];
         } 

      ngOnInit() {
      
    this.etudiantservice.etudiants.subscribe(data=> {
           this.etudiant = data;
           this.isUpdating = true;
           })
              ;

              this.getallClasse();
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
                this.router.navigate(['etudiant']);
              
              },
              (err: any) => console.log(err));
              
          }
          
    }

    getallClasse() {

      this.classeservice.getClasses().subscribe(data => {
        console.log(data)
        var data = JSON.parse(data._body);
        this.classes = (data.data);
        this.classes.forEach(element => {
        });
      })
    }
}