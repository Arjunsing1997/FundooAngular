import { Component, OnInit } from '@angular/core';
import { NoteServiceService } from 'src/app/Services/note-service.service';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {

  constructor(private noteService: NoteServiceService,private dataService: DataserviceService) { }

  ngOnInit(): void {
  }

  @Input() note:any

  deleteNote(){
    console.log(this.note);
    
    let data = {
    
      noteIdList: [this.note.id],
      isDeleted: true
    }


    this.noteService.deleteNotes(data).subscribe((response:any)=>{
      console.log(" dleted successfyull ");
      this.dataService.changeMessage("deleted")
      
    });
  }

}
