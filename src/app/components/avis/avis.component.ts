import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IVOYAGES, IVoyage } from 'src/app/parametre.mock';
import { VoyageService } from 'src/app/services/voyage.service';

@Component({
  selector: 'app-avis',
  templateUrl: './avis.component.html',
  styleUrls: ['./avis.component.css']
})
export class AvisComponent {
  voyage: IVoyage = IVOYAGES[IVOYAGES.length - 1];
  @Input() titre!: string;
  
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


