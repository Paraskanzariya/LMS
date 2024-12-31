import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomersComponent } from './customers/customers.component';

const routes: Routes = [
  {
    path: 'dashboard', 
    component: DashboardComponent 
  },
  {
    path: 'customer', 
    component: CustomersComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)], 
  exports: [RouterModule] 
})
export class PagesRoutingModule { }
