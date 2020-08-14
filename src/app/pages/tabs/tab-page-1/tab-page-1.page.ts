import { Component } from '@angular/core';
import { VPageComponent } from 'src/app/views/v-page/v-page.component';
import { AppResourceIDs } from 'src/app/config/app.localization.config';
import { XResourceIDs, XColorWithBrightness } from 'x-framework-core';

@Component({
  selector: 'app-tab-page-1',
  templateUrl: './tab-page-1.page.html',
  styleUrls: ['./tab-page-1.page.scss'],
})
// tslint:disable-next-line:component-class-suffix
export class TabPage1Page extends VPageComponent {
  //
  //#region Props ...
  //
  //#region Page Props ...
  titleRes = AppResourceIDs.tab_page_1;
  //#endregion

  //
  // Prepare All Resource IDs ...
  readonly ResourceIDs = Object.assign(
    Object.assign({}, XResourceIDs),
    AppResourceIDs
  ) as any;

  //
  // Color Names ...
  readonly ColorNames = Object.assign({}, XColorWithBrightness);
  //#endregion
}
