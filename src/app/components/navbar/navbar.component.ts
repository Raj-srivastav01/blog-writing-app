import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoginVisible = false;
  isRegisterVisible = false;
  isNavbarVisible = true;

  ngOnInit(): void {}

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const offset = window.pageYOffset;
    const navbarElement = document.querySelector('.navbar') as HTMLElement;

    if (offset > 0) {
      navbarElement.classList.add('fixed-top');
      this.isNavbarVisible = false;
    } else {
      navbarElement.classList.remove('fixed-top');
      this.isNavbarVisible = true;
    }
  }

  openLoginModal(): void {
    this.isLoginVisible = true;
    this.isRegisterVisible = false;
  }

  closeLoginModal(): void {
    this.isLoginVisible = false;
  }

  openRegisterModal(): void {
    this.isRegisterVisible = true;
    this.isLoginVisible = false;
  }

  closeRegisterModal(): void {
    this.isRegisterVisible = false;
  }
}
