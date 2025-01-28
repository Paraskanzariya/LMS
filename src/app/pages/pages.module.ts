import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // Use CommonModule here for feature modules
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Components
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomersComponent } from './customers/customers.component';
import { AddCustomersComponent } from './customers/add-customers/add-customers.component';

// Routing Module
import { PagesRoutingModule } from './pages-routing.module';

// Shared Module
import { SharedModule } from '../shared/shared.module';

// Angular Material Modules
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    DashboardComponent,
    CustomersComponent,
    AddCustomersComponent, // Add customer-related components
  ],
  imports: [
    CommonModule, // Use CommonModule for directives like NgIf, NgFor
    PagesRoutingModule, // Routing module for PagesModule
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    // Angular Material Modules
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule
  ],
})
export class PagesModule { }
