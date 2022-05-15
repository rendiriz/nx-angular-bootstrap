import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContainerComponent } from './admin/container/container.component';
import { SidebarComponent } from './admin/sidebar/sidebar.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [ContainerComponent, SidebarComponent],
  exports: [ContainerComponent, SidebarComponent],
})
export class SharedTemplatesModule {}
