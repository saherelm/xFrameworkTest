import { Component } from '@angular/core';
import { XIconNames } from 'x-framework-components';
import { VPageComponent } from '../../../views/v-page/v-page.component';
import { AppResourceIDs } from 'src/app/config/app.localization.config';
import { XResourceIDs, isNullOrEmptyString, XColor } from 'x-framework-core';

@Component({
  selector: 'app-expandable-panel',
  templateUrl: './expandable-panel.page.html',
  styleUrls: ['./expandable-panel.page.scss'],
})
// tslint:disable-next-line:component-class-suffix
export class ExpandablePanelPage extends VPageComponent {
  //
  //#region Props ...
  //
  //#region Page Props ...
  titleRes = AppResourceIDs.expandable_panel;
  toolbarTitle = this.resourceProvider(this.titleRes);
  toolbarSubTitle = this.resourceProvider(
    AppResourceIDs.expandable_panel_description
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
  // Content ...
  readonly contentFa = `
  # ${this.toolbarTitle}
  این مولفه جهت گروه بندی محتوای قابل ارائه در یک نمایه بکار می رود.
  `;

  readonly contentEn = `
  # ${this.toolbarTitle}
  this component used to Grouped representable contents in a View.
  `;

  //
  readonly sample1 =
    '```html' +
    `
<x-expandable-panel
  [isAccordion]="true"
  [selected]="'First'"
  [headerColor]="ColorNames.Tertiary"
  [headerHighlightColor]="ColorNames.Warning"
>
  <x-panel [id]="'First'" [hasNext]="true" [hasCustomActions]="true">
  <div x-panel-title>
    Title 1
  </div>

  <div x-panel-description>
    Description 1
  </div>

  Content 1

  <div actions>
    Custom Actions 1
  </div>
  </x-panel>

  <x-panel [id]="'Second'" [hasNext]="true" [hasPrev]="true" [hasReset]="true">
  <div x-panel-title>
    Title 2
  </div>

  <div x-panel-description>
    Description 2
  </div>

  Content 2
  </x-panel>

  <x-panel [id]="'Third'" [hasPrev]="true" [hasReset]="true">
  <div x-panel-title>
    Title 3
  </div>

  <div x-panel-description>
    Description 3
  </div>

  Content 3
  </x-panel>
</x-expandable-panel>
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
