import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {


  playerURL: string = "http://localhost:3000/players";
  constructor(private httpClient: HttpClient) { }

  displayAllPlayers() {
    return this.httpClient.get<{ playersTable: any, message: any }>(this.playerURL);
  }

  displayPlayerById(id) {
    let url = this.playerURL + "/" + id;
    return this.httpClient.get<{ player: any }>(url);
  }

  deletePlayerById(id) {
    return this.httpClient.delete<{ message: string }>(`${this.playerURL}/${id}`);
  }

  addPlayer(playerObj, img:File) {
    let formData= new FormData();
    formData.append("name", playerObj.name);
    formData.append("age", playerObj.age);
    formData.append("position", playerObj.position);
    formData.append("nbr", playerObj.nbr);
    formData.append("img", img);
    return this.httpClient.post<{ message: string }>(this.playerURL, formData);
  }

  editPlayer(playerObj) {
    return this.httpClient.put<{message:string}>(`${this.playerURL}/${playerObj._id}`, playerObj);
  }
}
