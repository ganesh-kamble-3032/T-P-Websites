import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // ngAfterViewInit() {
  //   const dropdowns = document.querySelectorAll('.nav-item.dropdown');
  //   dropdowns.forEach((item: any) => {
  //     item.addEventListener('mouseenter', () => {
  //       const link = item.querySelector('.dropdown-toggle');
  //       link && new (window as any).bootstrap.Dropdown(link).show();
  //     });
  //     item.addEventListener('mouseleave', () => {
  //       const link = item.querySelector('.dropdown-toggle');
  //       link && new (window as any).bootstrap.Dropdown(link).hide();
  //     });
  //   });
  // }

  isDropdownOpen = false;

toggleDropdown() {
  this.isDropdownOpen = !this.isDropdownOpen;
}


}
