import { Injectable } from '@angular/core';
import {HttpServiceService} from '../Services/http-service.service'


@Injectable({
  providedIn: 'root'
})
export class NoteServiceService {

  constructor(private http : HttpServiceService) { }

  createNote(data: any){
    console.log("data in note service",data);
    return this.http.post('/api/Note',data);
  }

  getAllNotes(){
    return this.http.get('/api/Note/Details');
  }

  updateNote(data:any){
    return this.http.put('/api/Note/UPDATE',data)
   }
  //  updateColor(data: any){
  //    return this.http.put('/api/Note/ColourUpdate',data)
  //  }

   DeleteNotes(data:any){
    return this.http.delete('/api/Note/Delete',data)
  }
}
