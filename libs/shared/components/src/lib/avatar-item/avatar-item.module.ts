import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarItemComponent } from './avatar-item.component';

@NgModule({
  imports: [CommonModule],
  declarations: [AvatarItemComponent],
  exports: [AvatarItemComponent],
})
export class AvatarItemModule {}
