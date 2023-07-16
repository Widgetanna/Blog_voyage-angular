import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IVOYAGES, IVoyage } from 'src/app/parametre.mock';
import { VoyageService } from 'src/app/voyage.service';

@Component({
  selector: 'app-travel-card',
  templateUrl: './travel-card.component.html',
  styleUrls: ['./travel-card.component.css']
})
export class TravelCardComponent {
  voyage: IVoyage = IVOYAGES[IVOYAGES.length - 1];
  @Input() titre!: string;
  @Input() typeAffichage!: string;

  constructor(
    private route: ActivatedRoute,
    private voyageService: VoyageService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const id = Number(params['id']);
      this.voyage = this.voyageService.getSelectedVoyage(id);
    });
  }
}

