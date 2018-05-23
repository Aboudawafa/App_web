
import { NgbdModalContent } from './../components/bootstrap/modals/modals.component';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { QuillModule } from 'ngx-quill'
import { FormsModule } from '@angular/forms';
import { AddseanceRoutingModule } from './addseance-routing.module';
import { AddseanceComponent } from './addseance.component';


@NgModule({
    imports: [
        CommonModule,
        AddseanceRoutingModule,
        NgbModule,
        QuillModule,
        FormsModule, 
    
    ],
    declarations: [
      AddseanceComponent,
    
      
    ],
    providers: [],
    bootstrap: []
})
export class AddseanceModule { }
