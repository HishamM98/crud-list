import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  postProduct(data: any): Observable<HttpResponse<any>> {
    return this.http.post<any>('http://localhost:3000/productList/', data);
  }

  getProduct(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/productList/');
  }

  updateProduct(data: any, id: number): Observable<HttpResponse<any>> {
    return this.http.put<any>('http://localhost:3000/productList/' + id, data);
  }

  deleteProduct(id: number): Observable<HttpResponse<any>> {
    return this.http.delete<any>('http://localhost:3000/productList/' + id);
  }
}
