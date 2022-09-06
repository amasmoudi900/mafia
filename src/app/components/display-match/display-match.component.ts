import { MatchService } from './../../services/match.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { searchObjectById } from 'src/app/generic functions/searchById';

@Component({
  selector: 'app-display-match',
  templateUrl: './display-match.component.html',
  styleUrls: ['./display-match.component.css']
})
export class DisplayMatchComponent implements OnInit {

  id: any;
  match: any;
  url: string;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private matchService:MatchService) { }

  ngOnInit() {
    // this.url = this.router.url;
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    // console.log("URL", this.url);
    // this.match = searchObjectById(this.id, "matches");
    this.matchService.displayMatchById(this.id).subscribe(
      (data)=> {
        this.match = data.match;
      }
    );
  }

}
