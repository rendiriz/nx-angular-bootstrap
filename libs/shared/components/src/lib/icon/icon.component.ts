import { Component, ElementRef, Input, Inject, Optional } from '@angular/core';
import { DOCUMENT } from '@angular/common';

// SERVICE
import { IconService } from './icon.service';

@Component({
  selector: 'jds-icon',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent {
  @Input()
  set name(iconName: string) {
    if (this.svgIcon) {
      this.element.nativeElement.removeChild(this.svgIcon);
    }
    const svgData = this.iconService.getIcon(iconName);
    this.svgIcon = this.svgElementFromString(svgData || '');
    this.element.nativeElement.appendChild(this.svgIcon);
  }

  private svgIcon!: SVGElement;

  constructor(
    private element: ElementRef,
    private iconService: IconService,
    @Optional() @Inject(DOCUMENT) private document: any
  ) {}

  private svgElementFromString(svgContent: string): SVGElement {
    const div = this.document.createElement('DIV');
    div.innerHTML = svgContent;
    return (
      div.querySelector('svg') ||
      this.document.createElementNS('http://www.w3.org/2000/svg', 'path')
    );
  }
}
