import { Component, Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IVOYAGES, IVoyage, IimageGalerie} from 'src/app/parametre.mock';
import { VoyageService } from 'src/app/voyage.service';

@Component({
  selector: 'app-galerie',
  templateUrl: './galerie.component.html',
  styleUrls: ['./galerie.component.css']
})
export class galerieComponent  {
  voyages: IVoyage[] = IVOYAGES;
  images: IimageGalerie[]= [];
  @Input() titre!: string;
  
  constructor(private route: ActivatedRoute,
    private voyageService: VoyageService) {
    // Extraction des images de chaque voyage
    this.voyages.forEach((voyage) => {
      this.images.push(...voyage.imageGalerie);
    });
  }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params) => {
      // Récupération du voyage sélectionné correspondant à l'ID
      const selectedVoyage = this.voyageService.getSelectedVoyage(
        +params.get('id')!
      );
      this.titre = selectedVoyage.city;
      this.images = selectedVoyage.imageGalerie;
    });
  }

  getImageUrl(image: IimageGalerie): string {
    return image.picture;
  }
  
}

  

