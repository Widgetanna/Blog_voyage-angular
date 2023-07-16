import { Injectable } from '@angular/core';
import { IVOYAGES, IVoyage } from '../parametre.mock';

@Injectable({
  providedIn: 'root',
})
export class VoyageService {
  voyages: IVoyage[] = IVOYAGES;
  private selectedVoyage: IVoyage;

  constructor() {
    this.selectedVoyage = {} as IVoyage;
  }

  //pour empecher le changement de photo sur la  page home
  setSelectedVoyage(voyage: IVoyage) {
    this.selectedVoyage = voyage;
  }
  //pour afficher galerie de photos dans galerieComponent
  getSelectedVoyage(id: number): IVoyage {
    const voyage =
      IVOYAGES.find((voyage) => voyage.id === id) ?? ({} as IVoyage);
    this.selectedVoyage = voyage;
    return voyage;
  }

  getCityById(id: number): string {
    const selectedVoyage = this.getSelectedVoyage(id);
    return selectedVoyage.city;
  }
}
