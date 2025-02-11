import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../shared/confirm-dialog/confirm-dialog.component';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>();
  displayedColumns: string[] = ['customerId', 'customerName', 'email', 'phone', 'address', 'action'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  isLoading: boolean = false;

  constructor(
    private router: Router,
    private toastr: ToastrService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.showLoaderAndLoadData();
  }

  // Function to show loader and then load data
  showLoaderAndLoadData(): void {
    this.isLoading = true; // Show loader
    setTimeout(() => {
      // Simulate data loading
      const customerData = [
        { customerId: 1, customerName: 'Alice Johnson', email: 'alice@example.com', phone: '+1234567890', address: '123 Main St' },
        { customerId: 2, customerName: 'Bob Smith', email: 'bob@example.com', phone: '+9876543210', address: '456 Elm St' },
        { customerId: 3, customerName: 'Charlie Brown', email: 'charlie@example.com', phone: '+1357924680', address: '789 Oak St' },
        { customerId: 4, customerName: 'Diana Miller', email: 'diana@example.com', phone: '+2468013579', address: '321 Maple St' },
        { customerId: 5, customerName: 'Eva Davis', email: 'eva@example.com', phone: '+3692581470', address: '654 Pine St' },
        { customerId: 6, customerName: 'Frank Wilson', email: 'frank@example.com', phone: '+7539514682', address: '987 Cedar St' },
        { customerId: 7, customerName: 'Grace Taylor', email: 'grace@example.com', phone: '+8642097531', address: '147 Birch St' },
        { customerId: 8, customerName: 'Henry Lee', email: 'henry@example.com', phone: '+2583691470', address: '258 Walnut St' },
        { customerId: 9, customerName: 'Ivy Clark', email: 'ivy@example.com', phone: '+4712583690', address: '369 Ash St' },
        { customerId: 10, customerName: 'Jack Turner', email: 'jack@example.com', phone: '+9517538462', address: '456 Poplar St' }
      ];
      this.dataSource = new MatTableDataSource<any>(customerData); // Assign data to the table
      this.dataSource.paginator = this.paginator; // Attach paginator
      this.isLoading = false; // Hide loader
    }, 2000); // Simulate 2-second API delay
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  addCustomer(): void {
    this.router.navigate(['add-customer']);
  }

  deleteCustomer(customer: any): void {
    Swal.fire({
      title: 'Delete Customer?',
      text: 'Are you sure you want to delete this customer?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
      customClass: {
        confirmButton: 'swal-wide-button',
        cancelButton: 'swal-wide-button'
      }
    }).then((result) => {
      if (result.isConfirmed) {
        this.isLoading = true;

        setTimeout(() => {
          // Simulate customer deletion (replace with actual API call)
          this.isLoading = false;
          Swal.fire({
            title: 'Deleted!',
            text: 'Customer has been deleted.',
            icon: 'success',
            timer: 2000,
            showConfirmButton: false
          });
        }, 1000);
      }
    });
  }

}
