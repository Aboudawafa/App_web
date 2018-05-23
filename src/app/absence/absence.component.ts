import { CookieService } from 'ngx-cookie-service';
import { Component, OnInit } from '@angular/core';
import { AbsenceEtudiantService } from '../shared/service/absence-etudiant.service';
import { Absence } from '../shared/modals/absence';

@Component({
  selector: 'app-absence',
  templateUrl: './absence.component.html',
  styleUrls: ['./absence.component.scss'],
  providers: [ CookieService]
})
export class AbsenceComponent implements OnInit {


  absence :Absence;
  absences:Absence[];
  constructor(

    private cookieService : CookieService,
    private absenceetuservice : AbsenceEtudiantService,
  ) {

   }

  ngOnInit() {
  }


  getAbsenceById(id) {

  
    this.absenceetuservice.getAbsencebyid(id).subscribe(data => {

      this.absences = JSON.parse(data._body);

  
    })
  }



}
