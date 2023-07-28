import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IVOYAGES, IVoyage } from 'src/app/parametre.mock';
import { VoyageService } from 'src/app/services/voyage.service';

@Component({
  selector: 'app-picture-card',
  templateUrl: './picture-card.component.html',
  styleUrls: ['./picture-card.component.css'],
})
export class PictureCardComponent {
  voyage: IVoyage = IVOYAGES[IVOYAGES.length - 1];

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

