import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/Services/data-service.service';
import { NoteServiceService } from 'src/app/Services/note-service.service';
import { UserRegister } from 'src/app/Models/user-register.model';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

  note : UserRegister[];
  notes :Array<any>=[];

  constructor(private noteservice:NoteServiceService, private dataService: DataServiceService) { }

  ngOnInit(): void {
    this.getAllNotes();
    this.dataService.currentMessage.subscribe((msg)=>{
      console.log(" message ", msg);
      this.getAllNotes();
      
    })
  }

  receiveMessage($event: any){
    console.log(" message get all notee from craete note",$event);
    this.getAllNotes();
  }
  getAllNotes(){
    this.noteservice.getAllNotes().subscribe((respnse : any) => {
      console.log("Response------------>",respnse);
      this.note = respnse;
      console.log("---->",this.note);
      this.notes = this.note.reverse();
      console.log("Array Reversed",this.notes);
    })
   console.log("Printing the notes");
    console.log(this.notes);

    // this.note = [{'title':'Hello', 'body': 'Heyyydfdf'}]
    // console.log("Printing the Notes")
    // this.notes= this.note.filter((ele)=>{
    //       console.log(ele.isDeleted);
    //       return ele.isDeleted == false
    //     })
    // console.log(this.notes);
  }
  

}
