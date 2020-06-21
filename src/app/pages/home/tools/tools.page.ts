import {
  XActionBarItem,
  defaultActionBarRemoveItem,
  defaultActionBarSelectAllItem,
  defaultActionBarDeSelectAllItem,
  defaultActionBarInverseSelectionItem,
} from 'x-framework-components';
import { XColor } from 'x-framework-core';
import { Component } from '@angular/core';
import { VPageComponent } from '../../../views/v-page/v-page.component';
import { AppResourceIDs } from 'src/app/config/app.localization.config';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.page.html',
  styleUrls: ['./tools.page.scss'],
})
// tslint:disable-next-line:component-class-suffix
export class ToolsPage extends VPageComponent {
  //
  //#region Props ...
  //
  //#region Page Props ...
  titleRes = AppResourceIDs.tools;
  toolbarTitle = this.resourceProvider(this.titleRes);
  toolbarSubTitle = this.resourceProvider(AppResourceIDs.tools_description);
  toolbarShowSubTitle = true;

  //
  readonly ColorNames = Object.assign({}, XColor);
  //#endregion

  actionBarItems: XActionBarItem[] = [
    //
    // Remove ...
    {
      //
      ...defaultActionBarRemoveItem,

      //
      index: 0,
    },
    //
    // Select All ...
    {
      //
      ...defaultActionBarSelectAllItem,

      //
      index: 1,
    },
    //
    // Inverse Selection ...
    {
      //
      ...defaultActionBarInverseSelectionItem,

      //
      index: 2,
    },
    //
    // De Select All ...
    {
      //
      ...defaultActionBarDeSelectAllItem,

      //
      index: 3,
    },
  ];
  //#endregion

  //
  //#region UI Handlers ...
  handleActionFired(event: any) {
    console.log('ActionFired: ', event);
  }
  //#endregion
}
