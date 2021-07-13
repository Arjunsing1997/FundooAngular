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
    // this.token=localStorage.getItem("token");
    var currentUser = JSON.parse(localStorage.getItem('user'));
    var token = currentUser.token; 
    console.log("token is",token);
    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization':token,
        
      })
    }
   
    return this.http.post(this.baseUrl + url,data);
  }

  get(url: any){
   // this.token=localStorage.getItem('token');
   var currentUser = JSON.parse(localStorage.getItem('user'));
    var token = currentUser.token; 
    let options={
      headers:new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization':token
      })
    }
  return this.http.get(this.baseUrl+url);
  }

  delete(url: any, data: any){
    return this.http.delete(this.baseUrl + url, data);
  }

  put(url : any, data: any){
    return this.http.put(this.baseUrl+url, data);
  }

  // passwordPost(url, email : any){
  //   return this.http.post(this.baseUrl + url, email);
  // }

  // resetPassword(url, data : any){
  //   return this.http.post(this.baseUrl+url,data);
  // }
}