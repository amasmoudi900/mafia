import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {


  url: string = "http://localhost:3000/search";
  constructor(private httpClient: HttpClient) { }

  // obj: {teamOne:val1, teamTwo: val2}
  searchMatch(obj) {
    return this.httpClient.post<{ allMatches: any }>(this.url, obj);
  }

  // searchMatchIslem(obj){
  //   return this.httpClient.get(this.url);
  // }
}
