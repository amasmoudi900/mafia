import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teams-table',
  templateUrl: './teams-table.component.html',
  styleUrls: ['./teams-table.component.css']
})
export class TeamsTableComponent implements OnInit {

  teams:any=[];
  constructor() { }

  ngOnInit() {
    this.teams = JSON.parse(localStorage.getItem("teams")|| "[]");
  }

}
