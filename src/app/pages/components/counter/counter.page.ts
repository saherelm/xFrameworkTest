import {
  XColor,
  toTimeFormat,
  XResourceIDs,
  toPersianNumbers,
  isNullOrEmptyString,
} from 'x-framework-core';
import {
  XSlotName,
  XSlotLayout,
  XCounterType,
  XCounterTick,
} from 'x-framework-components';
import { Component } from '@angular/core';
import { VPageComponent } from '../../../views/v-page/v-page.component';
import { AppResourceIDs } from 'src/app/config/app.localization.config';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.page.html',
  styleUrls: ['./counter.page.scss'],
})
// tslint:disable-next-line:component-class-suffix
export class CounterPage extends VPageComponent {
  //
  //#region Props ...
  //
  //#region Page Props ...
  titleRes = AppResourceIDs.counter;
  toolbarTitle = this.resourceProvider(this.titleRes);
  toolbarSubTitle = this.resourceProvider(AppResourceIDs.counter_description);
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

  //
  // Counter Types ...
  readonly CounterTypes = Object.assign({}, XCounterType);

  //
  // Slotter ...
  readonly SlotNames = Object.assign({}, XSlotName);
  readonly SlotLayout = Object.assign({}, XSlotLayout);
  //#endregion

  //
  // Content ...
  readonly contentFa = `
  # ${this.toolbarTitle}

  این مولفه در مواردی که قصد داریم مدت زمان معینی را برای ادامه یا انجام کاری در نظر بگیریم مورد استفاده قرار می گیرد.
  `;
  readonly contentEn = `
  # ${this.toolbarTitle}
  this component used when we need to wait specific time for continue or doing an action.
  `;

  //
  readonly sample1 =
    '```html' +
    `
<x-counter
  #counter
  [stopValue]="0"
  [startValue]="180"
  [currentValue]="150"
  [type]="CounterTypes
    .CountDown"
  [displayPattern]="
    getCounterMessage"
  (counterStop)="
    handleCounterStop($event)"
  (counterTtick)="
    handleCounterTick($event)"
  (counterStart)="
    handleCounterStart($event)"
></x-counter>
` +
    '```';

  //
  readonly sample2 =
    '```html' +
    `
<x-button
  (click)="counter.start()"
  [title]="ResourceIDs.start"
  [color]="ColorNames.Tertiary"
></x-button>
` +
    '```';

  //
  readonly sample3 =
    '```html' +
    `
<x-button
  (click)="counter.pause()"
  [title]="ResourceIDs.pause"
  [color]="ColorNames.Warning"
></x-button>
` +
    '```';

  //
  readonly sample4 =
    '```html' +
    `
<x-button
  [title]="ResourceIDs.reset"
  [color]="ColorNames.Danger"
  (click)="
    counter.startValue = 180;
    counter.stopValue= 0;
    counter.currentValue = 0;
    counter.start()"
></x-button>
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

  getCounterMessage(start: number, stop: number, current: number): string {
    //
    let steps = stop - start;
    if (steps < 0) {
      steps *= -1;
    }

    //
    const ellapsed = steps - current;
    const remained = steps - ellapsed;

    //
    const minutes = Math.trunc(remained / 60);
    const seconds = remained - minutes * 60;

    //
    const message = `${toTimeFormat(minutes)}:${toTimeFormat(seconds)}`;

    //
    const locale = this.managerService.currentLocale;

    //
    if (locale === 'fa-IR') {
      return toPersianNumbers(message);
    } else {
      return message;
    }
  }
  //#endregion

  //
  //#region UI Handlers ...
  handleCounterStop(event: XCounterTick) {}

  handleCounterStart(event: XCounterTick) {}

  handleCounterTick(event: XCounterTick) {}
  //#endregion
}
