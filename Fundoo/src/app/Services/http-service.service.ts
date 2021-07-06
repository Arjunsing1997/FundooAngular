import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  baseUrl = 'https://localhost:44306';

  constructor(private http: HttpClient) { }


  post(url: string, data: any){

   
    return this.http.post(this.baseUrl + url,data);
  }

  get(url) {
   
   
    return this.http.get(this.baseUrl + url);

}
}