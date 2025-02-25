import { Component } from '@angular/core';

@Component({
  selector: 'app-landing',
  standalone: false,
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css',
})
export class LandingComponent {
  progress = 10;

  ngOnInit() {
    const navBtn = document.getElementById('menu-btn');
    const navList = document.querySelector('.nav-list');
    navBtn?.addEventListener('click', () => {
      navList?.classList.toggle('active');
    });
  }
  scrollToSection(name: string) {
    document.getElementById(name)?.scrollIntoView({ behavior: 'smooth' });
  }
}
