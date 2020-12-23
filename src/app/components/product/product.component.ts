import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../models/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() productItem: Product;
  @Output() chosenProduct: EventEmitter<string> = new EventEmitter<string>();

  @Input() viewStatus: 'list-view' | 'grid-view';

  public fromCreated = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

}
