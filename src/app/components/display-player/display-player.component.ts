import { PlayerService } from './../../services/player.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-player',
  templateUrl: './display-player.component.html',
  styleUrls: ['./display-player.component.css']
})
export class DisplayPlayerComponent implements OnInit {

  playerForm: FormGroup;
  player: any = {};
  id: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private playerService: PlayerService,
    private router: Router) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    this.playerService.displayPlayerById(this.id).subscribe(
      (response) => {
        console.log("Here response from BE", response);
        this.player = response.player;
      }
    )
  }

  editPlayer() {
    this.playerService.editPlayer(this.player).subscribe(
      (response) => {
        console.log("Here data after edit", response.message);
        this.router.navigate(["admin"]);
      }
    );
  }

}
