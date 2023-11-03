import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() texto: string = '';
  @Input() action: Function = () => {};
  @Input() btnClass: string = 'btn btn-primary';
  @Output() click = new EventEmitter<void>();

  onClick() {
    this.action();
    this.click.emit();
  }

  added(){
    this.btnClass = 'btn btn-success';
    setInterval(() => {
      this.btnClass = 'btn btn-primary';
    }, 2000);
  }
}
