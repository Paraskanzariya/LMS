import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-customers',
  templateUrl: './add-customers.component.html',
  styleUrls: ['./add-customers.component.scss'],
})
export class AddCustomersComponent implements OnInit {
  customerForm: FormGroup;

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

  ngOnInit(): void {}

  /**
   * Handle the form submission
   */
  addCustomer(): void {
    if (this.customerForm.valid) {
      const newCustomer = this.customerForm.value;

      // Log the data (you can replace this with an API call)
      console.log('Customer Added:', newCustomer);

      // Show a success notification
      this.toastr.success('Customer added successfully!', 'Success');

      // Navigate back to the customers list
      this.router.navigate(['/customers']);
    } else {
      this.toastr.error('Please fill all required fields correctly.', 'Error');
    }
  }

  /**
   * Handle cancel button
   */
  cancel(): void {
    this.customerForm.reset();
    this.router.navigate(['/customer']); // Navigate back to customers list
  }
}
