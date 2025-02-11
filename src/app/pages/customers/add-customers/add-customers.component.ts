import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-customers',
  templateUrl: './add-customers.component.html',
  styleUrls: ['./add-customers.component.scss'],
})
export class AddCustomersComponent implements OnInit {
  customerForm: FormGroup;
  isLoading: boolean = true;  // Initially, loader is shown

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService
  ) {
    // Initialize the form with validation
    this.customerForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\+?\d{10,15}$/)]],
      address: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  ngOnInit(): void {
    // Simulate a loading delay (e.g., fetching data from an API)
    setTimeout(() => {
      this.isLoading = false;  // Hide loader after 2 seconds
    }, 2000);
  }

  /**
   * Handle the form submission
   */
  addCustomer(): void {
    if (this.customerForm.valid) {
      this.isLoading = true;  // Show loader while adding customer

      setTimeout(() => {
        const newCustomer = this.customerForm.value;
        console.log('Customer Added:', newCustomer);
        // this.toastr.success('Customer added successfully!', 'Success');
        this.isLoading = false;  // Hide loader after adding customer
        Swal.fire({
          title: 'Success!',
          text: 'Customer added successfully!',
          icon: 'success',
          timer: 1500,  // Show the alert for 2 seconds
          showConfirmButton: false
        }).then(() => {
          this.router.navigate(['/customer']);
        });
      }, 1000);  // Simulate API call delay
    } else {
      this.toastr.error('Please fill all required fields correctly.', 'Error');
      Swal.fire({
        title: 'Error!',
        text: 'Please fill all required fields correctly.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  }

  /**
   * Handle cancel button
   */
  cancel(): void {
    this.customerForm.reset();
    this.router.navigate(['/customer']);
  }
}
