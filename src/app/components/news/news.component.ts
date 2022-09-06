import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  news: any = [];
  constructor() { }

  ngOnInit() {
    this.news = [
      { id: 1, title: "Title1", author: "Abderrahmen", img: "assets/images/img_1.jpg" },
      { id: 2, title: "Title2", author: "Abderrahmen", img: "assets/images/img_2.jpg" },
      { id: 3, title: "Title3", author: "Abderrahmen", img: "assets/images/img_3.jpg" },
    ]
  }

}
