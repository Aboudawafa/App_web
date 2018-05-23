import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Actualite } from '../shared/modals/actualite';
import { ActualiteService } from '../shared/service/actualite.service';
import { FileSelectDirective, FileUploader } from 'ng2-file-upload';
import { FormData } from '../forms/ngx-wizard/data/formData.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-actualite',
  templateUrl: './actualite.component.html',
  styleUrls: ['./actualite.component.scss']
})
export class ActualiteComponent implements OnInit {
  filesToUpload: Array<File> = []; 


 @ViewChild('fileInput') fileInput: ElementRef;

  public actualite = new Actualite();
  public actualites = new Array<Actualite>();
  constructor(

    private serviceactualite: ActualiteService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    
  }
 
  fileChangeEvent(fileInput: any) {
 this.image = fileInput.target.files;
 
    this.actualite.actImage = this.image[0];
  } 
  ngOnInit() {

  }
image:File;
  addActualite() {
       this.serviceactualite.addActualite(this.actualite)
      .subscribe((data) => {
        this.router.navigate(['actualites']);

      },
        (err: any) => console.log('err'));

  }
}
