import { SearchService } from './../../services/search.service';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchForm: FormGroup;
  match: any = {};
  matches: any = [];
  constructor(private searchService: SearchService) { }

  ngOnInit() {
  }

  search() {
    this.searchService.searchMatch(this.match).subscribe(
      (response) => {
        console.log("Here finded matches", response.allMatches);
        this.matches = response.allMatches;
      }
    );
  }
}
