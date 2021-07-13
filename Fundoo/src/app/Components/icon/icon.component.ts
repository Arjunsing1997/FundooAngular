import { Component, Input, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/Services/data-service.service';
import { NoteServiceService } from 'src/app/Services/note-service.service';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {

  constructor(private noteService: NoteServiceService, private dataService: DataServiceService) { }

  ngOnInit(): void {
  }

  @Input() note:any
  id;

  deleteNote(){
    console.log("Delete Method note",this.note);

    
    let data ={
       note_ID : this.id
    }
    
    console.log('Data --->',data);

    console.log("Note Array-->",this.note)


    this.noteService.DeleteNotes(data).subscribe((response:any)=>{
      console.log(response)
      console.log(" Deleted Note successfyull ");
      this.dataService.changeMessage("deleted")
    });
  }

}