import { Component, EventEmitter, Inject, Input, OnInit, Output } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";


@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.css"]
})
export class ModalComponent{


  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}


  title : string = "Sobre Nós";
  description : string = "Descriçao";

}

