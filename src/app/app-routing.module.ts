import { WeatherComponent } from './components/weather/weather.component';
import { StadiumFormComponent } from './components/stadium-form/stadium-form.component';
import { SearchComponent } from './components/search/search.component';
import { DisplayPlayerComponent } from './components/display-player/display-player.component';
import { ErrorNotFoundComponent } from './components/error-not-found/error-not-found.component';
import { EditMatchComponent } from './components/edit-match/edit-match.component';
import { DisplayMatchComponent } from './components/display-match/display-match.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { MatchesComponent } from './components/matches/matches.component';
import { AdminComponent } from './components/admin/admin.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { ArticleComponent } from './components/article/article.component';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  // http://localhost:4200
  { path: "", component: HomeComponent },
  // http://localhost:4200/login
  { path: "login", component: LoginComponent },
  // http://localhost:4200/signup
  { path: "signup", component: SignupComponent },
  // http://localhost:4200/addMatch
  { path: "addMatch", component: AddMatchComponent },
  // http://localhost:4200/addTeam
  { path: "addTeam", component: AddTeamComponent },
  // http://localhost:4200/admin
  { path: "admin", component: AdminComponent },
  // http://localhost:4200/allMatches
  { path: "allMatches", component: MatchesComponent },
  // http://localhost:4200/addPlayer
  { path: "addPlayer", component: AddPlayerComponent },
  // http://localhost:4200/displayMatch/Variable
  { path: "displayMatch/:id", component: DisplayMatchComponent },
  { path: "editMatch/:id", component: EditMatchComponent },
  { path: "displayPlayer/:id", component: DisplayPlayerComponent },
  { path: "search", component: SearchComponent },
  { path: "addStadium", component: StadiumFormComponent },
  { path: "editStadium/:id", component: StadiumFormComponent },
  { path: "weather", component: WeatherComponent },
  { path: "**", component: ErrorNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
