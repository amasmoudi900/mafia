import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  articles: any = [];
  user:any;
  constructor() { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem("connectedUser"));
    console.log("Connected User", this.user);
  }

}
