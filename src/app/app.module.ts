import { SalleService } from './shared/service/salle.service';
import { FormsModule } from '@angular/forms';
import { EtudiantService } from './shared/service/etudiant.service';

import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from "./shared/shared.module";
import { ToastModule, ToastOptions } from 'ng2-toastr/ng2-toastr';
import { AgmCoreModule } from '@agm/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { ContentLayoutComponent } from "./layouts/content/content-layout.component";
import { FullLayoutComponent } from "./layouts/full/full-layout.component";
import { CustomOption } from "./shared/toastr/custom-option";
import { AuthService } from './shared/auth/auth.service';
import { AuthGuard } from './shared/auth/auth-guard.service';
import * as $ from 'jquery';
import { AuthServices } from './shared/service/auth.service';
import { ModalsComponent } from './components/bootstrap/modals/modals.component';
import { MatiereService } from './shared/service/matiere.service';
import { ClasseService } from './shared/service/classe.service';
import { SeanceService } from './shared/service/seance.service';
import { AnneeService } from './shared/service/annee.service';
import { ActualiteComponent } from './actualite/actualite.component';
import { AbsenceComponent } from './absence/absence.component';
import { ClasseComponent } from './classe/classe.component';
import { MatiereComponent } from './matiere/matiere.component';
import { NiveauComponent } from './niveau/niveau.component';
import { NoteComponent } from './note/note.component';
import { PaiementComponent } from './paiement/paiement.component';
import { SalleComponent } from './salle/salle.component';
import { SpecialiteComponent } from './specialite/specialite.component';
import { UniteComponent } from './unite/unite.component';
import { TypeNoteComponent } from './type-note/type-note.component';
import { AnneeComponent } from './annee/annee.component';
import { AdminComponent } from './admin/admin.component';



export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
  }
 
@NgModule({
    declarations: [
        AppComponent,
        FullLayoutComponent,
        ContentLayoutComponent,
       
        
    ],
    imports: [
        BrowserAnimationsModule,
        StoreModule.forRoot({}),
        AppRoutingModule,
        SharedModule,
        HttpClientModule,
        FormsModule ,
        ToastModule.forRoot(),
        NgbModule.forRoot(),
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [HttpClient]
              }
        }),
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyBr5_picK8YJK7fFR2CPzTVMj6GG1TtRGo'
        })
    ],
    providers: [
        //Toastr and auth providers
        { provide: ToastOptions, useClass: CustomOption },
        AuthService,
        AuthServices,
        AuthGuard,
        EtudiantService,
        MatiereService,
        ClasseService,
        SalleService,
        AnneeService,
        SeanceService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }