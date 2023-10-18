import { SearchBarComponent } from './components/searchBar/search-bar.component';
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatCardModule} from '@angular/material/card';

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "@components/header/header.component";

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule, MatButtonModule, MatIconModule,MatCardModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
