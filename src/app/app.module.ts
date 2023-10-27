import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { NgbModule, NgbRatingModule } from "@ng-bootstrap/ng-bootstrap";
import { CarouselComponent } from "@components/carousel/carousel.component";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatCardModule} from "@angular/material/card";
import { HeaderComponent } from "@components/header/header.component";
import { SearchBarComponent } from "@components/searchBar/search-bar.component";
import { FooterComponent } from "@components/footer/footer.component";
import { MatDialogModule } from "@angular/material/dialog";
import { ModalComponent } from "@components/modal/modal.component";
import { HttpClientModule } from "@angular/common/http";
import { ProductSliderComponent } from "@components/product-slider/product-slider.component";
import { ProductSliderCardComponent } from "@components/product-slider-card/product-slider-card.component";
import { FormsModule } from "@angular/forms";
import { StarsComponent } from "@components/stars/stars.component";
import { BreadcrumbModule, BreadcrumbService } from "xng-breadcrumb";
import { DatasheetComponent } from "@components/datasheet/datasheet.component";
import { DescriptionComponent } from "@components/description/description.component";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { HomeComponent } from "./pages/home/home.component";
import { ProductComponent } from "./pages/product/product.component";
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    HeaderComponent,
    ProductSliderCardComponent,
    HomeComponent,
    FooterComponent,
    ProductComponent,
    ModalComponent,
    ProductSliderComponent,
    DatasheetComponent,
    DescriptionComponent,
    ButtonComponent
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
    MatDialogModule,
    FormsModule,
    NgbRatingModule,
    StarsComponent,
    BreadcrumbModule
  ],
  providers: [
    BreadcrumbService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
