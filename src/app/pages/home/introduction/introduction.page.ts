import {
  XResourceIDs,
  isNullOrEmptyString,
  XColorWithBrightness,
} from 'x-framework-core';
import { Component } from '@angular/core';
import { VPageComponent } from 'src/app/views/v-page/v-page.component';
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
  titleRes = AppResourceIDs.home_introduction;
  toolbarTitle = this.resourceProvider(this.titleRes);
  toolbarSubTitle = this.resourceProvider(
    AppResourceIDs.home_introduction_description
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
یک چارچوب طراحی و توسعه ظاهر برنامه های کاربردی است که با بهره گیری از توانمندی های انگولار/آیونیک و کوردوا ایجاد شده است تا فرآیند طراحی و توسعه ظاهر برنامه های کاربردی را سهل تر کند.

این چارچوب بر سه واحد مستقل استوار است که عبارتند از:

- **واحد هسته**:
شامل اصلی ترین نیازمندی های پایه است.

- **واحد خدمات**:
شامل مجموعه ای از خدمات پرکاربرد است که چارچوب از آن ها برای فراهم کردن امکانات مختلف استفاده می کند.

- **واحد مولفه ها**:
مجموعه ای مولفه های بصری که بر پایه استاندارد متریال دیزاین طراحی و توسعه یافته اند و امکانات مختلفی را در اختیار کاربر قرار می دهند.
  `;

  readonly contentEn = `
  # ${this.toolbarTitle}

  a Frontend framework which combined and implement several building blocks to provide an easy to use interface for creating Web/Mobile/Desktop Apps by help of Angular/Ionic and Cordova Powers.

  XFramework built on top of 3 main and unique modules:

  - **Core Module**:
  conatins core features and dependencies.

  - **Services Module**:
  contains some sort of usefull services which this framework used them to provide different options.

  - **Components Module**:
  contains a collection of UI Components which designed and develop based on Material Design and provide different options.
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
