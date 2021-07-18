import { Component } from '@angular/core';
import { XIconNames } from 'x-framework-components';
import { XMarkdownMode } from 'x-framework-components';
import { VPageComponent } from '../../../views/v-page/v-page.component';
import { AppResourceIDs } from 'src/app/config/app.localization.config';
import { XResourceIDs, isNullOrEmptyString, XColor } from 'x-framework-core';

@Component({
  selector: 'app-markdown',
  templateUrl: './markdown.page.html',
  styleUrls: ['./markdown.page.scss'],
})
// tslint:disable-next-line:component-class-suffix
export class MarkdownPage extends VPageComponent {
  //
  //#region Props ...
  //
  //#region Page Props ...
  titleRes = AppResourceIDs.markdown;
  toolbarTitle = this.resourceProvider(this.titleRes);
  toolbarSubTitle = this.resourceProvider(AppResourceIDs.markdown_description);
  toolbarShowSubTitle = true;
  //#endregion

  //
  // Prepare All Resource IDs ...
  readonly ResourceIDs = Object.assign(
    Object.assign({}, XResourceIDs),
    AppResourceIDs
  ) as any;

  //
  readonly IconNames = Object.assign({}, XIconNames);
  //#endregion

  //
  readonly MarkdownModes = Object.assign({}, XMarkdownMode);

  //
  // Content ...
  readonly contentFa = `
  # ${this.toolbarTitle}
  این مولفه جهت دریافت و نمایش اطلاعات مبتنی بر شیوه نشانه گذاری داده ها موسوم به مارک داون (MarkDown) کاربرد دارد.
  `;

  readonly contentEn = `
  # ${this.toolbarTitle}
  this component used to get and show MarkDown based Data's.
  `;

  //
  readonly sample1 =
    '```html' +
    `
<x-markdown
  [mode]="MarkdownModes.BOTH"
  [(content)]="sampleContent1"
  [toolbarColor]="ColorNames.Dark"
></x-markdown>
` +
    '```';
  readonly sample2 =
    '```html' +
    `
<x-markdown
  [hasToolbar]="false"
  [content]="sampleContent2"
  [mode]="MarkdownModes.PREVIEW"
></x-markdown>
` +
    '```';

  //
  sampleContent1 = `
  ## Todo example

  - Variable binding
  - Code refactor
  - Write more unit tests
  - Module configuration for markdown settings
  - Module configuration for prismjs settings
  `;

  readonly sampleContent2 = `
  ## Todo example
  this is only a preview sample of markdown.
  `;

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
