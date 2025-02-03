import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PaymentsService } from './payments.service';
import { ConfirmDialogComponent } from '../../shared/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrl: './payments.component.scss'
})
export class PaymentsComponent implements OnInit, AfterViewInit {
  dataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = ['paymentId', 'customerName', 'amount', 'paymentDate', 'action'];
  isLoading = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private toastr: ToastrService,
    private router: Router,
    public dialog: MatDialog,
    private paymentsService: PaymentsService
  ) { }

  ngOnInit(): void {
    this.loadPaymentData();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator; // Attach paginator after view initialization
  }

  // loadPaymentData(): void {
  //   this.isLoading = true;
  //   this.paymentsService.getPayments().subscribe({
  //     next: (paymentData) => {
  //       this.dataSource.data = paymentData; // Assign data to the table
  //       this.isLoading = false;
  //     },
  //     error: () => {
  //       this.toastr.error('Failed to load payments', 'Error');
  //       this.isLoading = false;
  //     }
  //   });
  // }

  loadPaymentData(): void {
    this.isLoading = true;

    // Static mock data for testing
    const mockPayments = [
      { paymentId: 'P1001', customerName: 'John Doe', amount: 120.50, paymentDate: new Date() },
      { paymentId: 'P1002', customerName: 'Jane Smith', amount: 250.00, paymentDate: new Date('2024-06-15') },
      { paymentId: 'P1003', customerName: 'Alice Johnson', amount: 75.90, paymentDate: new Date('2024-07-01') },
      { paymentId: 'P1004', customerName: 'Bob Williams', amount: 180.25, paymentDate: new Date('2024-07-05') }
    ];

    // Simulating an API call delay
    setTimeout(() => {
      this.dataSource.data = mockPayments;
      this.isLoading = false;
    }, 1000);
  }

  addPayment(): void {
    this.router.navigate(['add-payment']); // Navigate to Add Payment page
  }

  editPayment(payment: any): void {
    this.router.navigate(['edit-payment', payment.paymentId]); // Navigate to Edit Payment page
  }

  deletePayment(payment: any): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: { title: 'Delete Payment?', message: 'Are you sure you want to delete this payment?' }
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.isLoading = true;

        // Call API to delete payment
        this.paymentsService.deletePayment(payment.paymentId).subscribe({
          next: () => {
            this.dataSource.data = this.dataSource.data.filter(p => p.paymentId !== payment.paymentId);
            this.toastr.success('Payment deleted successfully!', 'Success');
            this.isLoading = false;
          },
          error: () => {
            this.toastr.error('Failed to delete payment', 'Error');
            this.isLoading = false;
          }
        });
      }
    });
  }

  downloadAsPDF(): void {
    // Placeholder for PDF generation logic
    this.toastr.info('PDF Download Initiated', 'Info');
  }
}
