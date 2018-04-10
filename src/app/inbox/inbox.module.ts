import { NgbdModalContent } from './../components/bootstrap/modals/modals.component';

import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { InboxRoutingModule } from "./inbox-routing.module";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { QuillModule } from 'ngx-quill'

import { InboxComponent} from './inbox.component';
import { FormsModule } from '@angular/forms';
import { RegisterPageComponent } from '../pages/content-pages/register/register-page.component';

@NgModule({
    imports: [
        CommonModule,
        InboxRoutingModule,
        NgbModule,
        QuillModule,
        FormsModule, 
    
    ],
    declarations: [
        InboxComponent,
    
       RegisterPageComponent,
      
    ]
    ,
    entryComponents: [RegisterPageComponent],
    providers: [],
    bootstrap: []
})
export class InboxModule { }
