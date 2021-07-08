import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})
export class CreateNoteComponent implements OnInit {

  flag 
  isOpen = true;
  title = ''
  description = ''
  hide = true;
  click() {
    this.isOpen = true;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
