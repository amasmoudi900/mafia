import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {

  matches: any = [];
  constructor() { }

  ngOnInit() {
    this.matches = [
      { id: 1, scoreOne: 2, scoreTwo: 3, teamOne: "FCB", teamTwo: "RMF" },
      { id: 2, scoreOne: 1, scoreTwo: 1, teamOne: "CA", teamTwo: "EST" },
      { id: 3, scoreOne: 0, scoreTwo: 2, teamOne: "JUV", teamTwo: "INT" },
      { id: 4, scoreOne: 2, scoreTwo: 0, teamOne: "LIV", teamTwo: "MUN" }
    ]
    // this.matches = JSON.parse(localStorage.getItem("matches")|| "[]");
  }

}
