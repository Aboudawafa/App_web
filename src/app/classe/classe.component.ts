import { NiveauService } from './../shared/service/niveau.service';
import { Component, OnInit } from '@angular/core';
import { Classe } from '../shared/modals/classe';
import { ClasseService } from '../shared/service/classe.service';
import { Niveau } from '../shared/modals/niveau';
import { Router, ActivatedRoute } from '@angular/router';
import { id } from '@swimlane/ngx-charts/release/utils';

@Component({
  selector: 'app-classe',
  templateUrl: './classe.component.html',
  styleUrls: ['./classe.component.scss']
})
export class ClasseComponent implements OnInit {
  /*  classe: Classe;
    classes: Classe[];*/

  public classe = new Classe();
  public classes = new Array<Classe>();
  niveau: Niveau;
  niveaux: Niveau[];

  constructor(

    private classeservice: ClasseService,
    private niveauservice: NiveauService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.getallNiveaux();
  }
  addClasse() {
    console.log(this.classe);
    this.classeservice.addClasse(this.classe).subscribe((data) => {
      console.log("classe");
      console.log(data);


      this.router.navigate(['classes']);


    },
      (err: any) => console.log(err));

  }

  getallNiveaux() {

    this.niveauservice.getNiveaus().subscribe(data => {
      console.log(data)
      var data = JSON.parse(data._body);
      this.niveaux = (data.data);

    })
  }

}
