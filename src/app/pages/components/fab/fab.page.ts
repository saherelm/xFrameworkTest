import { Component } from '@angular/core';
import { XResourceIDs, XColor, isNullOrEmptyString } from 'x-framework-core';
import { VPageComponent } from '../../../views/v-page/v-page.component';
import { AppResourceIDs } from 'src/app/config/app.localization.config';

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
