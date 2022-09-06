import { MatchService } from './../../services/match.service';
import { searchObjectById } from 'src/app/generic functions/searchById';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-match',
  templateUrl: './edit-match.component.html',
  styleUrls: ['./edit-match.component.css']
})
export class EditMatchComponent implements OnInit {

  matchForm: FormGroup;
  match: any = {};
  id: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private matchService:MatchService,
    private router:Router) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    this.matchService.displayMatchById(this.id).subscribe(
      (data)=> {
        this.match = data.match;
      }
    )
  }

  validate() {
    console.log("Here new values", this.match);
    this.matchService.editMatch(this.match).subscribe(
      (data)=> {
        console.log("Here message after update", data.message);
        this.router.navigate(["admin"]);
      }
    )
  }

}
