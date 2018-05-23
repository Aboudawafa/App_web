
import { NgForm } from '@angular/forms';
import { Annee } from './../shared/modals/annee';
import { Etudiant } from './../shared/modals/etudiant';
import { Matiere } from './../shared/modals/matiere';
import { MatiereService } from './../shared/service/matiere.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EtudiantService } from '../shared/service/etudiant.service';
import { ClasseService } from '../shared/service/classe.service';
import { Classe } from '../shared/modals/classe';
import { SalleService } from '../shared/service/salle.service';
import { Salle } from '../shared/modals/salle';
import { AnneeService } from '../shared/service/annee.service';
import { Seance } from '../shared/modals/seance';
import { EnseignantService } from '../shared/service/enseignant.service';
import { Enseignant } from '../shared/modals/enseignant';
import { SeanceService } from '../shared/service/seance.service';



@Component({
  selector: 'app-addseance',
  templateUrl: './addseance.component.html',
  styleUrls: ['./addseance.component.scss']
})
export class AddseanceComponent implements OnInit {
 
  matiere: Matiere;
  matieres: Matiere[];
  etudiant: Etudiant;
  etudiants: Etudiant[];
  classe: Classe;
  classes: Classe[];
  salle: Salle;
  salles: Salle[];
  annee: Annee;
  annees: Annee[];
  seance:Seance;
  seances:Seance[];
  enseignant:Enseignant;
  enseignants:Enseignant[];
  constructor(
    private router: Router,
    private route: ActivatedRoute ,
    private matiereservice:MatiereService,
    private etudiantservice:EtudiantService,
    private enseignantservice:EnseignantService,
    private classeservice:ClasseService,
    private salleservice :SalleService,
    private anneeservice :AnneeService,
    private seanceservice:SeanceService

  ) { }

  ngOnInit() {
    this.getallEtudiants();
    this.getallMatieres();
    this.getallClasses();
    this.getallSalles();
    this.getanneeUniver();
    this.getallEnseignant();

  /*  this.seanceservice.seances.subscribe(data=> {
      this.seance = data;
   
      })
         ;*/
      }
  

/***************add seance********************** */
  onSubmit() {
  
    
  this.seanceservice.addSeance(this.seance).subscribe(data => {
        console.log("data  :"+data);
     
    }) 
   
}


  getallEtudiants() {

    this.etudiantservice.getAllEtudiants().subscribe(data => {
      console.log(data)
      var data = JSON.parse(data._body);
       this.etudiants = (data.data);
      this.etudiants.forEach(element => {
      });
    })
  }
  getallEnseignant() {

    this.enseignantservice.getEnseignants().subscribe(data => {
      console.log(data)
      var data = JSON.parse(data._body);
       this.enseignants = (data.data);
      this.enseignants.forEach(element => {
      });
    })
  }




  getallMatieres() {

    this.matiereservice.getMatieres().subscribe(data => {
      var data = JSON.parse(data._body);
      this.matieres  = (data.data);
      this.matieres.forEach(element => {
      });
    })
  }

  getallClasses() {

    this.classeservice.getClasses().subscribe(data => {
      var data = JSON.parse(data._body);
      this.classes  = (data.data);
      this.classes.forEach(element => {
      });
    })
  }

  getallSalles() {

    this.salleservice.getSalles().subscribe(data => {
      var data = JSON.parse(data._body);
      this.salles  = (data.data);
      this.salles.forEach(element => {
      });
    })
  }

  getanneeUniver() {

    this.anneeservice.getAnnees().subscribe(data => {
      var data = JSON.parse(data._body);
      this.annees  = (data.data);
     // this.annees = JSON.parse(data._body);
      this.annees.forEach(element => {
      });
    })}


}
