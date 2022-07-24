import { Component, OnInit } from '@angular/core';
import { reduce } from 'rxjs';
import { WeatherData } from './models/weather.module';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private weatherService:WeatherService){

  }
  cityName:string='Mumbai';
  weatherData!: WeatherData;
  ngOnInit(): void {
    this.getWeatherData(this.cityName);
    this.cityName='';
  
    
  }
  onSubmit(){
    this.getWeatherData(this.cityName);
    this.cityName='';
  }

  private getWeatherData(cityName:string){
    this.weatherService.getweatherdata(cityName)
    .subscribe({
      next:(response)=>{
        this.weatherData=response
        console.log(response);
      }
    });
  }

 
}

