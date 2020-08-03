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
  titleRes = AppResourceIDs.services_introduction;
  toolbarTitle = this.resourceProvider(this.titleRes);
  toolbarSubTitle = this.resourceProvider(
    AppResourceIDs.services_introduction_description
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

این واحد شامل کلیه خدمات قابل استفاده در چارچوب است که هر یک امکانات خاصی را در اختیار قرار می دهد، که اهم آن ها عبارتند از:

- **XDialogService**:
قابلیت نمایش و استفاده از کادر های مختلف محاوره ای را فراهم می کند.

- **XGeolocationService**:
قابلیت مکان یابی را فراهم می کند.

- **XHistoryService**:
قابلیت مدیریت و دستکاری تاریخچه مرور صفحات در مرورگر را فراهم می کند.

- **XLocalizationService**:
قابلیت استفاده از منابع در ازای محتوای مستقیم را جهت پشتیبانی از زبان های مختلف را فراهم می کند.

- **XNotificationService**:
قابلیت نمایش اعلان های مختلف را فراهم می کند.

- **XStorageService**:
قابلیت استفاده از حافطه را جهت ذخیره و بازیابی موارد مختلف فراهم می کند.

- **XSecureStorageService**:
قابلیت استفاده از حافظه بصورت رمزنگاری شده را فراهم می کند.

- **XSecurityService**:
قابلیت رمزنگاری و رمزگشایی اطلاعات و تولید امضاهای دیجیتال را فراهم می کند.

- **XSettingsService**:
قابلیت مدیریت تنظیمات چارچوب را فراهم می کند.

- **XTaskManagerService**:
قابلیت اجرای وظایف و اولویت بندی آن ها را فراهم می کند.

- **XManagerService**:
جهت سهولت دستری به خدمات موجود این خدمت بعنوان در برگیرنده کلیه خدمات لازم در چارچوب، مورد بهره برداری قرار می گیرد.

برای آشنایی بیشتر لطفا به مستندات مراجعه فرمایید.
  `;

  readonly contentEn = `
  # ${this.toolbarTitle}

this module contains all useable services inside the framework which each one provide some capabilities, such as:

- **XDialogService**:
provide the ability of use several types of Dialogs.

- **XGeolocationService**:
provide Geo Location abilities.

- **XHistoryService**:
provide the ability of managing and manipulating Browser History.

- **XLocalizationService**:
provide ability of Localization and Internationalization.

- **XNotificationService**:
provide ability of using several Notifications.

- **XStorageService**:
provide ability of Storage used to Save and Retrieve data.

- **XSecureStorageService**:
provide a Secure Storage to Save and Retrieve data privately.

- **XSecurityService**:
provide ability of Encrypt/Decrypt data and also Generate Checksub Digest of data.

- **XSettingsService**:
provide ability of Managing xFramework Settings.

- **XTaskManagerService**:
provide ability to Queue Tasks and run them based on their priority.

- **XManagerService**:
for better access all services, this Service acts as a Container of all required important above services.

for more information, please read documentation.
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
