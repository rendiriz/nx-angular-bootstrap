import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// RESOLVER
import { SidebarResolver } from '@nx-angular-bootstrap/admin/resolvers';

const routes: Routes = [
  {
    path: '',
    resolve: {
      hero: SidebarResolver,
    },
    data: {
      sidebarCode: 'dashboard',
    },
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./dashboard-page/dashboard-page.module').then(
            (m) => m.DashboardPageModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
