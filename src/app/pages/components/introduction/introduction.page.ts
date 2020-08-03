import {
  XResourceIDs,
  isNullOrEmptyString,
  XColorWithBrightness,
} from 'x-framework-core';
import { Component } from '@angular/core';
import { VPageComponent } from '../../../views/v-page/v-page.component';
import { AppResourceIDs } from 'src/app/config/app.localization.config';

@Component({
  selector: 'app-components-introduction',
  templateUrl: './introduction.page.html',
  styleUrls: ['./introduction.page.scss'],
})
// tslint:disable-next-line:component-class-suffix
export class IntroductionPage extends VPageComponent {
  //
  //#region Props ...
  //
  //#region Page Props ...
  titleRes = AppResourceIDs.components_introduction;
  toolbarTitle = this.resourceProvider(this.titleRes);
  toolbarSubTitle = this.resourceProvider(
    AppResourceIDs.components_introduction_description
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
  // Color Names ...
  readonly ColorNames = Object.assign({}, XColorWithBrightness);
  //#endregion

  //
  // Content ...
  readonly contentFa = `
  # ${this.toolbarTitle}

این واحد در زمره اصلی ترین اجزاء چارچوب ایفای نقش می کند و شامل کلیه مولفه های بصری قابل استفاده در طراحی و پیاده سازی برنامه های کاربردی است.

شناخت عمیق کلیه اجزاء این واحد در تسریع فرآیند توسعه بسیار لازم و ضروری است.
  `;

  readonly contentEn = `
  # ${this.toolbarTitle}

this module is one of most important modules of xFramework and contains all provided UI Components which used to design and develop Applications.

getting deep dive into all components of this module is very usefull to make easier the Design and Develop proccess of Applications.
  `;
  //#endregion

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
