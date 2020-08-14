import { TabsPage } from './tabs.page';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ViewsModule } from '../../views/views.module';
import { TabPage1Page } from './tab-page-1/tab-page-1.page';
import { TabPage2Page } from './tab-page-2/tab-page-2.page';
import { TabPage3Page } from './tab-page-3/tab-page-3.page';
import { Pages, BaseRoutes, TabsRoutes } from 'src/app/config/page.config';

@NgModule({
  imports: [
    ViewsModule,
    CommonModule,
    RouterModule.forChild([
      {
        path: BaseRoutes.Default,
        component: TabsPage,
      },
      {
        path: `${TabsRoutes.Tabs}/${Pages.TabPage1.baseRoute}`,
        component: TabPage1Page,
      },
      {
        path: `${TabsRoutes.Tabs}/${Pages.TabPage2.baseRoute}`,
        component: TabPage2Page,
      },
      {
        path: `${TabsRoutes.Tabs}/${Pages.TabPage3.baseRoute}`,
        component: TabPage3Page,
      },
    ]),
  ],
  declarations: [TabsPage, TabPage1Page, TabPage2Page, TabPage3Page],
})
export class TabsPageModule {}
