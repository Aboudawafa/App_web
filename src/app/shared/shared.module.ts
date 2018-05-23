
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { FooterComponent } from "./footer/footer.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { CustomizerComponent } from './customizer/customizer.component';
import { NotificationSidebarComponent } from './notification-sidebar/notification-sidebar.component';
import { ToggleFullscreenDirective } from "./directives/toggle-fullscreen.directive";
import { EnseignantService } from './service/enseignant.service';
import { EtudiantService } from './service/etudiant.service';
import{ AdminService } from './service/admin.service';
import{ MatiereService } from './service/matiere.service';
import{ SeanceService } from './service/seance.service';
import{ SalleService } from './service/salle.service';
import{ NiveauService } from './service/niveau.service';
import{ AnneeService } from './service/annee.service';
import{ UniteService } from './service/unite.service';
import{ ClasseService } from './service/classe.service';
import{ AbsenceService } from './service/absence.service';
import{ NoteService } from './service/note.service';
import{ TypeService } from './service/types.service';
import { AuthServices } from './service/auth.service';
import { HttpModule } from '@angular/http';

@NgModule({
    exports: [
        CommonModule,
        FooterComponent,
        NavbarComponent,
        SidebarComponent,
        CustomizerComponent,
        NotificationSidebarComponent,
        ToggleFullscreenDirective,
        NgbModule,
        TranslateModule,

    ],
    imports: [
        RouterModule,
        CommonModule,
        NgbModule,
        TranslateModule,
        HttpModule
    ],
    declarations: [
        FooterComponent,
        NavbarComponent,
        SidebarComponent,
        CustomizerComponent,
        NotificationSidebarComponent,
        ToggleFullscreenDirective
    ]
})
export class SharedModule { }
