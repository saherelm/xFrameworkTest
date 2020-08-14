import { Component } from '@angular/core';
import { XIconNames } from 'x-framework-components';
import { VPageComponent } from '../../../views/v-page/v-page.component';
import { AppResourceIDs } from 'src/app/config/app.localization.config';
import { XResourceIDs, isNullOrEmptyString, XColor } from 'x-framework-core';

@Component({
  selector: 'app-page',
  templateUrl: './page.page.html',
  styleUrls: ['./page.page.scss'],
})
// tslint:disable-next-line:component-class-suffix
export class PagePage extends VPageComponent {
  //
  //#region Props ...
  //
  //#region Page Props ...
  titleRes = AppResourceIDs.page;
  toolbarTitle = this.resourceProvider(this.titleRes);
  toolbarSubTitle = this.resourceProvider(AppResourceIDs.page_description);
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
  این مولفه یکی از پرکاربرد ترین مولفه های ارائه شده توسط این چارچوب است و برای ارائه یک صفحه مجزا در یک برنامه کاربردی کاربرد دارد.

  یک صفحه از ترکیب چهار مولفه مجزا تشکیل میگردد، که عبارتند از:

  - **XToolbarComponent**:
این مولفه میتواند در ناحیه فوقانی یک صفحه قرار بگیرد و امکانات مختلفی را فراهم کند.

  - **XFooterComponent**:
این مولفه میتواند در ناحیه تحتانی یک صفحه قرار بگیرد.

  - **XNavigatorComponent**:
این مولفه می تواند در ناحیه کناری صفحه قرار گرفته و گزینه های مختلفی را بعنوان نوار پیمایش در صفحات مختلف را ارئه کند.

  - **XPageComponent**:
این مولفه از هر سه مولفه فوق استفاده می کند و امکانات لازم جهت چینش اجزاء مختلف در صفحه و مدیریت نحوه نمایش آن را فراهم می کند.

صفحه حاضر و تمام صفحاتی که در این مستند مرور کرده اید با بهره گیری از این مولفه ایجاد شده اند.
  `;

  readonly contentEn = `
  # ${this.toolbarTitle}
this is a most common component's of this Framework and used to provide an stand alone Page in an Application.

a page presented by combining 4 unique components, which are:

  - **XToolbarComponent**:
this component can show in top area of a page and provide several options.

  - **XFooterComponent**:
this component can show in bottom area of a page.

  - **XNavigatorComponent**:
this component can show in side area of a page and provide several options as a navigation bar.

  - **XPageComponent**:
this component use all of 3 above components and provide options to manage their usage and how to looks like a page.

this page and all pages you explored until now created useing this Component.
  `;

  //
  readonly sample1 =
    '```html' +
    `
<v-page
  [hasSide]="true"
  [toolbarTitle]="toolbarTitle"
  [toolbarSubTitle]="toolbarSubTitle"
  [toolbarShowSubTitle]="toolbarShowSubTitle"
  ...
>
  <!-- Content -->
  ...
</v-page>
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
