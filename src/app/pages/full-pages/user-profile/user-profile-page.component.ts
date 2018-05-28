import { Component, OnInit, Input } from '@angular/core';
import { EtudiantService } from '../../../shared/service/etudiant.service';
import { Etudiant } from '../../../shared/modals/etudiant';

@Component({
    selector: 'app-user-profile-page',
    templateUrl: './user-profile-page.component.html',
    styleUrls: ['./user-profile-page.component.scss']
})

export class UserProfilePageComponent implements OnInit{
    etudiant: Etudiant;

    @Input() id;

    constructor(private etudiantservice: EtudiantService){
        console.log("id after input:"+this.id);
        this.etudiant = JSON.parse(sessionStorage.getItem('id'));
        console.log(this.etudiant);
    }
    //Variable Declaration
    currentPage: string = "About"

    ngOnInit() {
        // Horizontal Timeline js for user timeline
        $.getScript('./assets/js/vertical-timeline.js');

        
       this.etudiant = JSON.parse(localStorage.getItem('id'));
        console.log(this.etudiant);
        //this.getEtudiantById();
    }

    showPage(page: string) {
        this.currentPage = page;
    }

    // getEtudiantById() {
    //     console.log(" start this.etudiant");
    //     console.log(this.etudiant);
    //     console.log(this.etudiant.id);
    //     this.etudiantservice.getEtudiantbyId(this.etudiant.id).subscribe(data => {
    //         console.log(data);
    //     var data = JSON.parse(data._body);
    //      this.etudiant = (data.data);
    //      console.log(this.etudiant);
        
    //     })
    //   }

}