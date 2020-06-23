import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ChildPage } from './child/child.page';
import { ToolsPage } from './tools/tools.page';
import { ViewsModule } from '../../views/views.module';
import { BaseRoutes, HomeRoutes } from 'src/app/config/page.config';

@NgModule({
  imports: [
    ViewsModule,
    CommonModule,
    RouterModule.forChild([
      {
        path: BaseRoutes.Default,
        redirectTo: HomeRoutes.Tools,
        pathMatch: 'full',
      },
      {
        path: HomeRoutes.Tools,
        component: ToolsPage,
      },
    ]),
  ],
  declarations: [ChildPage, ToolsPage],
})
export class HomePageModule {}
