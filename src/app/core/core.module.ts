import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './ui/sidebar/sidebar.component';
import { NavbarComponent } from './ui/navbar/navbar.component';



@NgModule({
  declarations: [
    SidebarComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
