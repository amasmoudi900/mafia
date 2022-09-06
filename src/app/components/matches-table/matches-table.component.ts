import { MatchService } from './../../services/match.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { deleteObject } from 'src/app/generic functions/deleteObject';

@Component({
  selector: 'app-matches-table',
  templateUrl: './matches-table.component.html',
  styleUrls: ['./matches-table.component.css']
})
export class MatchesTableComponent implements OnInit {

  matches: any = [];
  constructor(
    private router: Router,
    private matchService: MatchService) { }

  ngOnInit() {
    // Call service to get all matches
    this.getAllMatches();
  }

  deleteMatch(id) {
    this.matchService.deleteMatchById(id).subscribe(
      (data) => {
        console.log("Here data after delete", data.message);
        this.getAllMatches();
      }
    );
  }

  displayMatch(id) {
    this.router.navigate([`displayMatch/${id}`]);
    // this.router.navigate(["displayMatch/" + id]);
  }

  editMatch(id) {
    this.router.navigate([`editMatch/${id}`]);
  }

  getAllMatches() {
    this.matchService.displayAllMatches().subscribe(
      (data) => {
        this.matches = data.matchesTable;
      }
    )
  }

}
