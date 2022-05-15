import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import {
  IconModule,
  IconService,
} from '@nx-angular-bootstrap/shared/components';
import { iconHome } from '@nx-angular-bootstrap/shared/components';

import { DashboardPageComponent } from './dashboard-page.component';

export const routes: Routes = [
  {
    path: '',
    component: DashboardPageComponent,
  },
];

@NgModule({
  declarations: [DashboardPageComponent],
  imports: [CommonModule, RouterModule.forChild(routes), IconModule],
})
export class DashboardPageModule {
  constructor(private iconService: IconService) {
    this.iconService.registerIcons([iconHome]);
  }
}
