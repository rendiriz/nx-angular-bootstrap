import { Injectable } from '@angular/core';
import { Icon } from './icon';

@Injectable({
  providedIn: 'root',
})
export class IconService {
  private registry = new Map<string, string>();

  public registerIcons(icons: Icon[]): void {
    icons.forEach((icon: Icon) => this.registry.set(icon.name, icon.data));
  }

  public getIcon(iconName: string): string | undefined {
    if (!this.registry.has(iconName)) {
      console.warn(
        `We could not find the JDS Icon with the name ${iconName}, did you add it to the Icon registry?`
      );
    }
    return this.registry.get(iconName);
  }
}
