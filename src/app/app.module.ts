import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FullLayoutComponent } from './shared/layouts/full-layout/full-layout.component';
import { BlankLayoutComponent } from './shared/layouts/blank-layout/blank-layout.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FullLayoutComponent,
    BlankLayoutComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
