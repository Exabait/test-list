import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/Product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  public getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`https://test-list-server.herokuapp.com/api/products`, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}
