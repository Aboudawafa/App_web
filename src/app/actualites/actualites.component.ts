import { Component, OnInit } from '@angular/core';
import { ActualiteService } from '../shared/service/actualite.service';
import { Actualite } from '../shared/modals/actualite';

@Component({
  selector: 'app-actualites',
  templateUrl: './actualites.component.html',
  styleUrls: ['./actualites.component.scss']
})
export class ActualitesComponent implements OnInit {
actualite:Actualite;
actualites:Actualite[];
  constructor(
    private serviceactualite: ActualiteService,
  ) { }

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

  switch(id) {
    this.actualites.forEach(element => {
      if (element.id === id) {
        element.selected = !element.selected;
 

      }
    });
  }

  delete() {
    this.actualites.forEach((element, index) => {

      if (element.selected == true) {
        console.log(element.id);
        this.actualites.splice(index, 1);
        this.serviceactualite.deleteActualite(element.id).subscribe(data => {
          this.actualite = JSON.parse(data._body)
        })
      }

    });
  }}
