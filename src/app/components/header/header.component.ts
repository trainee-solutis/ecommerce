import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ModalComponent } from "@components/modal/modal.component";
import { BasketService } from "app/services/basket/basket.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  quantity: number;

  constructor(public dialog: MatDialog, public basketService: BasketService) {
    this.quantity = 0;
  }

  openDialog(valorRecebido: number) {
    const dialogRef = this.dialog.open(ModalComponent, {
      data: { valorRecebido }
    });
  }
  ngOnInit(): void {
    this.basketService.quantity$.subscribe(quantity => {
      this.quantity = quantity;
    });
  }

}
