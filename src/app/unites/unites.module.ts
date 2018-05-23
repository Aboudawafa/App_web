import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { QuillModule } from 'ngx-quill';
import { FormsModule } from '@angular/forms';
import { UnitesComponent } from './unites.component';
import { UnitesRoutingModule } from './unites-routing.module';


@NgModule({
  imports: [
      CommonModule,
      UnitesRoutingModule,
      NgbModule,
      QuillModule,
      FormsModule, 
  
  ],
  declarations: [
    UnitesComponent  
    
  ],
  providers: [],
  bootstrap: []
})
export class UnitesModule { }
