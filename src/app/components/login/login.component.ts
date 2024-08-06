import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @Output() close = new EventEmitter<void>();  // EventEmitter to notify parent component
  isVisible = true;  // Control the visibility of the login modal

  // Method to close the modal and emit close event
  closeModal(): void {
    this.isVisible = false;
    this.close.emit();
  }

  // Method to handle login action
  login(): void {
    alert('Logged in successfully!');
    this.closeModal();
  }

  // Method to handle forgot password action
  forgotPassword(): void {
    alert('Password reset link sent!');
  }
}
