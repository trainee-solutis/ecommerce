import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ModalComponent } from "@components/modal/modal.component";
import { BasketService } from "app/services/basket/basket.service";
import { MatMenu } from "@angular/material/menu";
import { AuthenticatorService } from "app/services/authenticator.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit, AfterViewInit {
  quantity: number;
  isLogged: boolean = false;

  constructor(public dialog: MatDialog, public basketService: BasketService, public authService: AuthenticatorService) {
    this.quantity = 0;
  }
  ngAfterViewInit(): void {
    this.authService.isLogged().then((data) => {
      if(data){
        this.isLogged = true
      }
      console.log(data)}
    );
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
