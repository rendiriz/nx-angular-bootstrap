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

  simpleItems: any[] = [];
  selectedSimpleItem = 1;
  dropdownItems: any[] = [];
  selectedDropdownItem = 1;
  longItems: any[] = [];
  selectedLongItem = 1;
  headerItems: any[] = [];
  selectedHeaderItem = 1;
  searchItems: any[] = [];
  selectedSearchItem = 1;
  radioItems: any[] = [];
  selectedRadioItem = 'Indonesia';
  multiItems: any[] = [];
  selectedMultiItem = [1, 2];
  multiMoreItems: any[] = [];
  selectedMultiMoreItem = [1, 2, 3, 4];
  multiGroupItems: any[] = [];
  selectedMultiGroupItem = [1, 2, 3, 4];
  multiCheckboxItems: any[] = [];
  selectedMultiCheckboxItem = [1, 2, 3, 4];

  perPageItems = [
    { value: 10, label: '10' },
    { value: 25, label: '25' },
    { value: 100, label: '100' },
  ];
  selectedPerPageItem = 10;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private modalService: NgbModal
  ) {
    console.error(this.version);
    console.error(map([{ id: 'foo' }, { id: 'bar' }], (obj) => obj.id));
    console.error(moment().format('YYYY-MM-DD'));
    this.loadStyle('green');

    const option = [
      { value: 1, label: 'Indonesia' },
      { value: 2, label: 'Inggris' },
      { value: 3, label: 'Amerika' },
      { value: 4, label: 'Rusia' },
      { value: 5, label: 'Korea Utara' },
      { value: 6, label: 'Korea Selatan' },
      { value: 7, label: 'Malaysia' },
      { value: 8, label: 'Singapura' },
      { value: 9, label: 'Australia' },
      { value: 10, label: 'Gabon' },
      { value: 11, label: 'Jerman' },
      { value: 12, label: 'Portugal' },
      { value: 13, label: 'Rumania' },
      { value: 14, label: 'Selandia Baru' },
      { value: 15, label: 'Myanmar' },
      {
        value: 16,
        label:
          'Synergistically procrastinate distributed infrastructures for mission-critical expertise. Appropriately customize innovative innovation with resource sucking portals. Interactively customize diverse products for strategic applications.',
      },
    ];

    this.simpleItems = option;
    this.dropdownItems = option;
    this.longItems = option;
    this.headerItems = option;
    this.searchItems = option;

    const optionRadio = [
      { value: 'Indonesia', label: 'Indonesia' },
      { value: 'Inggris', label: 'Inggris' },
    ];
    this.radioItems = optionRadio;

    this.multiItems = option;
    this.multiMoreItems = option;
    this.multiGroupItems = option;
    this.multiCheckboxItems = option;
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
