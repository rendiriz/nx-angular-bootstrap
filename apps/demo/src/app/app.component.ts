import { Component } from '@angular/core';

declare const VERSION: string;
import map from 'lodash/map';
import moment from 'moment';

@Component({
  selector: 'nx-angular-bootstrap-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'demo';
  version = 'Version: ' + VERSION;

  constructor() {
    console.log(this.version);
    console.log(map([{ id: 'foo' }, { id: 'bar' }], (obj) => obj.id));
    console.log(moment().format('YYYY-MM-DD'));
  }
}
