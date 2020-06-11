import { NgModule } from '@angular/core';
import { IconPage } from './icon/icon.page';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ButtonPage } from './button/button.page';
import { ViewsModule } from '../../views/views.module';
import { BaseRoutes, ComponentsRoutes } from 'src/app/config/page.config';

@NgModule({
  imports: [
    ViewsModule,
    IonicModule,
    CommonModule,
    RouterModule.forChild([
      {
        path: BaseRoutes.Default,
        redirectTo: ComponentsRoutes.Button,
        pathMatch: 'full',
      },
      {
        path: ComponentsRoutes.Button,
        component: ButtonPage,
      },
      {
        path: ComponentsRoutes.Icon,
        component: IconPage,
      },
    ]),
  ],
  declarations: [ButtonPage, IconPage],
})
export class ComponentsPageModule {}
