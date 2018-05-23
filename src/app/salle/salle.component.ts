import { Router, ActivatedRoute } from '@angular/router';
import { Salle } from './../shared/modals/salle';
import { Component, OnInit } from '@angular/core';
import { SalleService } from '../shared/service/salle.service';

@Component({
  selector: 'app-salle',
  templateUrl: './salle.component.html',
  styleUrls: ['./salle.component.scss']
})
export class SalleComponent implements OnInit {
 /* salle: Salle;
  salles: Salle[];*/

  public salle = new Salle();
  public salles = new Array<Salle>();
  constructor(
    private salleservice: SalleService,
    private router: Router,
    private route: ActivatedRoute ,

  ) { }

  ngOnInit() {   
  }          
  AddSalle() {

    this.salleservice.addSalle(this.salle)
      .subscribe((data) => {
        console.log(data);
        this.router.navigate(['salles']); 
      },
        (err: any) => console.log(err));
        
       // this.Form.reset();
  }






}
