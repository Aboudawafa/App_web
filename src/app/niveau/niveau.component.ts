import { Component, OnInit } from '@angular/core';
import { Niveau } from '../shared/modals/niveau';
import { NiveauService } from '../shared/service/niveau.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-niveau',
  templateUrl: './niveau.component.html',
  styleUrls: ['./niveau.component.scss']
})
export class NiveauComponent implements OnInit {



    public niveau = new Niveau();
    public niveaux = new Array<Niveau>();
  

  
    constructor(
      private niveauservice: NiveauService,
      private router: Router,
      private route: ActivatedRoute,
    ) { }
  
    ngOnInit() {
     
    }
    addniveau() {
      console.log(this.niveau);
      this.niveauservice.addNiveau(this.niveau).subscribe((data) => {
        console.log("niveau");
        console.log(data);
  
  
        this.router.navigate(['niveaux']);
  
  
      },
        (err: any) => console.log(err));
  
    }
  
  
  
  }
  