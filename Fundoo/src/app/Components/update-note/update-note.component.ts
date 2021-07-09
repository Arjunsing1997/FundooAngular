import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
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
    public dialogRef: MatDialogRef<UpdateNoteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    console.log(" note data in update", data);
    this.title = data.note.title,
      this.description = data.note.description
      this.id=data.note.id
   }

  ngOnInit(): void {
  }

  updateNote(data1:any) {

    let data = {
      noteId: this.id,
      // title: card.card.title,
      title: this.title,
      description: this.description,
      
    }
    console.log("prunting ", data );
    

    this.noteService.updateNote(data).subscribe((response:any) => {
      console.log(" updated successfull", response);
      this.onNoClick();

    })
    


  }
  onNoClick(): void {
    this.dialogRef.close();
  }


}
