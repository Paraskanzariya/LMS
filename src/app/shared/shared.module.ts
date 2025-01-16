import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ButtonLoaderComponent } from './button-loader/button-loader.component';
import { FullLayoutComponent } from './layouts/full-layout/full-layout.component';
import { BlankLayoutComponent } from './layouts/blank-layout/blank-layout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PageLoaderComponent } from './page-loader/page-loader.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
  ],
  declarations: [
    ButtonLoaderComponent,
    FullLayoutComponent,
    BlankLayoutComponent,
    NavbarComponent,
    PageLoaderComponent,
    SidebarComponent,
  ],
  exports: [
    ButtonLoaderComponent,
    FullLayoutComponent,
    BlankLayoutComponent,
    NavbarComponent,
    PageLoaderComponent,
    SidebarComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}
