import { Component } from '@angular/core';
import { hasChild, XResourceIDs } from 'x-framework-core';
import { VPageComponent } from '../../../views/v-page/v-page.component';
import { AppResourceIDs } from 'src/app/config/app.localization.config';
import { XIconNames, XListItem } from 'x-framework-components';

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
  IconNames = Object.assign({}, XIconNames);
  iconList = Object.keys(this.IconNames);
  iconListItems: XListItem<string>[] = [];
  //#endregion

  //
  //#region LifeCycle ...
  afterViewInit() {
    //
    super.afterViewInit();

    //
    console.log('afterViewInit ...');
    this.prepareIconListItems();
  }
  //#endregion

  //
  //#region UI Providers ...
  canShowIconList() {
    return hasChild(this.iconListItems);
  }
  //#endregion

  //
  //#region Private ...
  private prepareIconListItems() {
    //
    this.iconListItems = [];
    if (!hasChild(this.iconList)) {
      return;
    }

    //
    this.iconListItems = this.iconList.map((i) => {
      //
      const li: XListItem<string> = {
        data: i,
      };

      //
      return li;
    });
  }
  //#endregion
}
