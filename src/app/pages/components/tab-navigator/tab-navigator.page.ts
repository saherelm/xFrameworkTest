import { Component } from '@angular/core';
import { Pages } from 'src/app/config/page.config';
import { XIconNames } from 'x-framework-components';
import { VPageComponent } from '../../../views/v-page/v-page.component';
import { AppResourceIDs } from 'src/app/config/app.localization.config';
import { XColor, XResourceIDs, isNullOrEmptyString } from 'x-framework-core';

@Component({
  selector: 'app-tab-navigator',
  templateUrl: './tab-navigator.page.html',
  styleUrls: ['./tab-navigator.page.scss'],
})
// tslint:disable-next-line:component-class-suffix
export class TabNavigatorPage extends VPageComponent {
  //
  //#region Props ...
  //
  //#region Page Props ...
  titleRes = AppResourceIDs.tab_navigator;
  toolbarTitle = this.resourceProvider(this.titleRes);
  toolbarSubTitle = this.resourceProvider(
    AppResourceIDs.tab_navigator_description
  );
  toolbarShowSubTitle = true;
  //#endregion

  //
  // Prepare All Resource IDs ...
  readonly ResourceIDs = Object.assign(
    Object.assign({}, XResourceIDs),
    AppResourceIDs
  ) as any;

  //
  readonly ColorNames = Object.assign({}, XColor);
  readonly IconNames = Object.assign({}, XIconNames);
  //#endregion

  //
  // Content ...
  readonly contentFa = `
  # ${this.toolbarTitle}
  این مولفه زمانی کاربرد دارد که قصد داریم صفحاتی را در غالب نمایه ای مبتنی بر برگه ها دسته بندی کرده و نمایش دهیم.
  `;

  readonly contentEn = `
  # ${this.toolbarTitle}
  this component used to group Pages in a Tabbed template and show them.
  `;

  //
  readonly sample1 = '```' + '```';

  //
  tabsHref = Pages.TabsNav.baseRoute;

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
