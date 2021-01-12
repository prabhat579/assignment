import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Register } from './register';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  
  
  // private headers = new HttpHeaders().set('Content-Type','application/json');
  private headers = new HttpHeaders().set('content-type','application/json')

  constructor(private http:HttpClient) { 

   }
  //  url:'http://localhost:3000/main'

   
   getUserData():Observable<Register[]>{
    return this.http.get<Register[]>('http://localhost:3000/main');
  }
  getImgData():Observable<Register[]>{
    return this.http.get<Register[]>('http://localhost:3000/img');
  }


  updateUserData(Register): Observable<Register> {
    return this.http.put<Register>('http://localhost:3000/main',Register)
  }


  addUserData(Register): Observable<Register> {
    return this.http.post<Register>('http://localhost:3000/main',Register)
  }
  
  
}
 

