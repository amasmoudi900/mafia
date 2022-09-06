import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  matchURL: string = "http://localhost:3000/matches";
  constructor(private httpClient: HttpClient) { }

  // Array of objects
  displayAllMatches() {
    return this.httpClient.get<{ matchesTable: any }>(this.matchURL);
  }

  // One object if finded
  displayMatchById(id) {
    return this.httpClient.get<{ match: any }>(`${this.matchURL}/${id}`);
    // return this.httpClient.get(this.matchURL + "/" + id);
  }

  // Delete on object from DB
  deleteMatchById(id) {
    return this.httpClient.delete<{ message: string }>(`${this.matchURL}/${id}`);
  }

  addMatch(matchObj) {
    return this.httpClient.post<{ message: any }>(this.matchURL, matchObj);
  }

  editMatch(matchObj) {
    return this.httpClient.put<{message:string}>(`${this.matchURL}/${matchObj._id}`, matchObj);
  }
}
