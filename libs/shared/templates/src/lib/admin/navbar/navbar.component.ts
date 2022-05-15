import { Component } from '@angular/core';
import { Router } from '@angular/router';

// SERVICE
import { NavbarService } from './navbar.service';
import { SidebarService } from '../sidebar/sidebar.service';

@Component({
  selector: 'jds-admin-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  user: any;

  public isMenuCollapsed = true;
  isMobileExpanded!: boolean;

  constructor(
    private router: Router,
    private navbarService: NavbarService,
    private sidebarService: SidebarService
  ) {
    this.navbarService.currentUser.subscribe((current) => {
      this.user = current;
    });

    this.sidebarService.currentToggleMobileExpanded.subscribe((current) => {
      this.isMobileExpanded = current;
    });
  }

  toggleMobileExpanded(): void {
    this.isMobileExpanded = !this.isMobileExpanded;
    this.sidebarService.changeToggleMobileExpanded(this.isMobileExpanded);
  }

  doLogout(): void {
    // this.authenticationService.logout();
    this.router.navigate(['/auth/login']);
  }
}
