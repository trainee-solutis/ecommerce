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
import { MatDialogModule } from "@angular/material/dialog";
import { ModalButtonComponent } from "@components/modal-button/modal-button.component";
import { ModalComponent } from "@components/modal/modal.component";
import { HttpClientModule } from "@angular/common/http";

import { ProductSliderComponent } from "./components/product-slider/product-slider.component";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { ProductSliderCardComponent } from "./components/product-slider-card/product-slider-card.component";
import { HomeComponent } from "./pages/home/home.component";
import { ProductComponent } from "./pages/product/product.component";

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    HeaderComponent,
    ProductSliderCardComponent,
    HomeComponent,
    FooterComponent,
    ProductSliderComponent,
    ProductComponent,
    ModalComponent,
    ModalButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    CarouselComponent,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
