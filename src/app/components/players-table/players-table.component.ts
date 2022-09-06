import { Router } from '@angular/router';
import { PlayerService } from './../../services/player.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-players-table',
  templateUrl: './players-table.component.html',
  styleUrls: ['./players-table.component.css']
})
export class PlayersTableComponent implements OnInit {

  players: any = [];
  pageOfItems: Array<any>;
  constructor(
    private playerService: PlayerService,
    private router: Router) { }

  ngOnInit() {
    // this.players = JSON.parse(localStorage.getItem("players")|| "[]");
    this.playerService.displayAllPlayers().subscribe(
      (data) => {
        console.log("Here data from BE", data);
        this.players = data.playersTable;
      }
    );
  }


  deletePlayer(id) {
    // Call service to send delete request
    this.playerService.deletePlayerById(id).subscribe(
      (data) => {
        console.log("Here message after delete", data.message);
        // send request get all players to refresh table
        this.playerService.displayAllPlayers().subscribe(
          (data) => {
            this.players = data.playersTable;
          }
        )
      }
    );
  }

  displayPlayer(id) {
    this.router.navigate([`displayPlayer/${id}`])
  }

  onChangePage(x: Array<any>) {
    // update current page of items 
    this.pageOfItems = x;
  }

}
