import { Component } from '@angular/core';
import {
  XIconNames,
  XGridItem,
  XGridPresentType,
  XStaggedGridOptions,
  defaultGridOptions,
} from 'x-framework-components';
import { VPageComponent } from '../../../views/v-page/v-page.component';
import { AppResourceIDs } from 'src/app/config/app.localization.config';
import { XResourceIDs, isNullOrEmptyString, XColor } from 'x-framework-core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.page.html',
  styleUrls: ['./grid.page.scss'],
})
// tslint:disable-next-line:component-class-suffix
export class GridPage extends VPageComponent {
  //
  //#region Props ...
  //
  //#region Page Props ...
  titleRes = AppResourceIDs.grid;
  toolbarTitle = this.resourceProvider(this.titleRes);
  toolbarSubTitle = this.resourceProvider(AppResourceIDs.grid_description);
  toolbarShowSubTitle = true;
  //#endregion

  //
  // Prepare All Resource IDs ...
  readonly ResourceIDs = Object.assign(
    Object.assign({}, XResourceIDs),
    AppResourceIDs
  );

  //
  readonly ColorNames = Object.assign({}, XColor);
  readonly IconNames = Object.assign({}, XIconNames);
  //#endregion

  //
  // Content ...
  readonly contentFa = `
# ${this.toolbarTitle}
این مولفه نمایش مجموعه ای از عناصر مرتبط با هم بکار می رود.
`;

  readonly contentEn = `
# ${this.toolbarTitle}
this component used to show a collection of related items.
`;

  //
  readonly sample0 =
    '```typescript' +
    `
gridOption: XStaggedGridOptions = {
  ...defaultGridOptions,
};
tempList = Array.from(Array(25).keys());
templGridItems: XGridItem<string>[] = this.tempList.map((i) => {
  //
  const li: XGridItem<string> = {
    data: \`Item \${i.toString()}\`,
  };

  //
  return li;
});
` +
    '```';

  //
  readonly sample1 =
    '```html' +
    `
<x-grid
  [isPageGrid]="true"
  [wrapWithCard]="true"
  [items]="templGridItems"
  [selectableItems]="true"
  [itemTemplate]="gridItemRef"
  [type]="GridPresentTypes.AsFlex"
  (itemSelected)="
    handleGridItemSelected($event)"
>
</x-grid>
` +
    '```';

  readonly sample2 =
    '```html' +
    `
<x-grid
  [cols]="4"
  [isPageGrid]="true"
  [wrapWithCard]="true"
  [items]="templGridItems"
  [selectableItems]="true"
  [itemTemplate]="gridItemRef"
  [type]="GridPresentTypes.AsGrid"
  (itemSelected)="
    handleGridItemSelected($event)"
>
</x-grid>
` +
    '```';

  //
  readonly GridPresentTypes = Object.assign({}, XGridPresentType);

  //
  gridOption: XStaggedGridOptions = {
    ...defaultGridOptions,
  };
  tempList = Array.from(Array(25).keys());
  templGridItems: XGridItem<string>[] = this.tempList.map((i) => {
    //
    const li: XGridItem<string> = {
      data: `Item ${i.toString()}`,
    };

    //
    return li;
  });

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

  //
  handleGridItemSelected(item: XGridItem<string>) {
    console.log('handleGridItemSelected: ', item.data);
  }
  //#endregion
}
