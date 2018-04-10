import { Dashboard1Component } from './../../../dashboard/dashboard1/dashboard1.component';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";
import { AuthServices } from '../../../shared/service/auth.service';
import { CookieService } from 'ngx-cookie-service';


@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.scss'],
    providers: [AuthServices, CookieService]
})


export class LoginPageComponent {
  
    @ViewChild('f') loginForm: NgForm;

    constructor(
        private auth: AuthServices,
        private router: Router,
        private route: ActivatedRoute ,
        private cookieService : CookieService) { }

    // On submit button click    
    onSubmit() {
        console.log(this.loginForm.value);
      this.auth.authEtudiant(this.loginForm.value).subscribe(data => {
            console.log(data);
            var login_session_token = data.id;
            this.cookieService.set('id',login_session_token);

           this.router.navigate(['dashboard/dashboard1']); 
  
        }) 
        this.loginForm.reset();
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