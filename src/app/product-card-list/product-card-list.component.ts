import { Component, EventEmitter, Input, Output, numberAttribute } from '@angular/core';
import { Product } from '../model/product';
import { PaginationComponent } from '../pagination/pagination.component';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-product-card-list',
  standalone: true,
  imports: [ProductCardComponent, PaginationComponent],
  templateUrl: './product-card-list.component.html',
  styleUrl: './product-card-list.component.css',
})
export class ProductCardListComponent {
  @Input({ required: true })
  products!: Product[];

  @Input({ required: true, transform: numberAttribute })
  pageSize!: number;

  //當前頁
  @Input({ transform: numberAttribute })
  pageIndex = 1;
  @Output()
  pageIndexChange = new EventEmitter<number>();

  //總頁數
  @Input({ required: true, transform: numberAttribute })
  totalCount!: number;

  @Output()
  view = new EventEmitter<Product>();

  @Output()
  edit = new EventEmitter<Product>();

  @Output()
  remove = new EventEmitter<Product>();
}
