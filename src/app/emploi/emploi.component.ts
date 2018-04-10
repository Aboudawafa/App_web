
import { NgForm } from '@angular/forms';
import { SeanceService } from './../shared/service/seance.service';
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
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Seance } from '../shared/modals/seance';


@Component({
  selector: 'app-emploi',
  templateUrl: './emploi.component.html',
  styleUrls: ['./emploi.component.scss']
})
export class EmploiComponent implements OnInit {
  @ViewChild('f') SeanceForm: NgForm;
  id_matiere: Matiere;
  matieres: Matiere[];
  etudiant: Etudiant;
  etudiants: Etudiant[];
  id_classe: Classe;
  classes: Classe[];
  id_salle: Salle;
  salles: Salle[];
  id_annee: Annee;
  annees: Annee[];
  seance:Seance;
  seances:Seance[];
  constructor(
    private router: Router,
    private route: ActivatedRoute ,
    private matiereservice:MatiereService,
    public activeModal: NgbActiveModal,
    private etudiantservice:EtudiantService,
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

  /*  this.seanceservice.seances.subscribe(data=> {
      this.seance = data;
   
      })
         ;*/
      }
  

/***************add seance********************** */
  onSubmit() {
    console.log(this.SeanceForm.value);
    
  this.seanceservice.addSeance(this.SeanceForm.value).subscribe(data => {
        console.log("data angular :"+data);
     
    }) 
    this.SeanceForm.reset();
}


  getallEtudiants() {

    this.etudiantservice.getAllEtudiants().subscribe(data => {

      this.etudiants = JSON.parse(data._body);
      this.etudiants.forEach(element => {
      });
    })
  }
  getallMatieres() {

    this.matiereservice.getMatieres().subscribe(data => {

      this.matieres = JSON.parse(data._body);
      this.matieres.forEach(element => {
      });
    })
  }

  getallClasses() {

    this.classeservice.getClasses().subscribe(data => {

      this.classes = JSON.parse(data._body);
      this.classes.forEach(element => {
      });
    })
  }

  getallSalles() {

    this.salleservice.getSalles().subscribe(data => {

      this.salles = JSON.parse(data._body);
      this.salles.forEach(element => {
      });
    })
  }

  getanneeUniver() {

    this.anneeservice.getAnnees().subscribe(data => {

      this.annees = JSON.parse(data._body);
      this.annees.forEach(element => {
      });
    })
  }

















}
