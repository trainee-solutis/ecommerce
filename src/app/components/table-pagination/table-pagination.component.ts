import { Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { productsShop } from 'app/models/productsShop';
import { shop } from 'app/models/shop';

@Component({
  selector: 'app-table-pagination',
  templateUrl: './table-pagination.component.html',
  styleUrls: ['./table-pagination.component.css']
})
export class TablePaginationComponent implements OnInit {

  @Input() compras: productsShop[] = []
  @Input() idCompra: number = 0


  // @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    // this.dataSource.paginator = this.paginator;
    console.log(this.compras)

  }

  formatarDataBrasileira(data:Date): string {
    const dia = data.getDate().toString().padStart(2, '0');
    const mes = (data.getMonth() + 1).toString().padStart(2, '0'); // Meses começam do zero
    const ano = data.getFullYear();

    return `${dia}/${mes}/${ano}`;
  }


}




