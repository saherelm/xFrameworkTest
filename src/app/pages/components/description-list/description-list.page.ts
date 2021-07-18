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
  toolbarSubTitle = this.resourceProvider(
    AppResourceIDs.description_list_description
  );
  toolbarShowSubTitle = true;
  //#endregion

  //
  item = {
    first_name: 'Hadi',
    last_name: 'Khazaee Asl',
    gender: 'male',
    mobile: '09121694056',
    email: 'hadi_khazaee_asl@yahoo.com',
  };

  //
  // Prepare All Resource IDs ...
  readonly ResourceIDs = Object.assign(
    Object.assign({}, XResourceIDs),
    AppResourceIDs
  ) as any;
  //#endregion

  //
  // Content ...
  readonly contentFa = `
  # ${this.toolbarTitle}
این مولفه جهت نمایش یک مدل داده ای در غالبی ساختار یافته بکار میرود
  `;
  readonly contentEn = `
  # ${this.toolbarTitle}
this component used to show a data model in an structural template
  `;

  //
  readonly sample1 =
    '```html' +
    `
<x-description-list
  [model]="item"
  [isInPage]="true"
  [wrapWithCard]="true"
  [hiddenModelKeys]="['gender', 'mobile']"
>
</x-description-list>
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
