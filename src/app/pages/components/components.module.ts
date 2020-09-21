import { NgModule } from '@angular/core';
import { FabPage } from './fab/fab.page';
import { MapPage } from './map/map.page';
import { FormPage } from './form/form.page';
import { GridPage } from './grid/grid.page';
import { ListPage } from './list/list.page';
import { IconPage } from './icon/icon.page';
import { CardPage } from './card/card.page';
import { PagePage } from './page/page.page';
import { TabsPage } from './tabs/tabs.page';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TablePage } from './table/table.page';
import { SliderPage } from './slider/slider.page';
import { CounterPage } from './counter/counter.page';
import { StepperPage } from './stepper/stepper.page';
import { MarkdownPage } from './markdown/markdown.page';
import { ViewsModule } from 'src/app/views/views.module';
import { ColorPickerPage } from './color-picker/color-picker.page';
import { IntroductionPage } from './introduction/introduction.page';
import { TabNavigatorPage } from './tab-navigator/tab-navigator.page';
import { BaseRoutes, ComponentsRoutes } from 'src/app/config/page.config';
import { FileComponentsPage } from './file-components/file-components.page';
import { ExpandableListPage } from './expandable-list/expandable-list.page';
import { DescriptionListPage } from './description-list/description-list.page';
import { SmallComponentsPage } from './small-components/small-components.page';
import { ExpandablePanelPage } from './expandable-panel/expandable-panel.page';
import { SampleModalComponent } from './small-components/sample-modal/sample-modal.component';

@NgModule({
  imports: [
    ViewsModule,
    CommonModule,
    RouterModule.forChild([
      {
        path: BaseRoutes.Default,
        redirectTo: ComponentsRoutes.Introduction,
        pathMatch: 'full',
      },
      {
        path: ComponentsRoutes.Introduction,
        component: IntroductionPage,
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
        path: ComponentsRoutes.ColorPicker,
        component: ColorPickerPage,
      },
      {
        path: ComponentsRoutes.Fab,
        component: FabPage,
      },
      {
        path: ComponentsRoutes.FileComponents,
        component: FileComponentsPage,
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
      {
        path: ComponentsRoutes.MarkDown,
        component: MarkdownPage,
      },
      {
        path: ComponentsRoutes.DescriptionList,
        component: DescriptionListPage,
      },
      {
        path: ComponentsRoutes.ExpandableList,
        component: ExpandableListPage,
      },
      {
        path: ComponentsRoutes.ExpandablePanel,
        component: ExpandablePanelPage,
      },
      {
        path: ComponentsRoutes.Slider,
        component: SliderPage,
      },
      {
        path: ComponentsRoutes.Stepper,
        component: StepperPage,
      },
      {
        path: ComponentsRoutes.Tabs,
        component: TabsPage,
      },
      {
        path: ComponentsRoutes.Table,
        component: TablePage,
      },
      {
        path: ComponentsRoutes.Page,
        component: PagePage,
      },
      {
        path: ComponentsRoutes.TabNavigator,
        component: TabNavigatorPage,
      },
    ]),
  ],
  declarations: [
    FabPage,
    MapPage,
    CardPage,
    IconPage,
    FormPage,
    GridPage,
    PagePage,
    ListPage,
    TabsPage,
    TablePage,
    SliderPage,
    StepperPage,
    CounterPage,
    MarkdownPage,
    ColorPickerPage,
    IntroductionPage,
    TabNavigatorPage,
    ExpandableListPage,
    FileComponentsPage,
    SmallComponentsPage,
    ExpandablePanelPage,
    DescriptionListPage,

    //
    SampleModalComponent,
  ],
  entryComponents: [SampleModalComponent],
})
export class ComponentsPageModule {}
