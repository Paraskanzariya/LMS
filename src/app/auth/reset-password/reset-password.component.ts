import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr'; // Import ToastrService
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent {
  resetForm: FormGroup;
  isSubmitting: boolean = false;

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService, // Inject ToastrService
    private router: Router
  ) {
    this.resetForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  // Get form controls for validation
  get email() {
    return this.resetForm.get('email');
  }

  // Handle form submission
  onSubmit(): void {
    if (this.resetForm.valid) {
      const email = this.resetForm.value.email;
      this.isSubmitting = true;
      // Simulate API request for password reset
      setTimeout(() => {
        // For now, show success toast after form submission
        this.toastr.success('Password reset link has been sent to your email!', 'Success');
        this.router.navigate(['/login']); // Redirect to login page after reset
        this.isSubmitting = false;
      }, 2000);
    } else {
      this.toastr.error('Please enter a valid email address!', 'Error');
    }
  }

  // Ensure to mark the form as touched when an input field is focused
  markTouched(controlName: string): void {
    const control = this.resetForm.get(controlName);
    if (control) {
      control.markAsTouched();
    }
  }
}
