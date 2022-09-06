import { WeatherService } from './../../services/weather.service';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  weatherForm: FormGroup;
  weather: any = {};
  result: any;

  isLoaded: boolean;
  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
  }

  search() {
    this.isLoaded = true;
    console.log("Here country", this.weather.country);
    this.weatherService.searchWeatherCountry(this.weather).subscribe(
      (data) => {
        console.log("Here weather", data.result);
        this.isLoaded = false;
        this.result = data.result;
      }
    )
  }

}
