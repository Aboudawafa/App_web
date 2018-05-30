
import * as jsPDF from 'jspdf';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { SeanceService } from '../shared/service/seance.service';
import { Seance } from '../shared/modals/seance';
import { Event } from '../shared/modals/event';
import {DayPilot, DayPilotModule} from "daypilot-pro-angular";
import { Salle } from '../shared/modals/salle';



@Component({
  selector: 'app-genereremploi',
  templateUrl: './genereremploi.component.html',
  styleUrls: ['./genereremploi.component.scss']
})

export class GenereremploiComponent {
  @ViewChild('content') content:ElementRef;
  seances: Seance[];
  listeSeances : Event[];
  seanace:Event;
  config: any = {
    dayNames:['Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'],
    eventMoveHandling :"Disabled",
    eventResizeHandling :"Disabled",
    timeRangeSelectedHandling : "Disabled",
    viewType: "Week",
    theme: 'emploitemplate',
    startDate: DayPilot.Date.today(),
    timeFormat:"Clock24Hours",
    dayBeginsHour: 8,
    dayEndsHour: 19,
    timeHeaders: [
      { groupBy: "Month", format: "MMMM yyyy" },
      { groupBy: "Day", format: "d" }
    ],
    weekStarts: 1,
    locale: "fr-fr",
    resources: [
      { name: "Resource 1", id: "R1"} 
    ]
    
    
  }

  constructor(
    private seanceservice: SeanceService
  ) {
 
  }

  downloadPDF(){
let doc= new jsPDF();
let specialElementHandlers={
  '#editor':function(element,renderer){
    return true;
  }
};
let content=this.content.nativeElement;
doc.fromHTML(content.innerHtml,15,15, {
'width':190,
'elementHandlers':specialElementHandlers
});
doc.save('test.pdf');
  }
  
  
  ngOnInit() {
    this.getallSeance();
  }
  
  getallSeance() {

    this.seanceservice.getSeances().subscribe(data => {
      var data = JSON.parse(data._body);
      this.seances  = data.data.map(element => {
        element.text = element.enseignant.firstName+"  " +element.enseignant.lastName+ "\n Matiére:" + element.matiere.nom +" Salle:"+element.salle.nom_salle ;
    
        element.start = new Date(new Date(element.date_debut).setTime(new Date(element.date_debut).getTime() + 60*60*1000)).toISOString();
        element.end = new Date(new Date(element.date_fin).setTime(new Date(element.date_fin).getTime() + 60*60*1000)).toISOString();
        element.resource = 'R1';
        return element;
      })
      console.log(this.seances);
    })
  }
  

}

