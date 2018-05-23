import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SallesComponent } from './salles.component';
import { SallesRoutingModule } from './salles-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { QuillModule } from 'ngx-quill';
import { FormsModule } from '@angular/forms';
import { NgbdModalContent } from './../components/bootstrap/modals/modals.component';
import { AngularPaginatorModule } from 'angular-paginator';




@NgModule({
  imports: [
      CommonModule,
      SallesRoutingModule,
      NgbModule,
      QuillModule,
      FormsModule,
      AngularPaginatorModule, 
  
  ],
  declarations: [
    SallesComponent ,
  
  ],
  providers: [],
  bootstrap: []
})
export class SallesModule { }
