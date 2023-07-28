import { Component, Input, } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IVOYAGES, IVoyage } from 'src/app/parametre.mock';
import { VoyageService } from 'src/app/services/voyage.service';
import { TemperatureService } from 'src/app/services/temperature.service';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css'],
})
export class SmallCardComponent {
  @Input() voyage!: IVoyage[];
  voyages: IVoyage[] = IVOYAGES;

 

  constructor(private router: Router, 
    private route: ActivatedRoute,
    private voyageService: VoyageService,
    private temperatureService: TemperatureService
    ) {}
 
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


