import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ViewsModule } from '../../views/views.module';
import { IntroductionPage } from './introduction/introduction.page';
import { BaseRoutes, ServicesRoutes } from 'src/app/config/page.config';
import { UserDevicePage } from './user-device/user-device.page';

@NgModule({
  imports: [
    ViewsModule,
    CommonModule,
    RouterModule.forChild([
      {
        path: BaseRoutes.Default,
        redirectTo: ServicesRoutes.Introduction,
        pathMatch: 'full',
      },
      {
        path: ServicesRoutes.Introduction,
        component: IntroductionPage,
      },
      {
        path: ServicesRoutes.UserDevice,
        component: UserDevicePage,
      },
    ]),
  ],
  declarations: [UserDevicePage, IntroductionPage],
})
export class ServicesPageModule {}
