import { Component } from '@angular/core';
import { XIconNames } from 'x-framework-components';
import { VPageComponent } from '../../../views/v-page/v-page.component';
import { AppResourceIDs } from 'src/app/config/app.localization.config';
import { XResourceIDs, isNullOrEmptyString, XColor } from 'x-framework-core';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
// tslint:disable-next-line:component-class-suffix
export class MapPage extends VPageComponent {
  //
  //#region Props ...
  //
  //#region Page Props ...
  titleRes = AppResourceIDs.map;
  toolbarTitle = this.resourceProvider(this.titleRes);
  toolbarSubTitle = this.resourceProvider(AppResourceIDs.map_description);
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
  این مولفه جهت نمایش نقشه و مکان یابی بکار می رود
  `;

  readonly contentEn = `
  # ${this.toolbarTitle}
  this component used to show map and locating map.
  `;

  //
  readonly sample1 =
    '```html' +
    `
<x-map
  [zoom]="8"
  [showZoom]="true"
  [latitude]="35.84"
  [showRotate]="true"
  [showLocate]="true"
  [longitude]="50.9391"
  [showSearchBar]="true"
  [showZoomSlider]="false"
  [locateAfterInit]="true"
  [showClearMarker]="true"
  [showGoMarkedPlace]="true"
  style="--map-height: 300px;"
  [searchBarColor]="
    ColorNames.Tertiary"
  [searchResultListColor]="
    ColorNames.Primary"
></x-map>
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
