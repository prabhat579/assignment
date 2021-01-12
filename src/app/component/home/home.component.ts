import { Component, OnInit } from '@angular/core';
import { RegistrationComponent } from '../registration/registration.component';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public dialog: MatDialog, public route: Router) { }

  ngOnInit() {
    
  }

  openDialog() {
    
    this.dialog.open(RegistrationComponent, {
      
      height: '600px',
      width: '800px',
    });
  }

}
