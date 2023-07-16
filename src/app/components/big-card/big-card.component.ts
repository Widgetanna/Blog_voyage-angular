import { Component, Input} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IVOYAGES, IVoyage } from 'src/app/parametre.mock';
import { VoyageService } from 'src/app/voyage.service';

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
    private voyageService: VoyageService) {}
 
    onImageClick(voyage: IVoyage): void {
      this.voyageService.setSelectedVoyage(voyage);
    }
}


