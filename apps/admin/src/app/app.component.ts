import { Component } from '@angular/core';

@Component({
  selector: 'jds-root',
  template: `
    <ngx-loading-bar [includeSpinner]="false" color="#09B8F1"></ngx-loading-bar>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  title = 'admin';
}
