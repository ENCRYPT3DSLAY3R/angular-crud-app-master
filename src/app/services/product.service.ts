import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private _http: HttpClient) {}

  addProduct(data: any): Observable<any> {
    return this._http.post('https://api-node-prueba-production.up.railway.app/api/products', data);
  }

  updateProduct(id: number, data: any): Observable<any> {
    return this._http.put(`https://api-node-prueba-production.up.railway.app/api/products/${id}`, data);
  }

  getProductList(): Observable<any> {
    return this._http.get('https://api-node-prueba-production.up.railway.app/api/products');
  }

  deleteProduct(id: number): Observable<any> {
    return this._http.delete(`https://api-node-prueba-production.up.railway.app/api/products/${id}`);
  }
}
