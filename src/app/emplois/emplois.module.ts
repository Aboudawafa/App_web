
import { NgbdModalContent } from './../components/bootstrap/modals/modals.component';

import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { QuillModule } from 'ngx-quill'

import { FormsModule } from '@angular/forms';
import { EmploisComponent } from './emplois.component';
import { EmploisRoutingModule } from './emplois-routing.module';
import { FilterPipe } from './filter.directive';
import { FilterPipeJour } from './filter.directivejour';


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
        FilterPipe,
       FilterPipeJour,

    
      
    ],
    providers: [],
    bootstrap: [],
   
})
export class EmploisModule { }
