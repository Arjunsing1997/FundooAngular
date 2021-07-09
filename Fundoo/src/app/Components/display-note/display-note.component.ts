import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UpdateNoteComponent } from '../update-note/update-note.component';

@Component({
  selector: 'app-display-note',
  templateUrl: './display-note.component.html',
  styleUrls: ['./display-note.component.scss']
})
export class DisplayNoteComponent implements OnInit {

  open=true;
  pinNote(card:any){

  };
  pin(){

  }
  card='';
  isTrash=true;
  @Input() AllNotes: any

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(card: any): void {
    const dialogRef = this.dialog.open(UpdateNoteComponent, {
      width: '250px',
      data: {note: card}
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }
}
