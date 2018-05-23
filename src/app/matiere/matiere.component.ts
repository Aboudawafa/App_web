import { Unite } from './../shared/modals/unite';
import { Component, OnInit } from '@angular/core';
import { Matiere } from '../shared/modals/matiere';
import { MatiereService } from '../shared/service/matiere.service';
import { UniteService } from '../shared/service/unite.service';

@Component({
  selector: 'app-matiere',
  templateUrl: './matiere.component.html',
  styleUrls: ['./matiere.component.scss']
})
export class MatiereComponent implements OnInit {

  public matiere =new Matiere();
public matieres=new Array<Matiere>();
unite: Unite;
unites: Unite[];
  constructor(
    private matiereservice :MatiereService,
    private uniteService: UniteService,
  ) { }

  ngOnInit() {
    this.getallUnites();
  }




  addMatiere()
  {

    this.matiereservice.addMatiere(this.matiere).subscribe((data) => {
   //   console.log(data);


     // this.router.navigate(['matieres']);


    },
      (err: any) => console.log(err));

  }

  getallUnites() {

    this.uniteService.getUnites().subscribe(data => {
      console.log(data)
      var data = JSON.parse(data._body);
      this.unites = (data.data);
      this.unites.forEach(element => {
      });
    })
  }
}
