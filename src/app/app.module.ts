import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Already includes animations
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    RouterModule,
    SharedModule,
    ToastrModule.forRoot({
      timeOut: 4000, // 3 seconds duration
      positionClass: 'toast-top-right', // Position of the toast
      preventDuplicates: true, // Avoid duplicate toasts
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
