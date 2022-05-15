import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class SidebarService {
  private sidebarSource = new BehaviorSubject([]);
  currentSidebar = this.sidebarSource.asObservable();

  private toggleSidebarSource = new BehaviorSubject(false);
  currentToggleSidebar = this.toggleSidebarSource.asObservable();

  private toggleExpandedSource = new BehaviorSubject(false);
  currentToggleExpanded = this.toggleExpandedSource.asObservable();

  private toggleMobileExpandedSource = new BehaviorSubject(false);
  currentToggleMobileExpanded = this.toggleMobileExpandedSource.asObservable();

  changeSidebar(sidebar: any): void {
    this.sidebarSource.next(sidebar);
  }

  changeToggleSidebar(toggleSidebar: boolean): void {
    this.toggleSidebarSource.next(toggleSidebar);
  }

  changeToggleExpanded(toggleExpanded: boolean): void {
    this.toggleExpandedSource.next(toggleExpanded);
  }

  changeToggleMobileExpanded(toggleMobileExpanded: boolean): void {
    this.toggleMobileExpandedSource.next(toggleMobileExpanded);
  }
}
