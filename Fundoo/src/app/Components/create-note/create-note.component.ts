import { Component, OnInit } from '@angular/core';
import { NoteServiceService } from 'src/app/Services/note-service.service';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})
export class CreateNoteComponent implements OnInit {

  isOpen = true;
  title=''
  description=''
  hide = true;
  setColor='';
  click() {
    this.isOpen = true;
  }

  constructor(private noteservice : NoteServiceService) { }

  ngOnInit(): void {
  }

  addNote(){
    let data={
      title:this.title,
      description:this.description
    } 
    console.log(" add note data ", data);
    this.noteservice.createNote(data).subscribe((response)=>{
      console.log(response);
      let message="note created successfull"
    })
  }
}
