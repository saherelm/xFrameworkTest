import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ViewsModule } from '../../views/views.module';
import { BaseRoutes, HomeRoutes } from 'src/app/config/page.config';
import { IntroductionPage } from './introduction/introduction.page';

@NgModule({
  imports: [
    ViewsModule,
    CommonModule,
    RouterModule.forChild([
      {
        path: BaseRoutes.Default,
        redirectTo: HomeRoutes.Introduction,
        pathMatch: 'full',
      },
      {
        path: HomeRoutes.Introduction,
        component: IntroductionPage,
      },
    ]),
  ],
  declarations: [IntroductionPage],
})
export class HomePageModule {}
