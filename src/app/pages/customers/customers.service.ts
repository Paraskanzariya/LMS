import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  private apiUrl = 'https://your-api-url.com/customers'; // Replace with your actual API endpoint

  constructor(private http: HttpClient) { }

  // Add new customer
  addCustomer(customer: any): Observable<any> {
    return this.http.post(this.apiUrl, customer); // This should POST the new customer to the server
  }

  // Get all customers
  getCustomers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl); // Fetch the list of customers from the server
  }
}
