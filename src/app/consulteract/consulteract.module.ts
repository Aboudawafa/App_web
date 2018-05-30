
import { NgbdModalContent } from './../components/bootstrap/modals/modals.component';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { QuillModule } from 'ngx-quill'
import { FormsModule } from '@angular/forms';
import { ConsulteractRoutingModule } from './consulteract-routing.module';
import { ConsulteractComponent } from './consulteract.component';


@NgModule({
    imports: [
        CommonModule,
        ConsulteractRoutingModule,
        NgbModule,
        QuillModule,
        FormsModule, 
    
    ],
    declarations: [
      ConsulteractComponent,
    
      
    ],
    providers: [],
    bootstrap: []
})
export class  ConsulteractModule { }






