import { Component } from '@angular/core';
import * as Chartist from 'chartist';
import { ChartType, ChartEvent } from "ng-chartist/dist/chartist.component";
import { EtudiantService } from '../../shared/service/etudiant.service';
import { Etudiant } from '../../shared/modals/etudiant';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
    selector: 'app-dashboard1',
    templateUrl: './dashboard1.component.html',
    styleUrls: ['./dashboard1.component.scss']
})

export class Dashboard1Component {

    etudiant: Etudiant;
    etudiants: Etudiant[];
    constructor(private etudiantservice: EtudiantService, 
  
        private router: Router,
        private route: ActivatedRoute,)
      
     {
         }
         ngOnInit() {
            this.getallEtudiants();
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
}
