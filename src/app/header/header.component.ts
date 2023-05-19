import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  imageUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.imageUrl = this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/dummy-logo.png');
  }
}
