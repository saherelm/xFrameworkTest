import { Component } from '@angular/core';
import { XColorWithBrightness } from 'x-framework-core';
import { TabNavsItems } from 'src/app/config/page.config';
import { VPageComponent } from 'src/app/views/v-page/v-page.component';

@Component({
  selector: 'app-components-tabs',
  template: `
    <x-tab-navigator
      [items]="tabItems"
      [color]="ColorNames.Dark"
      [iconColor]="ColorNames.Danger"
      [highlightColor]="ColorNames.Light"
      [selectedColor]="ColorNames.SecondaryShade"
    ></x-tab-navigator>
  `,
  styles: [``],
})
// tslint:disable-next-line:component-class-suffix
export class TabsPage extends VPageComponent {
  //
  //#region Props ...
  tabItems = TabNavsItems;

  readonly ColorNames = Object.assign({}, XColorWithBrightness);
  //#endregion
}
