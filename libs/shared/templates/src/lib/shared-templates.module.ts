import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContainerComponent } from './admin/container/container.component';
import { SidebarComponent } from './admin/sidebar/sidebar.component';

import {
  IconModule,
  IconService,
} from '@nx-angular-bootstrap/shared/components';
import { iconHome } from '@nx-angular-bootstrap/shared/components';

@NgModule({
  imports: [CommonModule, RouterModule, IconModule],
  declarations: [ContainerComponent, SidebarComponent],
  exports: [ContainerComponent, SidebarComponent],
})
export class SharedTemplatesModule {
  constructor(private iconService: IconService) {
    this.iconService.registerIcons([iconHome]);
  }
}
