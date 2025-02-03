import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PaymentsService {
    private apiUrl = 'https://jsonplaceholder.typicode.com/posts'; // Replace with your actual API URL

    constructor(private http: HttpClient) { }

    // Fetch all payments
    getPayments(): Observable<any[]> {
        return this.http.get<any[]>(this.apiUrl);
    }

    // Add a new payment (Example)
    addPayment(payment: any): Observable<any> {
        return this.http.post(this.apiUrl, payment);
    }

    // Delete payment by ID (Example)
    deletePayment(paymentId: string): Observable<any> {
        return this.http.delete(`${this.apiUrl}/${paymentId}`);
    }
}
