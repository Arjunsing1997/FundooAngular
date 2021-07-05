import { Injectable } from '@angular/core';
import {HttpServiceService} from '../Services/http-service.service'

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
 
  constructor(private httpService: HttpServiceService) { }
  registerUser(data: any) {
    console.log(" data in user service ", data);
    return this.httpService.post('/api/User', data);
  }

  loginUser(data) {

    return this.httpService.post('/api/User/Authentication', data);

  }

}
