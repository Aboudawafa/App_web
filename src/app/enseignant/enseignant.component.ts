import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { EnseignantService } from '../shared/service/enseignant.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Enseignant } from '../shared/modals/enseignant';



@Component({
  selector: 'app-enseignant',
  templateUrl: './enseignant.component.html',
  styleUrls: ['./enseignant.component.scss']
})
export class EnseignantComponent implements OnInit {

  /*enseignant:Enseignant;
  enseignants: Enseignant[];*/
  private isUpdating = false;    
public enseignant =new Enseignant();
public enseignants=new Array<Enseignant>();


/*public enseignant:{

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
     };
     enseignants: Enseignant[];*/

  constructor(

    private enseignantservice: EnseignantService,
   /* private activeModal: NgbActiveModal,*/
    private router: Router,
    private route: ActivatedRoute ,
  ) { }

  ngOnInit() {
    this.enseignantservice.enseignants.subscribe(data=> {
      this.enseignant = data;
      this.isUpdating = true;
      })
         ;
  }

 addEnseignant(){


  this.enseignantservice.addEnseignant(this.enseignant)
  .subscribe((data) => {
    console.log(data);
  
  },
  (err: any) => console.log(err));
  
}
 

  /*onsubmit() {
    
 

         if (this.isUpdating && this.enseignant.id !== undefined) {

           this.enseignantservice.updateEnseignant(this.enseignant.id, this.enseignant)
             .subscribe(data => {
             
             },
             (err: any) => console.log(err));
   
         } 
         else {
   
           this.enseignantservice.addEnseignant(this.enseignant)
             .subscribe((data) => {
               console.log(data);
             
             },
             (err: any) => console.log(err));
             
         }
         
   }*/




}
