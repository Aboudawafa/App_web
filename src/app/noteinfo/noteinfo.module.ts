
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { QuillModule } from 'ngx-quill';
import { FormsModule } from '@angular/forms';
import { NoteinfoRoutingModule } from './noteinfo-routing.module';
import { NoteinfoComponent } from './noteinfo.component';


@NgModule({
  imports: [
      CommonModule,
      NoteinfoRoutingModule,
      NgbModule,
      QuillModule,
      FormsModule, 
  
  ],
  declarations: [
    NoteinfoComponent  
    
  ],
  providers: [],
  bootstrap: []
})
export class NoteinfoModule { }
