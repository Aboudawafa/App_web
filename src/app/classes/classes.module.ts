import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassesComponent } from './classes.component';
import { ClassesRoutingModule } from './classes-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { QuillModule } from 'ngx-quill';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
      CommonModule,
      ClassesRoutingModule,
      NgbModule,
      QuillModule,
      FormsModule, 
  
  ],
  declarations: [
ClassesComponent  
    
  ],
  providers: [],
  bootstrap: []
})
export class ClassesModule { }
