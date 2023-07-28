import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { env } from '../env';
import { ActivatedRoute } from '@angular/router';
import { IVoyage } from '../parametre.mock';



@Injectable({
  providedIn: 'root'
})
export class TemperatureService {
  private apiUrl = env.apiUrl;
  private apitoken = env.token;

  @Input() voyages!: IVoyage[];

  private selectedVoyageSource = new Subject<IVoyage>();
  selectedVoyage$ = this.selectedVoyageSource.asObservable();

  constructor(private http: HttpClient,
             private activatedRoute: ActivatedRoute) {}

             
             
             getTemperature(voyage: IVoyage): Observable<number> {
              console.log(`To jest miasto ${voyage.city}`);
              const url = `${this.apiUrl}?q=${voyage.city}&units=metric&appid=${this.apitoken}`;

              
              console.log(`URL: ${url}`);
          
              return this.http.get<any>(url).pipe(
                map(response => parseFloat(response.main.temp.toFixed(1)))
              );
            }
            
          }