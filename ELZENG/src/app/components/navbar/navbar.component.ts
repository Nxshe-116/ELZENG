import {Component, HostListener, OnInit} from '@angular/core';
import {NgClass, NgIf} from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [
    NgIf

  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {


  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }


  ngOnInit(): void {
  }


  @HostListener('window:scroll', [])
  onWindowScroll(): void {

    // this.isScrolled = window.scrollY > 0;
  }
}
