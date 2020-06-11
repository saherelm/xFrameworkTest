import {
  Inject,
  Component,
  Renderer2,
  ElementRef,
  ChangeDetectorRef,
} from '@angular/core';
import { VPageComponent } from '../../../views/v-page/v-page.component';
import { AppResourceIDs } from 'src/app/config/app.localization.config';
import { XIconNames, XListItem } from 'x-framework-components';
import { hasChild } from 'x-framework-core';
import { ViewportRuler } from '@angular/cdk/overlay';
import { MenuController } from '@ionic/angular';
import { XManagerService } from 'x-framework-services';
import { XConfig } from 'src/app/config/app-config';
import { X_CONFIG } from 'src/app/config/x-config';

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

  IconNames = Object.assign({}, XIconNames);
  iconList = Object.keys(this.IconNames);
  iconListItems: XListItem<string>[] = [];
  //#endregion

  //
  //#region Constructor ...
  constructor(
    public element: ElementRef,
    public renderer: Renderer2,
    public ruler: ViewportRuler,
    public menuController: MenuController,
    public managerService: XManagerService,
    public changeDetector: ChangeDetectorRef,
    @Inject(X_CONFIG) public config: XConfig
  ) {
    super(
      element,
      renderer,
      ruler,
      menuController,
      managerService,
      changeDetector,
      config
    );
  }
  //#endregion

  //
  //#region LifeCycle ...
  onInit() {
    //
    console.log('oninit ...');
    this.prepareIconListItems();
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
