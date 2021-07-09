import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  baseUrl = 'https://localhost:44306';
  token : any;

  constructor(private http: HttpClient) { }


  // Userpost(url: string, data: any){
  //   return this.http.post(this.baseUrl + url,data);
  // }

  post(url: string, data: any){
    this.token=localStorage.getItem('token');
    console.log("token is",this.token);
    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization':this.token,
        
      })
    }
    return this.http.post(this.baseUrl + url,data,options);
  }

  get(url: any){
    this.token=localStorage.getItem('token');
    let options={
      headers:new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization':this.token
      })
    }
  return this.http.get(this.baseUrl+url,options);
  }

  // passwordPost(url, email : any){
  //   return this.http.post(this.baseUrl + url, email);
  // }

  // resetPassword(url, data : any){
  //   return this.http.post(this.baseUrl+url,data);
  // }
}