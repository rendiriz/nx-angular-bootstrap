import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContainerComponent } from './admin/container/container.component';
import { SidebarComponent } from './admin/sidebar/sidebar.component';
import { NavbarComponent } from './admin/navbar/navbar.component';

import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import {
  AvatarModule,
  AvatarItemModule,
  IconModule,
  IconService,
  iconHome,
} from '@nx-angular-bootstrap/shared/components';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbDropdownModule,
    AvatarModule,
    AvatarItemModule,
    IconModule,
  ],
  declarations: [ContainerComponent, SidebarComponent, NavbarComponent],
  exports: [ContainerComponent, SidebarComponent, NavbarComponent],
})
export class SharedTemplatesModule {
  constructor(private iconService: IconService) {
    this.iconService.registerIcons([iconHome]);
  }
}
