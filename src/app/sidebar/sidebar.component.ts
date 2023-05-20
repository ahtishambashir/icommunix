import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  dashboardIconUrl: SafeResourceUrl;
  contactIconUrl: SafeResourceUrl;
  teamIconUrl: SafeResourceUrl;
  queueIconUrl: SafeResourceUrl;
  interactionIconUrl: SafeResourceUrl;
  settingsIconUrl: SafeResourceUrl;
  helpIconUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.dashboardIconUrl = this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/dashboard-icon.svg');
    this.contactIconUrl = this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/contact-icon.svg');
    this.teamIconUrl = this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/team-icon.svg');
    this.queueIconUrl = this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/queue-icon.svg');
    this.interactionIconUrl = this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/interaction-icon.svg');
    this.settingsIconUrl = this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/settings-icon.svg');
    this.helpIconUrl = this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/help-icon.svg');
  }
}
