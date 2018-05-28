import { Component, OnInit } from '@angular/core';
import { NoteinfoService } from '../shared/service/noteinfo.service';
import { Noteinfos } from '../shared/modals/noteinfo';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-noteinfo',
  templateUrl: './noteinfo.component.html',
  styleUrls: ['./noteinfo.component.scss']
})
export class NoteinfoComponent implements OnInit {

 
   public noteinfo = new Noteinfos();
   public noteinfos = new Array<Noteinfos>();
   constructor(
 
     private servicenoteinfo: NoteinfoService,
     private router: Router,
     private route: ActivatedRoute,
 
   ) {
     
   }
   
   ngOnInit() {
 
   }

   addnoteinfo() {
        this.noteinfo.read_notification=0;
        this.servicenoteinfo.addnoteinfo(this.noteinfo)
       .subscribe((data) => {
      
        this.router.navigate(['noteinfos']);
       },
         (err: any) => console.log('err'));
 
   }
 }
 