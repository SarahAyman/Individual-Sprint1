import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable()
export class StoreService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any> {
    return this.http.get("http://localhost:3000/api/product/getProducts");
  }

  addProduct(product: any): Observable<any> {
    return this.http.post<any>("http://localhost:3000/api/product/createProduct", product, httpOptions);
  }

  deleteProduct(product: any): Observable<any> {
    return this.http.delete<any>(`${"http://localhost:3000/api/product/deleteProduct"}/${product._id}`, httpOptions);
  }

  updateProduct(product: any, updatedProduct: any): Observable<any> {
    return this.http.patch(`${"http://localhost:3000/api/product/updateProduct"}/${product._id}`, updatedProduct, httpOptions);
  
  }

  /*searchProducts(term: string): Observable<any> {
    return this.http.get<any>(`http://localhost:3000/api/product/getProducts/?name=${term}`);
  }*/

}
