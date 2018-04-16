import { QuillModule } from 'ngx-quill';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [
      CommonModule,
      AdminRoutingModule,
      NgbModule,
      QuillModule,
      FormsModule, 
  
  ],
  declarations: [
      AdminComponent,
  
    
  ],
  providers: [],
  bootstrap: []
})
export class AdminModule { }
