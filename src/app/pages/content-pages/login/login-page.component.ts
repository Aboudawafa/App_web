import { Etudiant } from './../../../shared/modals/etudiant';
import { id } from '@swimlane/ngx-charts/release/utils';
import { Dashboard1Component } from './../../../dashboard/dashboard1/dashboard1.component';
import { Component, ViewChild, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";
import { AuthServices } from '../../../shared/service/auth.service';
import { typeSuccess } from '../../../shared/data/sweet-alerts';
import { LocalStorageService, SessionStorageService, LocalStorage, SessionStorage } from 'angular-web-storage';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.scss'],
    providers: [AuthServices]
})


export class LoginPageComponent {
    @Output() id;
  
    @ViewChild('f') loginForm: NgForm;
    alertMessage = '';

    constructor(
        private auth: AuthServices,
        private router: Router,
        private route: ActivatedRoute ,
        private storage: LocalStorageService
      ) { }

    // On submit button click   
    
    onSubmit() {
     
      this.auth.authEtudiant(this.loginForm.value).subscribe(data => {
        console.log("data :"+data);

        if(data){
          localStorage.set('id',JSON.stringify(data.id));
          localStorage.set('token',JSON.stringify(data.token));
          console.log(localStorage.getItem('id'));
            this.storage.get('id').then((val) => {
              console.log('Your id is', val);
            });
            
            
          }else {
            this.alertMessage = 'Wrong login informations';
          }
        })

        this.router.navigate(['dashboard/dashboard1']); 
      /*   this.loginForm.reset(); */
    }



    logout()
    {

    }

    // On Forgot password link click
    onForgotPassword() {
        this.router.navigate(['forgotpassword'], { relativeTo: this.route.parent });
    }
    // On registration link click
    onRegister() {
        this.router.navigate(['register'], { relativeTo: this.route.parent });
}
}