import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ModalComponent } from "@components/modal/modal.component";
import { Email } from "app/models/email";
import { EmailSenderService } from "app/services/email-sender.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  email: Email = {
    name:"Antonio",
    to: "antonio@email.com",
    subject: "teste",
    message: "aqui a message",
  };
  constructor(public dialog: MatDialog, private service: EmailSenderService) {}


  openDialog(valorRecebido: number) {
    const dialogRef = this.dialog.open(ModalComponent, {
      data: { valorRecebido }
    });
  }
  ngOnInit(): void {
    this.service.sendEmail(this.email).subscribe((res) => {
      this.email = res;
    });
  }
}
