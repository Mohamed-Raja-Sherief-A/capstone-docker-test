import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'src/app/interface/order/order';

@Injectable({
  providedIn: 'root'
})
export class OrderserviceService {
  rootUrl:string="http://52.90.93.8:3500/orders/";
  constructor(private http:HttpClient) { }
  addOrder(order:Order):Observable<Order>{
    return this.http.post<Order>(this.rootUrl,order);
  }
}
