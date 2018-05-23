
import { NgbdModalContent } from './../components/bootstrap/modals/modals.component';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { QuillModule } from 'ngx-quill'
import { FormsModule} from '@angular/forms';
import { ActualiteComponent } from './actualite.component';
import { ActualiteRoutingModule } from './actualite-routing.module';
import {FileUploadModule} from 'ng2-file-upload';
import { HttpClientModule} from '@angular/common/http';

@NgModule({
    imports: [
        CommonModule,
        ActualiteRoutingModule,
        NgbModule,
        QuillModule,
        FormsModule, 
        FileUploadModule,
        HttpClientModule
    ],
    declarations: [
        ActualiteComponent,
    
      
    ],
    providers: [],
    bootstrap: []
})
export class ActualiteModule { }
