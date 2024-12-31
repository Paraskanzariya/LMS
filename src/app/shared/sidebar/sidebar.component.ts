import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  isShow: boolean = true; // Sidebar toggle state
  menuItems = [
    { label: 'Dashboard', icon: 'home', link: '/dashboard' },
    { label: 'Customers', icon: 'group', link: '/customer' },
    { label: 'Payments', icon: 'payments', link: '/payments' },
    { label: 'Invoices', icon: 'receipt', link: '/invoices' },
    { label: 'Loan Plans', icon: 'attach_money', link: '/loan-plans' },
    { label: 'Loans', icon: 'monetization_on', link: '/loans' },
    { label: 'Reports', icon: 'reports', link: '/reports' },
    { label: 'Settings', icon: 'settings', link: '/settings' }
  ];

  constructor() { }

  ngOnInit(): void { }

  toggleSidebar(): void {
    this.isShow = !this.isShow;
    this.updateSidebarStyles();
  }

  private updateSidebarStyles(): void {
    const sidebar = document.getElementById('main-sidebar');
    const mainPanel = document.getElementById('main-panel');

    if (this.isShow) {
      sidebar?.style.setProperty('width', '250px');
      mainPanel?.style.setProperty('margin-left', '250px');
    } else {
      sidebar?.style.setProperty('width', '70px');
      mainPanel?.style.setProperty('margin-left', '70px');
    }
  }
}
