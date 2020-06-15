import { Component } from '@angular/core';
import { XResourceIDs, XColor, isNullOrEmptyString } from 'x-framework-core';
import { VPageComponent } from '../../../views/v-page/v-page.component';
import { AppResourceIDs } from 'src/app/config/app.localization.config';
import {
  XFabItem,
  XIconNames,
  XFabVerticalSlot,
  XFabHorizontalSlot,
  XButtonType,
} from 'x-framework-components';

@Component({
  selector: 'app-fab',
  templateUrl: './fab.page.html',
  styleUrls: ['./fab.page.scss'],
})
// tslint:disable-next-line:component-class-suffix
export class FabPage extends VPageComponent {
  //
  //#region Props ...
  //
  //#region Page Props ...
  titleRes = AppResourceIDs.fab;
  toolbarTitle = this.resourceProvider(this.titleRes);
  toolbarSubTitle = this.resourceProvider(AppResourceIDs.fab_description);
  toolbarShowSubTitle = true;

  //
  ids = Array.from(Array(50).keys());
  //#endregion

  //
  // Prepare All Resource IDs ...
  readonly ResourceIDs = Object.assign(
    Object.assign({}, XResourceIDs),
    AppResourceIDs
  );

  //
  // Color Names ...
  readonly ColorNames = Object.assign({}, XColor);
  readonly IconNames = Object.assign({}, XIconNames);
  readonly ButtonTypes = Object.assign({}, XButtonType);
  //#endregion

  //
  // Content ...
  readonly contentFa = `
  # ${this.toolbarTitle}
  `;
  readonly contentEn = `
  # ${this.toolbarTitle}
  `;

  //
  readonly sample1 =
    '```' +
    '<x-counter ' +
    '  #counter ' +
    '  [stopValue]="0" ' +
    '  [startValue]="180" ' +
    '  [currentValue]="150" ' +
    '  [type]="CounterTypes.CountDown" ' +
    '  [displayPattern]="getCounterMessage" ' +
    '  (counterStop)="handleCounterStop($event)" ' +
    '  (counterTtick)="handleCounterTick($event)" ' +
    '  (counterStart)="handleCounterStart($event)" ' +
    '></x-counter> ' +
    '```';

  //
  actions: XFabItem = {
    //
    id: 'edit_profile',

    //
    fixed: true,

    //
    color: XColor.Warning,

    //
    icon: XIconNames.edit,

    //
    tooltip: AppResourceIDs.temp_label,

    //
    vertical: XFabVerticalSlot.BOTTOM,
    horizontal: XFabHorizontalSlot.END,

    //
    disabled: this.uiDisabled,

    //
    handler: async (id?: string) => {
      await this.managerService.notificationService.presentInfoNotification({
        message: `Clicked Fab Id: ${id}`,
        dissmissable: true,
      });
    },
  };

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

  handleScrolledEvent(event: any) {
    console.log('Scroll Event: ', event);
  }
  //#endregion
}
