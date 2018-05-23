
import { NiveauxRoutingModule } from './niveaux-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { QuillModule } from 'ngx-quill';
import { FormsModule } from '@angular/forms';
import { NiveauxComponent } from './niveaux.component';

@NgModule({
  imports: [
      CommonModule,
      NiveauxRoutingModule,
      NgbModule,
      QuillModule,
      FormsModule, 
  
  ],
  declarations: [
    NiveauxComponent  
    
  ],
  providers: [],
  bootstrap: []
})
export class NiveauxModule { }
