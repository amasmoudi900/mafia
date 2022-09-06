import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  articles: any = [];
  x: number = 10;
  ch: string = "abderrahmen";
  constructor() { }
  ngOnInit() {
    this.articles = [
      { id: 1, title: "Title 1", description: "Description 1", img: "", author: "Abderrahmen", date: "04/08/2022" },
      { id: 2, title: "Title 2", description: "Description 2", img: "", author: "Ali", date: "04/08/2022" },
      { id: 3, title: "Title 3", description: "Description 3", img: "", author: "Salah", date: "04/08/2022" },
      { id: 4, title: "Title 4", description: "Description 4", img: "", author: "KArim", date: "04/08/2022" },
      { id: 5, title: "Title 5", description: "Description 5", img: "", author: "Mohsen", date: "04/08/2022" }
    ];
  }

  calcul(a: number, b) {
    return a + b;
  }

  execute() {
    alert('clicked');
  }
}
