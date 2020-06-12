import { NgModule } from '@angular/core';
import { FabPage } from './fab/fab.page';
import { MapPage } from './map/map.page';
import { FormPage } from './form/form.page';
import { GridPage } from './grid/grid.page';
import { ListPage } from './list/list.page';
import { IconPage } from './icon/icon.page';
import { CardPage } from './card/card.page';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CounterPage } from './counter/counter.page';
import { ViewsModule } from 'src/app/views/views.module';
import { FileUploadPage } from './file-upload/file-upload.page';
import { BaseRoutes, ComponentsRoutes } from 'src/app/config/page.config';
import { SmallComponentsPage } from './small-components/small-components.page';

@NgModule({
  imports: [
    ViewsModule,
    CommonModule,
    RouterModule.forChild([
      {
        path: BaseRoutes.Default,
        redirectTo: ComponentsRoutes.SmallComponents,
        pathMatch: 'full',
      },
      {
        path: ComponentsRoutes.SmallComponents,
        component: SmallComponentsPage,
      },
      {
        path: ComponentsRoutes.Card,
        component: CardPage,
      },
      {
        path: ComponentsRoutes.Icon,
        component: IconPage,
      },
      {
        path: ComponentsRoutes.Counter,
        component: CounterPage,
      },
      {
        path: ComponentsRoutes.Fab,
        component: FabPage,
      },
      {
        path: ComponentsRoutes.FileUpload,
        component: FileUploadPage,
      },
      {
        path: ComponentsRoutes.Form,
        component: FormPage,
      },
      {
        path: ComponentsRoutes.Grid,
        component: GridPage,
      },
      {
        path: ComponentsRoutes.List,
        component: ListPage,
      },
      {
        path: ComponentsRoutes.Map,
        component: MapPage,
      },
    ]),
  ],
  declarations: [
    SmallComponentsPage,
    CardPage,
    IconPage,
    CounterPage,
    FabPage,
    FileUploadPage,
    FormPage,
    GridPage,
    ListPage,
    MapPage,
  ],
})
export class ComponentsPageModule {}
