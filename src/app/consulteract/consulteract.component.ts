import { Component, OnInit } from '@angular/core';
import { ActualitesComponent } from '../actualites/actualites.component';
import { ActualiteService } from '../shared/service/actualite.service';
import { Actualite } from '../shared/modals/actualite';

@Component({
  selector: 'app-consulteract',
  templateUrl: './consulteract.component.html',
  styleUrls: ['./consulteract.component.scss']
})
export class ConsulteractComponent  implements OnInit {
actualite:Actualite;
actualites:Actualite[];
  constructor( private serviceactualite: ActualiteService) { 
    
  }

  ngOnInit() {
    this.getallActualites();
  }


  getallActualites() {

    this.serviceactualite.getAllActualites().subscribe(data => {
      var data = JSON.parse(data._body);
      this.actualites  = (data.data);
      this.actualites.forEach(element => {

      });
    })
  }

}
