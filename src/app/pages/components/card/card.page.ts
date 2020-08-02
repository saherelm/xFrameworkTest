import { Component } from '@angular/core';
import { VPageComponent } from '../../../views/v-page/v-page.component';
import { AppResourceIDs } from 'src/app/config/app.localization.config';
import { XResourceIDs, XColor, isNullOrEmptyString } from 'x-framework-core';

@Component({
  selector: 'app-card',
  templateUrl: './card.page.html',
  styleUrls: ['./card.page.scss'],
})
// tslint:disable-next-line:component-class-suffix
export class CardPage extends VPageComponent {
  //
  //#region Props ...
  //
  //#region Page Props ...
  titleRes = AppResourceIDs.card;
  toolbarTitle = this.resourceProvider(this.titleRes);
  toolbarSubTitle = this.resourceProvider(AppResourceIDs.card_description);
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
  readonly ColorNames = Object.assign({}, XColor);
  //#endregion

  //
  // Content ...
  readonly contentFa = `
  # ${this.toolbarTitle}
این مولفه جهت نمایش یک جزء از اجزای تشکیل دهنده یک صفحه بکار میرود.

  این مولفه می تواند بسته به ابعاد مختلف صفحه واکنش نشان دهد و خود را مطابق کند.
  `;
  readonly contentEn = `
  # ${this.toolbarTitle}
this component use to present a part of a page.

  this component can adapt itself based on screen size.
  `;

  //
  readonly sample1 =
    '```html' +
    `
<x-card
  [showHeader]="true"
  [isPageCard]="true"
  [showFooter]="true"
  [showContent]="true"
  [showActions]="true"
  [color]="ColorNames.Tertiary"
  [title]="resourceProvider(
    ResourceIDs.app_name)"
  [subTitle]="resourceProvider(
    ResourceIDs.company)"
>
  <div header>
    {{resourceProvider(
      ResourceIDs.header)}}
  </div>

  <div content>
    {{resourceProvider(
      ResourceIDs.temp_label)}}
  </div>

  <div actions>
    {{resourceProvider(
      ResourceIDs.actions)}}
  </div>

  <div footer>
    {{resourceProvider(
      ResourceIDs.footer)}}
  </div>
</x-card>
` +
    '```';

  readonly sample2 =
    '```html' +
    `
  <x-card
    [showHeader]="true"
    [isPageCard]="true"
    [showContent]="true"
    [color]="ColorNames.Medium"
    [imageUrl]="
      \'/assets/image/logo.png\'"
    [avatarUrl]="
      \'/assets/image/logo.png\'"
    [title]="resourceProvider(
      ResourceIDs.app_name)"
    [subTitle]="resourceProvider(
      ResourceIDs.company)"
  >
    <div content>
      {{resourceProvider(
        ResourceIDs.temp_label)}}
    </div>
  </x-card>
  ` +
    '```';

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
