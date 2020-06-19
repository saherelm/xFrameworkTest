import {
  XFabItem,
  XIconNames,
  XButtonType,
  XFabButtonSize,
  XFabButtonSide,
  XFabVerticalSlot,
  XFabHorizontalSlot,
} from 'x-framework-components';
import { Component } from '@angular/core';
import { VPageComponent } from '../../../views/v-page/v-page.component';
import { AppResourceIDs } from 'src/app/config/app.localization.config';
import { XResourceIDs, XColor, isNullOrEmptyString } from 'x-framework-core';

@Component({
  selector: 'app-fab',
  templateUrl: './fab.page.html',
  styleUrls: ['./fab.page.scss'],
})
// tslint:disable-next-line:component-class-suffix
export class FabPage extends VPageComponent {
  //
  //#region Props ...
  //
  //#region Page Props ...
  toolbarShowSubTitle = true;
  titleRes = AppResourceIDs.fab;
  toolbarTitle = this.resourceProvider(this.titleRes);
  toolbarSubTitle = this.resourceProvider(AppResourceIDs.fab_description);

  //
  ids = Array.from(Array(25).keys());
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
  readonly IconNames = Object.assign({}, XIconNames);
  readonly ButtonTypes = Object.assign({}, XButtonType);

  //
  readonly FabButtonSizes = Object.assign({}, XFabButtonSize);
  readonly FabButtonSides = Object.assign({}, XFabButtonSide);
  readonly FabVerticalSlots = Object.assign({}, XFabVerticalSlot);
  readonly FabHorizontalSlots = Object.assign({}, XFabHorizontalSlot);
  //#endregion

  //
  // Content ...
  readonly contentFa = `
  # ${this.toolbarTitle}

  این مولفه جهت ارائه مجموعه ای از فعالیت های مرتبط با یکدیگر در موارد لزوم مورد استفاده قرار می گیرد.
  `;
  readonly contentEn = `
  # ${this.toolbarTitle}

  this components usually used for present a group of related actions together in where we want.
  `;

  //
  readonly sample1 =
    '```html' +
    `
<x-fab
  [item]="{
  id: 'fab_1',
  fixed: true,
  icon: IconNames.menu_vertical,
  size: FabButtonSizes.REGULAR,
  color: ColorNames.Tertiary,
  vertical: FabVerticalSlots.CENTER,
  horizontal: FabHorizontalSlots.CENTER,
  childs: [
  {
    id: 'fab_child_1',
    index: 0,
    icon: IconNames.phone,
    side: FabButtonSides.TOP,
    size: FabButtonSizes.MINI,
    color: ColorNames.Success,
    tooltip: ResourceIDs.temp_label,
    handler: fabHandler
  },
  {
    id: 'fab_child_2',
    index: 1,
    icon: IconNames.mail,
    side: FabButtonSides.BOTTOM,
    size: FabButtonSizes.MINI,
    color: ColorNames.Primary,
    tooltip: ResourceIDs.temp_label,
    handler: fabHandler
  },
  {
    id: 'fab_child_3',
    index: 2,
    icon: IconNames.share,
    side: FabButtonSides.START,
    size: FabButtonSizes.MINI,
    color: ColorNames.Medium,
    tooltip: ResourceIDs.temp_label,
    handler: fabHandler
  },
  {
    id: 'fab_child_3_1',
    index: 3,
    icon: IconNames.avatars,
    side: FabButtonSides.START,
    size: FabButtonSizes.MINI,
    color: ColorNames.Secondary,
    tooltip: ResourceIDs.temp_label,
    handler: fabHandler
  },
  {
    id: 'fab_child_4',
    index: 4,
    icon: IconNames.web,
    side: FabButtonSides.END,
    size: FabButtonSizes.MINI,
    color: ColorNames.Danger,
    tooltip: ResourceIDs.temp_label,
    handler: fabHandler
  }
  ]
}"
></x-fab>
` +
    '```';

  //
  readonly sample2 =
    '```typescript' +
    `
fabHandler = async (id?: string) => {
  await this.handleNotifyFab(id);
};
` +
    '```';

  //
  readonly descriptionsFa = `
  در ادامه نمونه ای از بکارگیری دکمه های شناور ارائه می گردد که در مولفه صفحه و بعنوان یکی از اجزاء آن ارائه شده است.
    برای آشنایی بیشتر می توانید به مستندات مولفه صفحه مراجعه کنید.
    `;

  readonly descriptionsEn = `
    in the following example you will see an implementation of Fab component which provides as a part of Page component.
    for more information you can see Page component documentations.
    `;

  //
  actions: XFabItem = {
    //
    id: 'edit_profile',

    //
    fixed: true,

    //
    color: XColor.Warning,

    //
    icon: XIconNames.edit,

    //
    tooltip: AppResourceIDs.temp_label,

    //
    vertical: XFabVerticalSlot.BOTTOM,
    horizontal: XFabHorizontalSlot.END,

    //
    disabled: this.uiDisabled,

    //
    handler: async (id?: string) => {
      await this.handleNotifyFab(id);
    },
  };

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

  fabHandler = async (id?: string) => {
    await this.handleNotifyFab(id);
  };
  //#endregion

  //
  //#region UI Handlers ...
  async handleNotifyFab(id?: string) {
    await this.managerService.notificationService.presentInfoNotification({
      message: `Clicked Fab Id: ${id}`,
      dissmissable: true,
    });
  }
  //#endregion
}
