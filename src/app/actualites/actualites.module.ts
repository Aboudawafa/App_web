
import { NgbdModalContent } from './../components/bootstrap/modals/modals.component';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { QuillModule } from 'ngx-quill'
import { FormsModule } from '@angular/forms';
import { ActualitesComponent } from './actualites.component';
import { ActualitesRoutingModule } from './actualites-routing.module';

@NgModule({
    imports: [
        CommonModule,
        ActualitesRoutingModule,
        NgbModule,
        QuillModule,
        FormsModule, 
    
    ],
    declarations: [
        ActualitesComponent,
    
      
    ],
    providers: [],
    bootstrap: []
})
export class ActualitesModule { }
