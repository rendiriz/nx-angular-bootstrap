import { Component, Input } from '@angular/core';

@Component({
  selector: 'jds-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent {
  @Input()
  get appearance(): string {
    return this._appearance;
  }
  set appearance(appearance: string) {
    this._appearance = appearance;
  }

  @Input()
  get size(): number {
    return this._size;
  }
  set size(size: number) {
    this._size = size;
  }

  @Input()
  get src(): string {
    return this._src;
  }
  set src(src: string) {
    this._src = src;
  }

  private _appearance = 'circle';
  private _size = 32;
  private _src = '';

  getAppearance(): string {
    return `avatar-${this.appearance}`;
  }
}
