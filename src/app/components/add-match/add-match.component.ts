import { MatchService } from './../../services/match.service';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { generateId } from 'src/app/generic functions/generateId';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css']
})
export class AddMatchComponent implements OnInit {

  matchForm: FormGroup;
  match: any = {};
  constructor(
    private router:Router,
    private matchService:MatchService) { }

  ngOnInit() {
  }

  addMatch() {
    this.matchService.addMatch(this.match).subscribe(
      (data)=> {
        console.log("Here message from BE", data.message);
        this.router.navigate(["admin"]);
      }
    );
    // var matches = JSON.parse(localStorage.getItem("matches")|| "[]");
    // this.match.id = generateId(matches)+1;    
    // matches.push(this.match);
    // localStorage.setItem("matches", JSON.stringify(matches));
  }

}
