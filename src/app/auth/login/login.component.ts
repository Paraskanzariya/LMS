import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';  // Import ToastrService

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup;
  passwordFieldType: string = 'password';
  isSubmitting: boolean = false;

  private staticUsername = 'admin@test.com';
  private staticPassword = 'admin123';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService // Inject ToastrService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.loginForm.get(controlName);
    return !!control?.invalid && (control?.dirty || control?.touched);
  }

  getErrorMessage(controlName: string): string {
    const control = this.loginForm.get(controlName);
    if (control?.hasError('required')) return 'This field is required.';
    if (control?.hasError('email')) return 'Invalid email address.';
    if (control?.hasError('minlength'))
      return `Minimum length is ${control.errors?.['minlength'].requiredLength}.`;
    return '';
  }

  togglePasswordVisibility(): void {
    this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.isSubmitting = true;  // Start the button loader
      const { email, password } = this.loginForm.value;
  
      // Simulate a delay (for demo purposes) and check credentials after the delay
      setTimeout(() => {
        if (email === this.staticUsername && password === this.staticPassword) {
          // Login successful
          console.log('Login Successful!');
          this.toastr.success('Login Successfully!', 'Success'); // Show success toast
          this.router.navigate(['/dashboard']); // Redirect to dashboard
        } else {
          // Invalid credentials
          console.error('Invalid username or password.');
          this.loginForm.setErrors({ invalidCredentials: true }); // Show error in form
          this.toastr.error('Invalid email or password!', 'Error'); // Show error toast
        }
  
        // Complete the button loader by setting isSubmitting to false
        this.isSubmitting = false;
      }, 1000); // Simulated delay (2 seconds)
    } else {
      console.log('Form is invalid.');
      this.toastr.warning('Please fill in all fields correctly!', 'Warning'); // Show warning toast for invalid form
    }
  }
  
}
