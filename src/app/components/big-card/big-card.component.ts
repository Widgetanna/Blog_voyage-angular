import { Component, Input} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IVOYAGES, IVoyage } from 'src/app/parametre.mock';
import { TemperatureService } from 'src/app/services/temperature.service';
import { VoyageService } from 'src/app/services/voyage.service';
import { Observer } from 'rxjs';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})

export class BigCardComponent  {
  voyage: IVoyage = IVOYAGES[IVOYAGES.length - 1];
  
 @Input() voyages!: IVoyage[];
  
  constructor(private router: Router, 
    private route: ActivatedRoute,
    private voyageService: VoyageService,
    private temperatureService: TemperatureService) {}
 
    
    onImageClick(voyage: IVoyage): void {
      this.voyageService.setSelectedVoyage(voyage);
  
      this.temperatureService.getTemperature(voyage).subscribe({
        next: temperature => {
          console.log(`Temperature for ${voyage.city}: ${temperature}`);
        },
        error: error => {
          console.error('Error fetching temperature:', error);
        }
      });
    }
  }
