import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomersComponent } from './customers/customers.component';
import { AddCustomersComponent } from './customers/add-customers/add-customers.component';
import { PaymentsComponent } from './payments/payments.component';

const routes: Routes = [
  {
    path: 'dashboard', 
    component: DashboardComponent 
  },
  {
    path: 'customer', 
    component: CustomersComponent 
  },
  {
    path: 'add-customer', 
    component: AddCustomersComponent 
  },
  {
    path: 'payment', 
    component: PaymentsComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)], 
  exports: [RouterModule] 
})
export class PagesRoutingModule { }
