import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { MatChipInputEvent, MatDialog, MatDialogRef, MatSnackBar } from '@angular/material';
import { Register } from 'src/app/register';
import { RegisterService } from 'src/app/register.service';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';


interface country {
  value: string;
  viewValue: string;
}
interface state {
  value: string;
  viewValue: string;
}



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})



export class RegistrationComponent implements OnInit {

  addregistration: FormGroup;
  userAdded = new EventEmitter();
  Tags: string[] = [];
  enableSubmit: boolean = false;

  visible = true; 
  selectable = true; 
  removable = true; 
  readonly separatorKeysCodes: number[] = [ENTER, COMMA]; 

  title = 'FileUploadProject';
  ImageBaseData:string | ArrayBuffer=null;



  constructor(private fb: FormBuilder, private _registerService: RegisterService,
    public dialogRef: MatDialogRef<RegistrationComponent>,
    private snackbar: MatSnackBar, private dialog: MatDialog,
    private http:HttpClient, private route: Router) {

    this.addregistration = fb.group({

      "ImageBaseData": [],
      "name": [null,Validators.compose([ Validators.maxLength(20),Validators.pattern('^[a-zA-Z \-\']+'),
      Validators.required])],
      "lastName": [null,],
      "phone_number": [null,],
      "age": [null,],
      "country": [null,],
      "state": [null,],
      "homeAddress1": [null,],
      "homeAddress2": [null,],
      "officeAddress1": [null,],
      "officeAddress2": [null,],

      "Tags": [null,],

    });
  }

  handleFileInput(files: FileList) {
    let me = this;
    let file = files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      console.log(reader.result);
      me.ImageBaseData=reader.result;
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
 }

 btnUpload(){
  
  if(this.ImageBaseData==null){
   

  }else{     
    var fileUplodVM: FileUplodVM={
      ImageBaseData:this.ImageBaseData.toString()
    }
    this.CreateItem(fileUplodVM).subscribe((res: any) =>{
     
     
      
    },
    error => {
      alert(error.message);
    });
  }
 }

 public CreateItem(data) {
  return this.http.post(`http://localhost:3000/img`, data)
   .pipe(
     map((res: any) => {
       console.log(res);
       return res;
     }));
    
 }

  addUserData(Register: Register, ) {

    this._registerService.addUserData(Register).subscribe(data => {

      this.snackbar.open('User added successfully', 'close', { duration: 2000 });
     this.btnUpload()
      this.userAdded.emit(data);
      console.log(data)
      
      this.dialogRef.close();
      this.route.navigate(['profile']);
    }, err => {
      console.log(err);
      this.dialogRef.close();
    });
  }

 gridsize: number = 100;
  updateSetting(event) {
    this.gridsize = event.value;
  }
  
  add(event: MatChipInputEvent): void {


    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {


      this.Tags.push(value);
    }
    if (input) {

     
      input.value = '';
    }
  }

  remove(tag: string): void {
    const index = this.Tags.indexOf(tag);

    if (index >= 0) {
      this.Tags.splice(index, 1);
    }
  }

  




  closeDialog() {
    this.dialogRef.close();
  }


  country: country[] = [
    { value: 'India', viewValue: 'India' },
    { value: 'America', viewValue: 'America' },
    { value: 'Russia', viewValue: 'Russia' }
  ];

  states: state[] = [
    { value: 'Maharshtra', viewValue: 'Maharshtra' },
    { value: 'Delhi', viewValue: 'Delhi' },
    { value: 'Goa', viewValue: 'Goa' }
  ];

  ngOnInit() {
  }

  get name() {
    return this.addregistration.get('name');
  }

}

export class FileUplodVM{
  ImageBaseData: string;
}
