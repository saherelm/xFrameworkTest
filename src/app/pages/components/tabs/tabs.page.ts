import {
  XIconNames,
  XTabAlign,
  XTabsHeaderPosition,
} from 'x-framework-components';
import { Component } from '@angular/core';
import { VPageComponent } from '../../../views/v-page/v-page.component';
import { AppResourceIDs } from 'src/app/config/app.localization.config';
import { XResourceIDs, isNullOrEmptyString, XColor } from 'x-framework-core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
// tslint:disable-next-line:component-class-suffix
export class TabsPage extends VPageComponent {
  //
  //#region Props ...
  //
  //#region Page Props ...
  titleRes = AppResourceIDs.tabs;
  toolbarTitle = this.resourceProvider(this.titleRes);
  toolbarSubTitle = this.resourceProvider(AppResourceIDs.tabs_description);
  toolbarShowSubTitle = true;
  //#endregion

  //
  // Prepare All Resource IDs ...
  readonly ResourceIDs = Object.assign(
    Object.assign({}, XResourceIDs),
    AppResourceIDs
  );

  //
  readonly ColorNames = Object.assign({}, XColor);
  readonly IconNames = Object.assign({}, XIconNames);
  //#endregion

  //
  readonly TabAligns = Object.assign({}, XTabAlign);
  readonly TabsHeaderPositions = Object.assign({}, XTabsHeaderPosition);

  //
  // Content ...
  readonly contentFa = `
  # ${this.toolbarTitle}
  این مولفه جهت نمایش محتواهای مختلف در غالب برگه ها و دسته بندی آن ها بکار می رود
  `;

  readonly contentEn = `
  # ${this.toolbarTitle}
  this component used to group several contents and show them in tabs area.
  `;

  //
  readonly sample1 =
    '```html' +
    `
<x-tabs
  #xTabs
  [startIndex]="1"
  [swipable]="true"
  [loopTabs]="false"
  [dynamicHeight]="false"
  [color]="ColorNames.Dark"
  [alignTabs]="TabAligns.START"
  [headerPosition]="
    TabsHeaderPositions.BELOW"
>
  <x-tab>
    <div x-tab-label>
      Tab 1
    </div>
    <div
      class="tab-wrapper"
      [xColor]="ColorNames.Danger"
    >
      Lorem ipsum dolor sit amet
      consectetur adipisicing elit.
      Omnis similique reiciendis vero
      vel. Et, in nemo. Sapiente
      doloremque provident ex dolore,
      expedita totam ipsam architecto
      vero mollitia magni. Corporis, dolore.
    </div>
  </x-tab>

  <x-tab>
    <div x-tab-label>
      Tab 2
    </div>

    <div
      class="tab-wrapper"
      [xColor]="ColorNames.Secondary"
    >
      Lorem ipsum dolor sit amet
      consectetur adipisicing elit.
      Omnis similique reiciendis vero
      vel. Et, in nemo. Sapiente
      doloremque provident ex dolore,
      expedita totam ipsam architecto
      vero mollitia magni. Corporis, dolore.
    </div>
  </x-tab>

  <x-tab>
    <div x-tab-label>
      Tab 3
    </div>

    <div
      class="tab-wrapper"
      [xColor]="ColorNames.Warning"
    >
      Lorem ipsum dolor sit amet
      consectetur adipisicing elit.
      Omnis similique reiciendis vero
      vel. Et, in nemo. Sapiente
      doloremque provident ex dolore,
      expedita totam ipsam architecto
      vero mollitia magni. Corporis, dolore.
    </div>
  </x-tab>

  <x-tab>
    <div x-tab-label>
      Tab 4
    </div>

    <div
      class="tab-wrapper"
      [xColor]="color"
    >
      Lorem ipsum dolor sit amet
      consectetur adipisicing elit.
      Omnis similique reiciendis vero
      vel. Et, in nemo. Sapiente
      doloremque provident ex dolore,
      expedita totam ipsam architecto
      vero mollitia magni. Corporis, dolore.
    </div>
  </x-tab>
</x-tabs>
` +
    '```';

  //
  //#region UI Providers ...
  //
  // Provide content based on current locale ...
  getContent(title: string) {
    //
    if (isNullOrEmptyString(title)) {
      return '';
    }

    //
    const currentLocale = this.managerService.currentLocale;

    //
    const varName =
      title +
      (currentLocale === 'en-US'
        ? 'En'
        : currentLocale === 'fa-IR'
        ? 'Fa'
        : '');

    const result = this[`${varName}`];

    //
    return result || '';
  }
  //#endregion
}
