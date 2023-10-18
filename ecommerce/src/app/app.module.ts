import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import {MatButtonModule} from '@angular/material/button';


import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MatDialogModule } from "@angular/material/dialog";
import { ModalButtonComponent } from "@components/modal-button/modal-button.component";
import { ModalComponent } from "@components/modal/modal.component";

@NgModule({
  declarations: [
    AppComponent,
    ModalButtonComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
