import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jds-admin-dashboard-page',
  templateUrl: './dashboard-page.component.html',
})
export class DashboardPageComponent implements OnInit {
  constructor() {
    console.warn('DashboardPageComponent');
  }

  ngOnInit(): void {
    console.warn('DashboardPageComponent Init');
  }
}
