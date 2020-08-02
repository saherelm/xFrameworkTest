import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ViewsModule } from '../../views/views.module';
import { IntroductionPage } from './introduction/introduction.page';
import { BaseRoutes, ServicesRoutes } from 'src/app/config/page.config';

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
    ]),
  ],
  declarations: [IntroductionPage],
})
export class CorePageModule {}
