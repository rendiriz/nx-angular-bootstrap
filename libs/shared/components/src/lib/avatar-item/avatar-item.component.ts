import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';

// COMPONENT
import { AvatarComponent } from '../avatar/avatar.component';

@Component({
  selector: 'jds-avatar-item',
  templateUrl: './avatar-item.component.html',
  styleUrls: ['./avatar-item.component.scss'],
})
export class AvatarItemComponent implements OnInit {
  @ViewChild('avatar', { static: true, read: ViewContainerRef })
  avatarRef!: ViewContainerRef;

  @Input()
  get avatar(): any | null {
    return this._avatar;
  }
  set avatar(avatar: any | null) {
    this._avatar = avatar;
  }

  @Input()
  get primaryText(): string {
    return this._primaryText;
  }
  set primaryText(primaryText: string) {
    this._primaryText = primaryText;
  }

  @Input()
  get secondaryText(): string {
    return this._secondaryText;
  }
  set secondaryText(secondaryText: string) {
    this._secondaryText = secondaryText;
  }

  @Input()
  get isTruncation(): boolean {
    return this._isTruncation;
  }
  set isTruncation(isTruncation: boolean) {
    this._isTruncation = isTruncation;
  }

  private _avatar: string | null = null;
  private _primaryText = '';
  private _secondaryText = '';
  private _isTruncation = false;

  ngOnInit(): void {
    this.loadComponent();
  }

  loadComponent(): void {
    const componentRef = this.avatarRef.createComponent(AvatarComponent);

    if (this.avatar.appearance) {
      componentRef.instance.appearance = this.avatar.appearance;
    }

    if (this.avatar.size) {
      componentRef.instance.size = this.avatar.size;
    }

    if (this.avatar.src) {
      componentRef.instance.src = this.avatar.src;
    }

    componentRef.changeDetectorRef.detectChanges();
  }

  getIsTruncation(): string {
    return this.isTruncation
      ? 'avatar-item-truncation'
      : 'avatar-item-no-truncate';
  }
}
