import { Component } from '@angular/core';
import { XIconNames, XExpandableListItem } from 'x-framework-components';
import { VPageComponent } from '../../../views/v-page/v-page.component';
import { AppResourceIDs } from 'src/app/config/app.localization.config';
import {
  XResourceIDs,
  isNullOrEmptyString,
  XColor,
  random,
} from 'x-framework-core';

@Component({
  selector: 'app-expandable-list',
  templateUrl: './expandable-list.page.html',
  styleUrls: ['./expandable-list.page.scss'],
})
// tslint:disable-next-line:component-class-suffix
export class ExpandableListPage extends VPageComponent {
  //
  //#region Props ...
  //
  //#region Page Props ...
  titleRes = AppResourceIDs.expandable_list;
  toolbarTitle = this.resourceProvider(this.titleRes);
  toolbarSubTitle = this.resourceProvider(
    AppResourceIDs.expandable_list_description
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
  readonly ColorNames = Object.assign({}, XColor);
  readonly IconNames = Object.assign({}, XIconNames);
  //#endregion

  //
  tempList = Array.from(Array(5).keys());
  tempChilds = Array.from(Array(2).keys());
  listItems: XExpandableListItem<string>[] = this.tempList.map((i) => {
    //
    const li: XExpandableListItem<string> = {
      ...this.toListItem(i),
      childs:
        random(0, 1) === 0
          ? undefined
          : this.tempChilds.map((c) => {
              //
              const cLi: XExpandableListItem<string> = {
                ...this.toListItem(c, i.toString()),
              };

              //
              return cLi;
            }),
    };

    //
    return li;
  });

  //
  // Content ...
  readonly contentFa = `
  # ${this.toolbarTitle}
  از این مولفه در مواقعی استفاده می شود که قصد داریم مجموعه هایی از اطلاعات را در گروه های مختلف دسته بندی کرده و نمایش دهیم.
    `;

  readonly contentEn = `
  # ${this.toolbarTitle}
  this component used to show a collection of data sets in a grouped structure.
    `;

  //
  readonly sample1 =
    '```html' +
    `
<x-expandable-list
  [items]="listItems"
  [closeSiblings]="true"
  [supportRouting]="false"
  [showChildDetailIcon]="true"
  [showParentDetailIcon]="true"
  [startupState]="'expand-all'"
  [disableParentRouting]="false"
  [dividerColor]="ColorNames.Danger"
  [childColor]="ColorNames.Secondary"
  [parentColor]="ColorNames.Tertiary"
  [highlightColor]="ColorNames.Success"
  [parentActiveColor]="ColorNames.Danger"
  [childActiveColor]="ColorNames.Warning"
  (itemSelected)="handleItemSelected($event)"
>
</x-expandable-list>
` +
    '```';

  //
  readonly sample2 =
    '```typescript' +
    `
async handleItemSelected(item: XExpandableListItem<any>) {
  //
  if (!item) {
    return;
  }

  //
  await this.managerService.notificationService.presentSuccessNotification({
    message: \`item \${item.id} Selected ...\`,
    dissmissable: true,
  });
}
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

  async handleItemSelected(item: XExpandableListItem<any>) {
    //
    if (!item) {
      return;
    }

    //
    await this.managerService.notificationService.presentSuccessNotification({
      message: `item ${item.id} Selected ...`,
      dissmissable: true,
    });
  }

  private toListItem(data: any, prefix?: string) {
    return {
      id: `${prefix ? prefix + '_' : ''}${data}`,
      data: `Item ${prefix ? prefix + '_' : ''}${data}`,
      opened: random(0, 1) === 0 ? true : false,
      title: `Title ${prefix ? prefix + '_' : ''}${data}`,
      description: `Description ${prefix ? prefix + '_' : ''}${data}`,
    } as XExpandableListItem<any>;
  }
}
