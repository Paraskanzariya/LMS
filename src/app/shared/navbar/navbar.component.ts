import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Output() toggleSidebarEvent: EventEmitter<boolean> = new EventEmitter<boolean>(); // Emits sidebar toggle state
  isShowSidebar: boolean = true; // Sidebar visibility status
  dropdownOpen: boolean = false; // Dropdown menu state
  userName: string = 'Paras Kanzariya'; // Replace with dynamic value

  constructor() { }

  openCloseSidebar(): void {
    this.isShowSidebar = !this.isShowSidebar; // Toggle sidebar state
    this.toggleSidebarEvent.emit(this.isShowSidebar); // Notify parent or other components
    this.updateSidebarStyles(); // Adjust styles dynamically
  }

  closeSideBar(): void {
    this.isShowSidebar = false; // Set sidebar to hidden
    this.toggleSidebarEvent.emit(this.isShowSidebar); // Notify parent or other components
    this.updateSidebarStyles(); // Adjust styles dynamically
  }

  toggleDropdown(): void {
    this.dropdownOpen = !this.dropdownOpen; // Toggle dropdown visibility
  }

  changePassword(): void {
    // Handle change password functionality
  }

  doLogout(): void {
    // Handle logout functionality
  }

  private updateSidebarStyles(): void {
    const sidebar = document.getElementById('main-sidebar');
    const mainPanel = document.getElementById('main-panel');

    if (this.isShowSidebar) {
      sidebar?.style.setProperty('width', '210px');
      mainPanel?.style.setProperty('margin-left', '210px');
    } else {
      sidebar?.style.setProperty('width', '50px');
      mainPanel?.style.setProperty('margin-left', '50px');
    }
  }
}
