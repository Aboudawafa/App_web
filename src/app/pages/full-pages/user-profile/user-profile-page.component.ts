import { Component, OnInit, Input } from '@angular/core';
import { EtudiantService } from '../../../shared/service/etudiant.service';
import { Etudiant } from '../../../shared/modals/etudiant';
import { LocalStorageService,LocalStorage } from 'angular-web-storage';

@Component({
    selector: 'app-user-profile-page',
    templateUrl: './user-profile-page.component.html',
    styleUrls: ['./user-profile-page.component.scss']
})

export class UserProfilePageComponent implements OnInit{
    etudiant: Etudiant;

    constructor(private etudiantservice: EtudiantService,private storage: LocalStorageService){
   
    }
   


    ngOnInit() {
        let user = JSON.parse(localStorage.getItem('id'));
       console.log('user :'+user)
        this.storage.get('id').then((val) => {
            console.log(val);
            this.etudiantservice.getEtudiantbyId(val).subscribe(data => {
              this.etudiant =  (data.data);
            
              console.log(data.data)
            
            });
            })
}

}
