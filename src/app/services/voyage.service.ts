import { Injectable } from '@angular/core';
import { IVOYAGES, IVoyage } from '../parametre.mock';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VoyageService {
  voyages: IVoyage[] = IVOYAGES;
  private selectedVoyage: IVoyage;
  private selectedVoyageSource = new Subject<IVoyage>();
  selectedVoyage$ = this.selectedVoyageSource.asObservable();

  constructor() {
    this.selectedVoyage = {} as IVoyage;
  }
  
  setSelectedVoyage(voyage: IVoyage) {
    this.selectedVoyage = voyage;
    this.selectedVoyageSource.next(voyage); // Notify the subscribers with the new selected voyage
  }

  getSelectedVoyage(id: number): IVoyage {
    const voyage = IVOYAGES.find((voyage) => voyage.id === id) ?? ({} as IVoyage);
    this.selectedVoyage = voyage;
    return voyage;
  }

  getCityById(id: number): string {
    const selectedVoyage = this.getSelectedVoyage(id);
    return selectedVoyage.city;
  }
}
