import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  logoImageUrl: SafeResourceUrl;
  avatarImageUrl: SafeResourceUrl;


  constructor(private sanitizer: DomSanitizer) {
    this.logoImageUrl = this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/dummy-logo.png');
    this.avatarImageUrl = this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/user-avatar.png');

  }
}
