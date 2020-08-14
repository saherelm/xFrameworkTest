import { Component } from '@angular/core';
import { VPageComponent } from 'src/app/views/v-page/v-page.component';
import { XTabNavigatorItem } from 'x-framework-components';
import { TabNavsItems } from 'src/app/config/page.config';

@Component({
  selector: 'app-components-tabs',
  template: `<x-tab-navigator [items]="tabItems"></x-tab-navigator>`,
  styles: [``],
})
// tslint:disable-next-line:component-class-suffix
export class TabsPage extends VPageComponent {
  //
  //#region Props ...
  tabItems = TabNavsItems;
  //#endregion
}
