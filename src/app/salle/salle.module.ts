import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalleComponent } from './salle.component';
import { SalleRoutingModule } from './salle-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { QuillModule } from 'ngx-quill';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
      CommonModule,
      SalleRoutingModule,
      NgbModule,
      QuillModule,
      FormsModule, 
  
  ],
  declarations: [
    SalleComponent  
    
  ],
  providers: [],
  bootstrap: []
})
export class SalleModule { }
