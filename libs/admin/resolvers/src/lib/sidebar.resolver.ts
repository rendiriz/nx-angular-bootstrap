import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

// SERVICE
import { SidebarService as SharedSidebarService } from '@nx-angular-bootstrap/shared/templates';
import { SidebarService } from '@nx-angular-bootstrap/admin/services';

@Injectable({ providedIn: 'root' })
export class SidebarResolver implements Resolve<any> {
  constructor(
    private sharedSidebarService: SharedSidebarService,
    private sidebarService: SidebarService
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> | Promise<any> | any {
    const { sidebarCode } = route.data;

    const menu = this.sidebarService.getSidebars(sidebarCode);
    this.sharedSidebarService.changeSidebar(menu);
  }
}
