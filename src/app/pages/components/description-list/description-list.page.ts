import { Component } from '@angular/core';
import { VPageComponent } from '../../../views/v-page/v-page.component';
import { AppResourceIDs } from 'src/app/config/app.localization.config';
import { XResourceIDs, XColor, isNullOrEmptyString } from 'x-framework-core';

@Component({
  selector: 'app-description-list',
  templateUrl: './description-list.page.html',
  styleUrls: ['./description-list.page.scss'],
})
// tslint:disable-next-line:component-class-suffix
export class DescriptionListPage extends VPageComponent {
  //
  //#region Props ...
  //
  //#region Page Props ...
  titleRes = AppResourceIDs.description_list;
  toolbarTitle = this.resourceProvider(this.titleRes);
  toolbarSubTitle = this.resourceProvider(AppResourceIDs.description_list_description);
  toolbarShowSubTitle = true;
  //#endregion

  //
  item = {
    first_name: 'Hadi',
    last_name: 'Khazaee Asl',
    gender: 'male',
    mobile: '09121694056',
    email: 'hadi_khazaee_asl@yahoo.com'
  }

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
}
