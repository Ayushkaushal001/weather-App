import { Component } from '@angular/core';
import { WeatherapiService } from 'src/app/services/weatherapi.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  weatherData: any;
  city: string = '';
  errorMessage: string = '';

  constructor(private weatherService: WeatherapiService) {}
 
  getWeather() {
    if (this.city) {
      this.weatherService.getWeatherForecast(this.city).subscribe(
        (data) => {
          this.weatherData = data;
          console.log(data);
          this.errorMessage = '';
        },
        (error) => {
          this.errorMessage = 'Failed to fetch weather data. Please try again later.';
          console.error('Error fetching weather data:', error);
        }
      );
    } else {
      this.errorMessage = 'Please enter a location before clicking the button.';
    }
  }

  getWeatherIconUrl(iconCode: string): string {
    return `https://openweathermap.org/img/wn/${iconCode}.png`;
  }
  
 getDayName(offset: number): string {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const today = new Date();
  const targetDate = new Date(today);
  targetDate.setDate(today.getDate() + offset);
  return days[targetDate.getDay()];
}

getMonthName(offset: number) {
  const days = ['jan', 'feb' , 'Mar' , 'Apr','May' ]
}
 kelvinToCelsius(kelvin: number): number {
    return kelvin - 273.15;
  }
  
}
