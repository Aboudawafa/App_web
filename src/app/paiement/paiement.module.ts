
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { QuillModule } from 'ngx-quill';
import { FormsModule } from '@angular/forms';
import { PaiementComponent } from './paiement.component';
import { PaiementRoutingModule } from './paiement-routing.module';


@NgModule({
  imports: [
      CommonModule,
      PaiementRoutingModule,
      NgbModule,
      QuillModule,
      FormsModule, 
  ],
  declarations: [
    PaiementComponent  
    
  ],
  providers: [],
  bootstrap: []
})
export class PaiementModule { }
