import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Product } from 'app/models/product';

@Component({
  selector: 'app-datasheet',
  templateUrl: './datasheet.component.html',
  styleUrls: ['./datasheet.component.css']
})
export class DatasheetComponent implements OnInit {

  @Input() product: Product | undefined;

  constructor() {}

  ngOnInit(): void {

  }
}
