
import { NgbdModalContent } from './../components/bootstrap/modals/modals.component';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { QuillModule } from 'ngx-quill'
import { FormsModule } from '@angular/forms';
import { AbsenceComponent } from './absence.component';
import { AbsenceRoutingModule } from './absence-routing.module';


@NgModule({
    imports: [
        CommonModule,
        NgbModule,
        AbsenceRoutingModule,
        QuillModule,
        FormsModule, 
    
    ],
    declarations: [
        AbsenceComponent,
    
      
    ],
    providers: [],
    bootstrap: []
})
export class AbsenceModule { }

