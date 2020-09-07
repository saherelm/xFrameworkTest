import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ViewsModule } from '../../views/views.module';
import { BaseRoutes, ThemesRoutes } from 'src/app/config/page.config';
import { ThemeManagerPage } from './theme-manager/theme-manager.page';

@NgModule({
  imports: [
    ViewsModule,
    CommonModule,
    RouterModule.forChild([
      {
        path: BaseRoutes.Default,
        redirectTo: ThemesRoutes.ThemeManager,
        pathMatch: 'full',
      },
      {
        path: ThemesRoutes.ThemeManager,
        component: ThemeManagerPage,
      },
    ]),
  ],
  declarations: [ThemeManagerPage],
})
export class ThemesPageModule {}
