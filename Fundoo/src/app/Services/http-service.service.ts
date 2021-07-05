import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  baseUrl = environment.baseUrl

  constructor(private http: HttpClient) { }

  token: any; 

  post(url: string, data: any){

    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',

        
      })
    }
    return this.http.post(this.baseUrl + url,data,options);
  }

  get(url) {
   
    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    }
    return this.http.get(this.baseUrl + url, options);

}
}