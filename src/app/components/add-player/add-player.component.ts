import { PlayerService } from './../../services/player.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { generateId } from 'src/app/generic functions/generateId';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {

  playerForm: FormGroup;
  player: any = {};
  imagePreview:any;
  constructor(
    private playerService: PlayerService,
    private fb:FormBuilder) { }

  ngOnInit() {
    this.playerForm = this.fb.group({
      name:[""],
      age:[""],
      position:[""],
      nbr:[""],
      img:[""]
    })
  }

  addPlayer() {
    this.playerService.addPlayer(this.player, this.playerForm.value.img).subscribe(
      (data) => {
        console.log("here data after adding player", data.message);
      }
    );

  }

  onImageSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.playerForm.patchValue({ img: file });
    this.playerForm.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string
    }; 
    reader.readAsDataURL(file);
  }




}
