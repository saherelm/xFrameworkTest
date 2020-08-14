import {
  XColor,
  XResourceIDs,
  isNullOrEmptyString,
  XBaseRangeRequestDto,
} from 'x-framework-core';
import { Component } from '@angular/core';
import {
  XIconNames,
  XListItem,
  DefaultActionBarItemIds,
} from 'x-framework-components';
import { VPageComponent } from '../../../views/v-page/v-page.component';
import { AppResourceIDs } from 'src/app/config/app.localization.config';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
// tslint:disable-next-line:component-class-suffix
export class ListPage extends VPageComponent {
  //
  //#region Props ...
  //
  //#region Page Props ...
  titleRes = AppResourceIDs.list;
  toolbarTitle = this.resourceProvider(this.titleRes);
  toolbarSubTitle = this.resourceProvider(AppResourceIDs.list_description);
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
  این مولفه جهت نمایش فهرستی از موارد و فراهم کردن ابزار مدیریت آن بکار می رود.
  `;

  readonly contentEn = `
  # ${this.toolbarTitle}
  this component used to provide a way to show items in a list and manage items.
  `;

  //
  readonly sample1 =
    '```typescript' +
    `
tempList = Array
  .from(Array(25).keys());

templListItems: XListItem<string>[] =
  this.tempList.map((i) => {
    const li: XListItem<string> = {
      data: \`Item \${i.toString()}\`,
      slideOptions: [
        {
          id: 'remove',
          icon: this.IconNames.remove,
          color: this.ColorNames.Danger,
          onlyIcon: true,
          slot: 'end',
          handler: () => {
            //
            this.managerService
              .notificationService
              .presentDangerNotification({
                message: \`remove: \${i}\`,
                dissmissable: true,
            });
          },
        },
        {
          id: 'edit',
          icon: this.IconNames.edit,
          color: this.ColorNames.Warning,
          onlyIcon: true,
          slot: 'start',
          handler: () => {
            //
            this.managerService
              .notificationService
              .presentInfoNotification({
                message: \`edit: \${i}\`,
                dissmissable: true,
            });
          },
        },
      ],
  };

  return li;
});
` +
    '```';

  //
  readonly sample2 =
    '```html' +
    `
<x-list
  #listPresenter
  [showToolbar]="true"
  [stickyToolbar]="true"
  [showActionBar]="true"
  [showSearchBar]="true"
  [showDivider]="false"
  [clickableItems]="true"
  [selectableItems]="true"
  [items]="templListItems"
  [enableReordering]="true"
  [itemTemplate]="listItemRef"
  [color]="ColorNames.Tertiary"
  (refresh)="handleRefreshList()"
  [actionBarColor]="ColorNames.Dark"
  [searchBarColor]="ColorNames.Dark"
  [searchBarInputColor]="ColorNames.Dark"
  (removeItems)="handleRemoveItems($event)"
>
</x-list>
` +
    '```';

  readonly sample3 =
    '```typescript' +
    `
handleRefreshList() {
  this.prepareListItems();
}

handleRemoveItems(request:
    XBaseRangeRequestDto<string>) {
  //
  this.templListItems = this
    .templListItems.filter(
      (li) => !request.items
        .includes(li.data)
  );
}

private prepareListItems() {
  this.templListItems = this
    .tempList.map((i) => {
    //
    const li: XListItem<string> = {
      data: \`Item $\{i.toString()}\`,
      slideOptions: [
        {
          id: 'remove',
          icon: this.IconNames.remove,
          color: this.ColorNames.Danger,
          onlyIcon: true,
          slot: 'end',
          handler: () => {
            //
            this.managerService
              .notificationService
              .presentDangerNotification({
                message: \`remove: \${i}\`,
                dissmissable: true,
            });
          },
        },
        {
          id: 'edit',
          icon: this.IconNames.edit,
          color: this.ColorNames.Warning,
          onlyIcon: true,
          slot: 'start',
          handler: () => {
            //
            this.managerService
              .notificationService
              .presentInfoNotification({
                message: \`edit: \${i}\`,
                dissmissable: true,
            });
          },
        },
      ],
    };

    //
    return li;
  });
}
` +
    '```';

  //
  tempList = Array.from(Array(25).keys());
  templListItems: XListItem<string>[] = this.tempList.map((i) => {
    //
    const li: XListItem<string> = {
      data: `Item ${i.toString()}`,
      slideOptions: [
        {
          id: 'remove',
          icon: this.IconNames.remove,
          color: this.ColorNames.Danger,
          onlyIcon: true,
          slot: 'end',
          handler: () => {
            //
            this.managerService.dialogService.presentAreYouSureYesNoDialog(
              () => {
                this.handleRemoveItems({ items: [li.data] });
              }
            );
          },
        },
        {
          id: 'edit',
          icon: this.IconNames.edit,
          color: this.ColorNames.Warning,
          onlyIcon: true,
          slot: 'start',
          handler: () => {
            //
            this.managerService.notificationService.presentInfoNotification({
              message: `edit: ${i}`,
              dissmissable: true,
            });
          },
        },
      ],
    };

    //
    return li;
  });

  //
  hideActions = []; // [DefaultActionBarItemIds.Remove];

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

  //
  //#region UI Handlers ...
  //
  handleRefreshList() {
    this.prepareListItems();
  }

  //
  handleRemoveItems(request: XBaseRangeRequestDto<string>) {
    //
    this.templListItems = this.templListItems.filter(
      (li) => !request.items.includes(li.data)
    );

    //
    this.managerService.notificationService.presentSuccessNotification({
      message: `${request.items.length} item(s) removed ...`,
      dissmissable: true,
    });
  }
  //#endregion

  //
  //#region Private ...
  //
  private prepareListItems() {
    this.templListItems = this.tempList.map((i) => {
      //
      const li: XListItem<string> = {
        data: `Item ${i.toString()}`,
        slideOptions: [
          {
            id: 'remove',
            icon: this.IconNames.remove,
            color: this.ColorNames.Danger,
            onlyIcon: true,
            slot: 'end',
            handler: () => {
              //
              this.managerService.notificationService.presentDangerNotification(
                {
                  message: `remove: ${i}`,
                  dissmissable: true,
                }
              );
            },
          },
          {
            id: 'edit',
            icon: this.IconNames.edit,
            color: this.ColorNames.Warning,
            onlyIcon: true,
            slot: 'start',
            handler: () => {
              //
              this.managerService.notificationService.presentInfoNotification({
                message: `edit: ${i}`,
                dissmissable: true,
              });
            },
          },
        ],
      };

      //
      return li;
    });
  }
  //#endregion
}
