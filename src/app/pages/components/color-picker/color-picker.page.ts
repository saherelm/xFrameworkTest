import { XColor, XResourceIDs, isNullOrEmptyString } from 'x-framework-core';
import { Component } from '@angular/core';
import { VPageComponent } from '../../../views/v-page/v-page.component';
import { AppResourceIDs } from 'src/app/config/app.localization.config';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.page.html',
  styleUrls: ['./color-picker.page.scss'],
})
// tslint:disable-next-line:component-class-suffix
export class ColorPickerPage extends VPageComponent {
  //
  //#region Props ...
  //
  //#region Page Props ...
  titleRes = AppResourceIDs.color_picker;
  toolbarTitle = this.resourceProvider(this.titleRes);
  toolbarSubTitle = this.resourceProvider(AppResourceIDs.color_picker_description);
  toolbarShowSubTitle = true;
  //#endregion

  //
  // Prepare All Resource IDs ...
  readonly ResourceIDs = Object.assign(
    Object.assign({}, XResourceIDs),
    AppResourceIDs
  ) as any;

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
    '```html' +
    `
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
