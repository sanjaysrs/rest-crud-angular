import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../models/customer';
import { Observable } from 'rxjs';

const BASIC_URL = "http://localhost:9000";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  postCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(BASIC_URL + "/api/customer", customer);
  }

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(BASIC_URL + "/api/customer");
  }

  getCustomerById(id: string): Observable<Customer> {
    return this.http.get<Customer>(BASIC_URL + "/api/customer/" + id);
  }

  updateCustomer(customer: Customer, id: string) {
    return this.http.put<Customer>(BASIC_URL + "/api/customer/" + id, customer);
  }

  deleteCustomer(id: string): Observable<void> {
    return this.http.delete<void>(BASIC_URL + "/api/customer/" + id);
  }
}
