import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { CarouselComponent } from "@components/carousel/carousel.component";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatCardModule} from "@angular/material/card";
import { HeaderComponent } from "@components/header/header.component";
import { SearchBarComponent } from "@components/searchBar/search-bar.component";
import { FooterComponent } from "@components/footer/footer.component";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { ProductSliderCardComponent } from "./components/product-slider-card/product-slider-card.component";
import { HomeComponent } from "./pages/home/home.component";

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    HeaderComponent,
    ProductSliderCardComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CarouselComponent,
    MatToolbarModule, MatButtonModule, MatIconModule,MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
