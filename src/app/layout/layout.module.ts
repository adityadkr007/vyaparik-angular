import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layout-components/header/header.component';
import { FooterComponent } from './layout-components/footer/footer.component';
import { SidebarComponent } from './layout-components/sidebar/sidebar.component';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AuthLayoutComponent,
  ],
  imports: [CommonModule, AppRoutingModule],
  exports: [
    AuthLayoutComponent,
    HeaderComponent,
    SidebarComponent, // Ensure Sidebar is exported too
    FooterComponent,
  ],
})
export class LayoutModule {}
