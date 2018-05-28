import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NoteinfosComponent } from '../../noteinfos/noteinfos.component';
import { NoteinfoService } from '../service/noteinfo.service';


@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent  extends NoteinfosComponent {

    currentLang = 'en';
    toggleClass = 'ft-maximize';
    constructor(public translate: TranslateService,public servicenoteinfo: NoteinfoService) {
       
        super(servicenoteinfo); 
      /*   console.log(this.servicenoteinfo.getnoteinfonotread);
        console.log(this.servicenoteinfo.getcountnoteinfonotread); */
        const browserLang: string = translate.getBrowserLang();
        translate.use(browserLang.match(/en|es|pt|de/) ? browserLang : 'en');
    }

    ChangeLanguage(language: string) {
        this.translate.use(language);
    }

    ToggleClass() {
        if (this.toggleClass === 'ft-maximize') {
            this.toggleClass = 'ft-minimize';
        }
        else
            this.toggleClass = 'ft-maximize'
    }





    
}
