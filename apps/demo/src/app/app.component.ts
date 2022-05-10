import { Component } from '@angular/core';

declare const VERSION: string;
import map from 'lodash/map';
import moment from 'moment';

@Component({
  selector: 'jds-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'demo';
  version = 'Version: ' + VERSION;

  constructor() {
    console.error(this.version);
    console.error(map([{ id: 'foo' }, { id: 'bar' }], (obj) => obj.id));
    console.error(moment().format('YYYY-MM-DD'));
  }
}
