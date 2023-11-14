import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherapiService {
  apiKey = '00649ba18a100b19e66d14a49feb669e'; // Replace with your OpenWeatherMap API key

  constructor(private http: HttpClient) {}

  getWeatherForecast(city: string): Observable<any> {
    const apiUrl = 'https://api.openweathermap.org/data/2.5/forecast';
    const params = new HttpParams()
      .set('q', city)
      .set('appid', this.apiKey);

    return this.http.get(apiUrl, { params });
  }
}
