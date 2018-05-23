import { Etudiant } from './../../../shared/modals/etudiant';
import { id } from '@swimlane/ngx-charts/release/utils';
import { Dashboard1Component } from './../../../dashboard/dashboard1/dashboard1.component';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";
import { AuthServices } from '../../../shared/service/auth.service';
import { typeSuccess } from '../../../shared/data/sweet-alerts';


@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.scss'],
    providers: [AuthServices]
})


export class LoginPageComponent {
  

    @ViewChild('f') loginForm: NgForm;
  /*   loginForm={
        email:'',
        password:''
    } */

    constructor(
        private auth: AuthServices,
        private router: Router,
        private route: ActivatedRoute ,
      ) { }

    // On submit button click    
    onSubmit() {
     
      this.auth.authEtudiant(this.loginForm.value).subscribe(data => {
        

            if(data){
            
                   localStorage.setItem('id', JSON.stringify( data.id ));
                 /*   var token = JSON.parse(localStorage.getItem('token'));
                   var token = data.token; // your token */


            }else{
                localStorage.setItem('token',null);
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