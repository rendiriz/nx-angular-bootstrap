import {
  NgModule,
  Inject,
  LOCALE_ID,
  PLATFORM_ID,
  APP_ID,
  CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

// LOCATION
import { registerLocaleData } from '@angular/common';
import localeId from '@angular/common/locales/id';

// SERVICE
import { SidebarService as SharedSidebarService } from '@nx-angular-bootstrap/shared/templates';
import { SidebarService } from '@nx-angular-bootstrap/admin/services';

// MODULE
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

registerLocaleData(localeId);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'admin' }),
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutingModule, {
      scrollPositionRestoration: 'top',
    }),
    HttpClientModule,
    NgbModule,
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'id',
    },
    Title,
    SharedSidebarService,
    SidebarService,
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {
  constructor(
    @Inject(PLATFORM_ID) platformId: object,
    @Inject(APP_ID) appId: string
  ) {
    const platform = isPlatformBrowser(platformId)
      ? 'in the browser'
      : 'on the server';
    console.warn(`Running ${platform} with appId=${appId}`);
  }
}
