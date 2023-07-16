import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { env } from '../env';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TemperatureService {

  constructor(private http: HttpClient) {}

  getTemperature(): Observable<{ temperature: number, cityName: string }> {
    const apiUrl = env.apiUrl;
    const cityName = apiUrl.substring(apiUrl.lastIndexOf('/') + 1, apiUrl.indexOf('?')).toUpperCase();
    console.log('la ville '+ cityName);
    return this.http.get(apiUrl).pipe(map((response: any) => ({ temperature: response.days[0].temp, cityName: cityName })));
  }
}