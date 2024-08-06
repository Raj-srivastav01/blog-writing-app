import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showLoginModal = false;
  showRegisterModal = false;

  showLogin(): void {
    this.showLoginModal = true;
    this.showRegisterModal = false;
  }

  showRegister(): void {
    this.showRegisterModal = true;
    this.showLoginModal = false;
  }
}
