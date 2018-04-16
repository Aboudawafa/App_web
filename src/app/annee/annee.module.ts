import { QuillModule } from 'ngx-quill';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnneeComponent } from './annee.component';
import { AnneeRoutingModule } from './annee-routing.module';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [
      CommonModule,
      AnneeRoutingModule,
      NgbModule,
      QuillModule,
      FormsModule, 
  
  ],
  declarations: [
    AnneeComponent,
  
    
  ],
  providers: [],
  bootstrap: []
})
export class AnneeModule { }
