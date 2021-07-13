import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataServiceService } from 'src/app/Services/data-service.service';
import { NoteServiceService } from 'src/app/Services/note-service.service';

@Component({
  selector: 'app-update-note',
  templateUrl: './update-note.component.html',
  styleUrls: ['./update-note.component.scss']
})
export class UpdateNoteComponent implements OnInit {

  title;
  description;
  id;
  color='';
  pin=true;

  constructor(
    private noteService: NoteServiceService,
    private dataService: DataServiceService,
    public dialogRef: MatDialogRef<UpdateNoteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {

    console.log(" note data in update", data);
    this.title = data.note.header;
      this.description = data.note.body;
      this.id=data.note.note_ID

   }

  ngOnInit(): void {
  }

  updateNote() {

    let data = {
      note_ID: this.id,
      header: this.title,
      body: this.description,
      
    }
    console.log("printing-  --> ", data );
    

    this.noteService.updateNote(data).subscribe((response:any) => {
      console.log(" updated successfull", response);
     // this.onNoClick();
     this.dataService.changeMessage("Updated")

    })
    


  }
  onNoClick(): void {
    this.dialogRef.close();
  }


}
