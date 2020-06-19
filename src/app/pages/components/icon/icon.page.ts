import {
  XColor,
  XSpinner,
  hasChild,
  XResourceIDs,
  isNullOrEmptyString,
} from 'x-framework-core';
import { Component } from '@angular/core';
import {
  XIconNames,
  XListItem,
  XModelConfig,
  XModelPropPresentType,
  XModelPropAppearance,
} from 'x-framework-components';
import { VPageComponent } from '../../../views/v-page/v-page.component';
import { AppResourceIDs } from 'src/app/config/app.localization.config';

interface IconsListPresentation {
  show: boolean;
}

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
  // Spinner Names ...
  readonly SpinnerNames = Object.assign({}, XSpinner);

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

  readonly sample1 =
    '```html' +
    `
<x-icon
  [foregroundColor]="true"
  [name]="IconNames.business"
  [color]="ColorNames.Success"
>
</x-icon>
` +
    '```';

  readonly sample2 =
    '```html' +
    `
<x-icon
  [clickable]="true"
  [name]="IconNames.home"
  [foregroundColor]="false"
  [color]="ColorNames.Dark"
  (clicked)="managerService
    .notificationService
      .presentInfoNotification({
    message: 'icon clicked ...',
    dissmissable: true
  })"
>
</x-icon>
` +
    '```';

  //
  showIconList = false;
  modelConfig: XModelConfig<IconsListPresentation> = {
    model: { show: false },
    props: [
      {
        //
        index: 0,

        //
        propName: 'show',
        type: XModelPropPresentType.CheckBox,
        appearance: XModelPropAppearance.Fill,

        //
        config: [false],
        label: `${this.resourceProvider(
          this.ResourceIDs.show
        )} ${this.resourceProvider(this.ResourceIDs.icon_list)}`,

        //
        checkedChanged: async (checked: boolean) => {
          //
          if (!hasChild(this.iconListItems)) {
            //
            const loading = await this.managerService.dialogService.presentLoading(
              {
                message: this.resourceProvider(AppResourceIDs.default_loading),
                spinner: this.SpinnerNames.LinesSmall,
              }
            );

            //
            await this.prepareIconListItems();

            //
            await loading.dismiss();
          }

          //
          this.showIconList = checked;
        },
      },
    ],
  };

  //
  //#region LifeCycle ...
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
    // text: this.resourceProvider(XResourceIDs.dismiss),
    const iconText = `&lt;x-icon name='${item.data}'&gt;&lt;/x-icon&gt;`;
    const iconCode = `<x-icon name='${item.data}'></x-icon>`;
    await this.managerService.notificationService.presentInfoNotification({
      message: iconText,
      dissmissable: true,
      opt: {
        duration: 4000,
        buttons: [
          {
            icon: this.IconNames.clipboard,
            side: 'end',
            role: 'set',
            handler: () => {
              //
              console.log(iconCode);
              const isSaved = this.managerService.saveToClipboard(iconCode);
              if (isSaved) {
                this.managerService.notificationService.presentDefaultSuccessNotification();
              }
            },
          },
          {
            icon: this.IconNames.close,
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
    this.iconListItems = this.iconList.map((i) => {
      //
      const li: XListItem<string> = {
        data: i,
      };

      //
      return li;
    });
    this.detectChanges();
  }
  //#endregion
}
