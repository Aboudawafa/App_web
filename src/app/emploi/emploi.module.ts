
import { NgbdModalContent } from './../components/bootstrap/modals/modals.component';

import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { QuillModule } from 'ngx-quill'

import { FormsModule } from '@angular/forms';

import { EmploiComponent } from './emploi.component';
import { EmploiRoutingModule } from './emploi-routing.module';

@NgModule({
    imports: [
        CommonModule,
       EmploiRoutingModule,
        NgbModule,
        QuillModule,
        FormsModule, 
    
    ],
    declarations: [
        EmploiComponent,
    
      
    ],
    providers: [],
    bootstrap: []
})
export class EmploiModule { }
