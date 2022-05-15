import { Routes } from '@angular/router';

import { ContainerComponent as TemplateAdmin } from '@nx-angular-bootstrap/shared/templates';

export const AppRoutingModule: Routes = [
  {
    path: '',
    component: TemplateAdmin,
    // canActivate: [AuthenticationGuard],
    data: {
      discriminantPathKey: 'ADMINPATH',
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./views/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },
    ],
  },
];
