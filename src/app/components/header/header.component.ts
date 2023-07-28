import { Component, Input, OnDestroy } from '@angular/core';
import { IVOYAGES, IVoyage } from 'src/app/parametre.mock';
import { TemperatureService } from 'src/app/services/temperature.service';
import { VoyageService } from 'src/app/services/voyage.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnDestroy {
  voyages: IVoyage[] = IVOYAGES;

  @Input() cityName!: string;
  temperatures: { [key: string]: number } = {};
  defaultCityIndex: number = 4;
  
  private voyageSubscription: Subscription;

  constructor(
    private temperatureService: TemperatureService,
    private voyageService: VoyageService
  ) {
    const defaultCity = this.voyages[this.defaultCityIndex];
    this.cityName = defaultCity.city;
    this.voyageSubscription = this.voyageService.selectedVoyage$.subscribe((selectedVoyage) => {
      this.cityName = selectedVoyage.city;
      this.displayTemp(selectedVoyage);
    });

    
    this.displayTemp(defaultCity);
  }


  ngOnDestroy(): void {
    this.voyageSubscription.unsubscribe();
  }

  displayTemp(voyage: IVoyage) {
    this.temperatureService.getTemperature(voyage).subscribe(temp => {
      this.temperatures[voyage.city] = temp;
    });
  }
}





