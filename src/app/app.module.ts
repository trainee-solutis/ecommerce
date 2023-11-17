import { MatFormFieldModule } from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatButton, MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatCardModule} from "@angular/material/card";
import { MatDialogModule } from "@angular/material/dialog";
import { MatInputModule } from "@angular/material/input";
import { LOCALE_ID, NgModule } from "@angular/core";
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
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from "@angular/material/sidenav";
import {MatMenuModule} from '@angular/material/menu';

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
import {MatBadgeModule} from '@angular/material/badge';
import { BasketProductListComponent } from './components/basket-product-list/basket-product-list.component';
import { TotalPriceComponent } from "@components/total-price/total-price.component";
import { SuccessComponent } from './pages/success/success.component';
import {  SignUpComponent } from './pages/signup/signup.component';
import { MatNativeDateModule } from "@angular/material/core";
import {MatDividerModule} from '@angular/material/divider';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { ProfileComponent } from './pages/profile/profile.component';
import { LoginComponent } from './pages/login/login.component';
import { NgChartsModule } from 'ng2-charts';
import { ProfileImageComponent } from './components/profile-image/profile-image.component';
import { ImageCropperComponent } from './components/profile-image/image-cropper/image-cropper.component';
import { AccessDataPageComponent } from './components/access-data-page/access-data-page.component';
import { RegistrationDataComponent } from './components/registration-data/registration-data.component';


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
    BasketProductListComponent,
    TotalPriceComponent,
    SignUpComponent,
    SuccessComponent,
    ProfileComponent,
    LoginComponent,
    ProfileImageComponent,
    ImageCropperComponent,
    AccessDataPageComponent,
    RegistrationDataComponent
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
    MatBadgeModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDividerModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatMenuModule,
    NgChartsModule,
  ],
  providers: [
    BreadcrumbService,
    MatFormFieldModule,
    BrowserAnimationsModule,
    FormsModule,
    { provide: LOCALE_ID, useValue: 'pt'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
