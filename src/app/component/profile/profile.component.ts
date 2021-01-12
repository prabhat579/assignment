import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RegisterService } from 'src/app/register.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public userData = [];
  public imgData = [];
  // id: string;

  constructor(private _user:RegisterService,  
    private route: ActivatedRoute, private http : HttpClient) { }

  ngOnInit() {

    this._user.getUserData()
    .subscribe(data => this.userData = data );
    console.warn(this.userData);

    this._user.getImgData()
    .subscribe(data => this.imgData = data );
    console.warn(this.imgData);
  }

  

}
