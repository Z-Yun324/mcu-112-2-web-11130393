import { JsonPipe } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Data } from '@angular/router';
import { map } from 'rxjs';
import { IProductFrom } from '../interface/product-form.interface';
import { Product } from '../model/product';

@Component({
  selector: 'app-product-form-page',
  standalone: true,
  imports: [JsonPipe, ReactiveFormsModule],
  templateUrl: './product-form-page.component.html',
  styleUrl: './product-form-page.component.css',
})
export class ProductFormPageComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);

  form = new FormGroup<IProductFrom>({
    id: new FormControl<number | null>(null),
    name: new FormControl<string | null>(null),
    company: new FormControl<string | null>(null),
    isShow: new FormControl<boolean>(false, { nonNullable: true }),
    price: new FormControl<string | null>(null),
  });

  product!: Product;

  ngOnInit(): void {
    this.route.paramMap.subscribe();

    this.route.data.subscribe((data) => (this.product = data['product']));

    this.route.data
      .pipe(
        map((data: Data) => data['product'])
        //..
        //..
        //..
      )
      .subscribe((product) => (this.product = product));
  }
}
