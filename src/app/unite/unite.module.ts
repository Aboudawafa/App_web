import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { QuillModule } from 'ngx-quill';
import { FormsModule } from '@angular/forms';
import { UniteComponent } from './unite.component';
import { UniteRoutingModule } from './unite-routing.module';


@NgModule({
  imports: [
      CommonModule,
      UniteRoutingModule,
      NgbModule,
      QuillModule,
      FormsModule, 
  
  ],
  declarations: [
    UniteComponent  
    
  ],
  providers: [],
  bootstrap: []
})
export class UniteModule { }
