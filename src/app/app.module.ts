import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ArticleComponent } from './pages/article/article.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { AvisComponent } from './components/avis/avis.component';
import { BigCardComponent } from './components/big-card/big-card.component';
import { SmallCardComponent } from './components/small-card/small-card.component';
import { PictureCardComponent } from './components/picture-card/picture-card.component';
import { TravelCardComponent } from './components/travel-card/travel-card.component';
import { HttpClientModule } from '@angular/common/http';
import GalerieComponent from './components/galerie/galerie.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArticleComponent,
    FooterComponent,
    HeaderComponent,
    ButtonComponent,
    AvisComponent,
    GalerieComponent,
    BigCardComponent,
    SmallCardComponent,
    PictureCardComponent,
    TravelCardComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
