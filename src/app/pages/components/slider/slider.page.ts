import { Component } from '@angular/core';
import { XIconNames } from 'x-framework-components';
import { VPageComponent } from '../../../views/v-page/v-page.component';
import { AppResourceIDs } from 'src/app/config/app.localization.config';
import { XResourceIDs, isNullOrEmptyString, XColor } from 'x-framework-core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.page.html',
  styleUrls: ['./slider.page.scss'],
})
// tslint:disable-next-line:component-class-suffix
export class SliderPage extends VPageComponent {
  //
  //#region Props ...
  //
  //#region Page Props ...
  titleRes = AppResourceIDs.slider;
  toolbarTitle = this.resourceProvider(this.titleRes);
  toolbarSubTitle = this.resourceProvider(AppResourceIDs.slider_description);
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
  // Content ...
  readonly contentFa = `
  # ${this.toolbarTitle}
  `;

  readonly contentEn = `
  # ${this.toolbarTitle}
  `;

  //
  readonly sample1 = '```' + '```';

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
