import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { RegistrationComponent } from './component/registration/registration.component';

import { RegisterService } from './register.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'assignment';

  public userData = [];
  public imgData = [];
  id: string;
  
  
  constructor(public dialog: MatDialog, private _user:RegisterService, private sanitizer:DomSanitizer,
    private route: ActivatedRoute, private http : HttpClient) {}

  ngOnInit() {
    

    
   
   
  }
 
 

}
