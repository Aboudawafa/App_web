
import { NgbdModalContent } from './../components/bootstrap/modals/modals.component';

import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { QuillModule } from 'ngx-quill'

import { FormsModule } from '@angular/forms';
import { EmploisComponent } from './emplois.component';
import { EmploisRoutingModule } from './emplois-routing.module';
import { EmploiComponent } from '../emploi/emploi.component';


@NgModule({
    imports: [
        CommonModule,
       EmploisRoutingModule,
        NgbModule,
        QuillModule,
        FormsModule, 
    
    ],
    declarations: [
        EmploisComponent,
        EmploiComponent,
    
      
    ],
    providers: [],
    bootstrap: [],
    entryComponents: [EmploiComponent],
})
export class EmploisModule { }
