import { NiveauRoutingModule } from './niveau-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { QuillModule } from 'ngx-quill';
import { FormsModule } from '@angular/forms';
import { NiveauComponent } from './niveau.component';

@NgModule({
  imports: [
      CommonModule,
      NiveauRoutingModule,
      NgbModule,
      QuillModule,
      FormsModule, 
  
  ],
  declarations: [
    NiveauComponent  
    
  ],
  providers: [],
  bootstrap: []
})
export class NiveauModule { }
