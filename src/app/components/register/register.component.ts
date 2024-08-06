import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  @Output() close = new EventEmitter<void>();
  isVisible = true;

  hideModal(): void {
    this.isVisible = false;
    this.close.emit();
  }

  register(): void {
    alert('Registered successfully!');
    this.hideModal();
  }
}
