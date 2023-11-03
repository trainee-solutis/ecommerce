import { MatFormFieldModule } from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatCardModule} from "@angular/material/card";
import { MatDialogModule } from "@angular/material/dialog";
import { MatInputModule } from "@angular/material/input";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { NgbModule, NgbRatingModule } from "@ng-bootstrap/ng-bootstrap";
import { CarouselComponent } from "@components/carousel/carousel.component";
import { HeaderComponent } from "@components/header/header.component";
import { SearchBarComponent } from "@components/searchBar/search-bar.component";
import { FooterComponent } from "@components/footer/footer.component";
import { ModalComponent } from "@components/modal/modal.component";
import { HttpClientModule } from "@angular/common/http";
import { ProductSliderComponent } from "@components/product-slider/product-slider.component";
import { ProductSliderCardComponent } from "@components/product-slider-card/product-slider-card.component";
import { StarsComponent } from "@components/stars/stars.component";
import { BreadcrumbModule, BreadcrumbService } from "xng-breadcrumb";
import { DatasheetComponent } from "@components/datasheet/datasheet.component";
import { DescriptionComponent } from "@components/description/description.component";
import { ImageSelectorComponent } from "@components/image-selector/image-selector.component";
import { CalculateShippingComponent } from "@components/calculate-shipping/calculate-shipping.component";
import { FormComponent } from "@components/form/form.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { HomeComponent } from "./pages/home/home.component";
import { ProductComponent } from "./pages/product/product.component";
import { ButtonComponent } from "./components/button/button.component";
import { CepValidatorDirective } from "./directives/cep-validator.directive";
import { NgxImageZoomModule } from "ngx-image-zoom";

import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { BasketComponent } from './pages/basket/basket.component';
import {MatBadgeModule} from '@angular/material/badge';import { BasketProductListComponent } from './components/basket-product-list/basket-product-list.component';

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
    ButtonComponent,
    ImageSelectorComponent,
    CalculateShippingComponent,
    CepValidatorDirective,
    FormComponent,
    BasketComponent,
    BasketProductListComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    RouterModule,
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
    BreadcrumbModule,
    NgxImageZoomModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatBadgeModule
  ],
  providers: [
    BreadcrumbService,
    MatFormFieldModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
