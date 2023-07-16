import { Component} from '@angular/core';
import { IVOYAGES, IVoyage } from 'src/app/parametre.mock';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {
  voyage: IVoyage = IVOYAGES[IVOYAGES.length - 1];
}
