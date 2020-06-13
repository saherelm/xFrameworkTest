import {
  XColor,
  hasChild,
  XResourceIDs,
  isNullOrEmptyString,
} from 'x-framework-core';
import { Component } from '@angular/core';
import { XIconNames, XListItem } from 'x-framework-components';
import { VPageComponent } from '../../../views/v-page/v-page.component';
import { AppResourceIDs } from 'src/app/config/app.localization.config';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.page.html',
  styleUrls: ['./icon.page.scss'],
})
// tslint:disable-next-line:component-class-suffix
export class IconPage extends VPageComponent {
  //
  //#region Props ...
  //
  //#region Page Props ...
  titleRes = AppResourceIDs.icon;
  toolbarTitle = this.resourceProvider(this.titleRes);
  toolbarSubTitle = this.resourceProvider(AppResourceIDs.icon_description);
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
  IconNames = Object.assign({}, XIconNames);
  iconList = Object.keys(this.IconNames);
  iconListItems: XListItem<string>[] = [];
  //#endregion

  readonly contentFa = `
  # ${this.toolbarTitle}

  این مولفه جهت نمایش شمایل های مختلف بکار میرود.
  `;
  readonly contentEn = `
  # ${this.toolbarTitle}

  this Component used for show an icon.
  `;

  //
  //#region LifeCycle ...
  async afterViewInit() {
    await this.prepareIconListItems();
  }
  //#endregion

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

  canShowIconList() {
    return hasChild(this.iconListItems);
  }
  //#endregion

  //
  //#region UI Handlers ...
  async handleIconSelected(item: XListItem<string>) {
    //
    const iconCode = `\<x-icon name=\'${item.data}\'\>\<\/x-icon\>`;
    console.log(iconCode);
    await this.managerService.notificationService.presentInfoNotification({
      message: iconCode.toString(),
      dissmissable: true,
      opt: {
        duration: 4000,
        buttons: [
          {
            text: this.resourceProvider(XResourceIDs.dismiss),
            icon: this.IconNames.cancel,
            side: 'end',
            role: 'cancel',
          },
        ],
      },
    });
  }
  //#endregion

  //
  //#region Private ...
  private async prepareIconListItems() {
    //
    const loading = await this.managerService.dialogService.presentLoading({});

    //
    this.iconListItems = [];
    if (!hasChild(this.iconList)) {
      return;
    }

    //
    this.iconList.forEach((i) => {
      //
      const li: XListItem<string> = {
        data: i,
      };

      //
      this.iconListItems.push(li);
    });

    //
    loading.dismiss();
  }
  //#endregion
}
