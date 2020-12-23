import { Component, OnInit } from '@angular/core';
import { Product } from './models/Product';
import { Store } from '@ngrx/store';
import { getProducts, State } from './store/products';
import { ProductsService } from './services/products.service';
import { setProducts } from './store/products/products.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'grid-list';

  public viewStatus: 'list-view' | 'grid-view' = 'list-view';

  public productList: Product[] = [];
  public productList$: Observable<Product[]>;

  public activeProductId: string;

  constructor(private productsService: ProductsService,
              private store: Store<State>) {
  }

  ngOnInit(): void {
    this.store.dispatch(setProducts());
    this.productList$ = this.store.select(getProducts);
  }

  public onProductClick(event: string): void {
    this.activeProductId = event;
    console.log(event);
  }

}
