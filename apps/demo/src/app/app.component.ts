import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

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
  isCollapsed = false;
  closeResult = '';
  active = 1;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private modalService: NgbModal
  ) {
    console.error(this.version);
    console.error(map([{ id: 'foo' }, { id: 'bar' }], (obj) => obj.id));
    console.error(moment().format('YYYY-MM-DD'));
    this.loadStyle('green');
  }

  loadStyle(styleName: string) {
    const head = this.document.getElementsByTagName('head')[0];

    const themeLink = this.document.getElementById('theme') as HTMLLinkElement;

    if (themeLink) {
      themeLink.href = `${styleName}.css`;
    } else {
      const style = this.document.createElement('link');
      style.id = 'theme';
      style.rel = 'stylesheet';
      style.href = `${styleName}.css`;

      head.appendChild(style);
    }
  }

  open(content: any) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
