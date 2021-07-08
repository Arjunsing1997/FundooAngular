import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import {BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss']
})
export class DashBoardComponent implements OnInit {


  @ViewChild(MatSidenav)
  sidenav! : MatSidenav; 
  isExpanded : boolean = true ;

  constructor(private  observer : BreakpointObserver) {


   }

   ngAfterViewInit() {
     this.observer.observe(['{max-width : 800px}']).subscribe((res) =>{

      if(res.matches)
      {
        this.sidenav.mode = 'over';
        this.sidenav.close();
        this.isExpanded = false;
      }
      else
      {
        this.sidenav.mode = 'side';
        this.sidenav.open();
        this.isExpanded = true

      }
   });
  }
     

  ngOnInit(): void {
  }

}
