import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  baseUrl = 'https://localhost:44306';

  constructor(private http: HttpClient) { }


  post(url: string, data: any){

    // let options = {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/json',        
    //   })
    // }
    return this.http.post(this.baseUrl + url,data);
  }

  get(url) {
   
    // let options = {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/json',
    //   })
    // }
    return this.http.get(this.baseUrl + url);

}
}