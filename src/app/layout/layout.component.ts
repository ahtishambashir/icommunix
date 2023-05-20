import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  sidebarActive = false;
  mainContentClosed = false;

  toggleSidebar() {
    this.sidebarActive = !this.sidebarActive;
  }

  toggleMainContent() {
    this.mainContentClosed = !this.mainContentClosed;
  }

  closeSidebar() {
    this.sidebarActive = false;
  }
}
