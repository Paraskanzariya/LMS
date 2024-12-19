import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  isShow: boolean = true; // For toggling sidebar visibility
  menuItems = [
    { label: 'Dashboard', icon: 'home', link: '/dashboard' },
    { label: 'Customers', icon: 'group', link: '/customers' },
    { label: 'Payments', icon: 'payments', link: '/payments' },
    { label: 'Invoices', icon: 'receipt', link: '/invoices' },
    { label: 'Loan Plans', icon: 'attach_money', link: '/loan-plans' },
    { label: 'Loans', icon: 'monetization_on', link: '/loans' },
    { label: 'Reports', icon: 'reports', link: '/reports' },
    { label: 'Settings', icon: 'settings', link: '/settings' }
  ];  

  toggleSidebar(): void {
    this.isShow = !this.isShow;
  }
}
