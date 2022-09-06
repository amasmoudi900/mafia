import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { CupEventComponent } from './components/cup-event/cup-event.component';
import { ScoreComponent } from './components/score/score.component';
import { NewsComponent } from './components/news/news.component';
import { RankingComponent } from './components/ranking/ranking.component';
import { BlogComponent } from './components/blog/blog.component';
import { NewsItemComponent } from './components/news-item/news-item.component';
import { ArticleComponent } from './components/article/article.component';
import { SignupComponent } from './components/signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { AdminComponent } from './components/admin/admin.component';
import { BannerComponent } from './components/banner/banner.component';
import { MatchesComponent } from './components/matches/matches.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { PlayersTableComponent } from './components/players-table/players-table.component';
import { TeamsTableComponent } from './components/teams-table/teams-table.component';
import { MatchesTableComponent } from './components/matches-table/matches-table.component';
import { DisplayMatchComponent } from './components/display-match/display-match.component';
import { EditMatchComponent } from './components/edit-match/edit-match.component';
import { AsterixPipe } from './pipes/asterix.pipe';
import { HttpClientModule } from "@angular/common/http";
import { ErrorNotFoundComponent } from './components/error-not-found/error-not-found.component';
import { DisplayPlayerComponent } from './components/display-player/display-player.component';
import { SearchComponent } from './components/search/search.component';
import { MyFilterPipe } from './pipes/my-filter.pipe';
import { StadiumFormComponent } from './components/stadium-form/stadium-form.component';
import { StadiaTableComponent } from './components/stadia-table/stadia-table.component';
import { CountdownTimerModule } from 'angular-countdown-timer';
import { JwPaginationModule } from 'jw-angular-pagination';
import { WeatherComponent } from './components/weather/weather.component';
import { LoaderComponent } from './components/loader/loader.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    CupEventComponent,
    ScoreComponent,
    NewsComponent,
    RankingComponent,
    BlogComponent,
    NewsItemComponent,
    ArticleComponent,
    SignupComponent,
    AddMatchComponent,
    AddTeamComponent,
    AdminComponent,
    BannerComponent,
    MatchesComponent,
    AddPlayerComponent,
    PlayersTableComponent,
    TeamsTableComponent,
    MatchesTableComponent,
    DisplayMatchComponent,
    EditMatchComponent,
    AsterixPipe,
    ErrorNotFoundComponent,
    DisplayPlayerComponent,
    SearchComponent,
    MyFilterPipe,
    StadiumFormComponent,
    StadiaTableComponent,
    WeatherComponent,
    LoaderComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    JwPaginationModule,
    CountdownTimerModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
