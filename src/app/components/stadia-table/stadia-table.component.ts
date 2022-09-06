import { Router } from '@angular/router';
import { StadiumService } from './../../services/stadium.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stadia-table',
  templateUrl: './stadia-table.component.html',
  styleUrls: ['./stadia-table.component.css']
})
export class StadiaTableComponent implements OnInit {

  stadiums :any = [];
  constructor(
    private stadiumService:StadiumService,
    private router:Router) { }

  ngOnInit() {
    this.stadiumService.getAllStadiums().subscribe(
      (data)=> {
        this.stadiums = data.stadiumsTable;
      }
    )
  }

  editStadium(id){
    this.router.navigate([`editStadium/${id}`]);
  }

}
