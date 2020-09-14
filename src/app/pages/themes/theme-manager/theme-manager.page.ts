import {
  XThemePack,
  XThemeType,
  XResourceIDs,
  XColorWithBrightness,
} from 'x-framework-core';
import { Subject } from 'rxjs';
import {
  XFormStatus,
  XTabsActionModel,
  getEmptyThemePack,
  XThemeManagerTabs,
  XThemeManagerAction,
  XFormStatusIdentifier,
  XThemeManagerActionModel,
} from 'x-framework-components';
import { Component } from '@angular/core';
import { VPageComponent } from 'src/app/views/v-page/v-page.component';
import { AppResourceIDs } from 'src/app/config/app.localization.config';

@Component({
  selector: 'app-theme-manager',
  templateUrl: './theme-manager.page.html',
  styleUrls: ['./theme-manager.page.scss'],
})
// tslint:disable-next-line:component-class-suffix
export class ThemeManagerPage extends VPageComponent {
  //
  //#region Props ...
  //
  //#region Page Props ...
  titleRes = AppResourceIDs.theme_manager;
  toolbarTitle = this.resourceProvider(this.titleRes);
  toolbarSubTitle = this.resourceProvider(
    AppResourceIDs.theme_manager_description
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
  // Color Names ...
  readonly ColorNames = Object.assign({}, XColorWithBrightness);

  //
  // Tabs ...
  currentTab: XThemeManagerTabs;
  tabsActionProvider = new Subject<XTabsActionModel>();

  //
  // Theme Types ...
  readonly ThemeTypes = Object.assign({}, XThemeType);

  //
  themes: XThemePack[];
  themeNames: string[];
  selectedTheme: XThemePack;

  //
  formProvidedTheme: XThemePack;
  formStatus: XFormStatusIdentifier;
  emptyThemePack = getEmptyThemePack();

  //
  // Theme Maker Action Provider ...
  themeManagerActionProvider = new Subject<XThemeManagerActionModel>();
  //#endregion

  //
  //#region LifeCycles ...
  async onInit() {
    super.onInit();
  }

  onBack() {
    super.onBack();

    //
    console.log('Back Pressed ...: ', this.isBackPrevented);
    this.themeManagerActionProvider.next({
      action: XThemeManagerAction.Back,
    });
  }
  //#endregion

  //
  //#region UI Providers ...
  //#endregion

  //
  //#region UI Handlers ...
  //
  async handleThemeValueChanged(event: XThemePack) {
    this.formProvidedTheme = {
      ...event,
    };
  }

  //
  async handleThemeStatusChanged(status: XFormStatus) {
    this.formStatus = status;
  }

  async handleTabChange(event: XThemeManagerTabs) {
    console.log('handleTabChange: ', event);

    //
    this.currentTab = event;

    //
    switch (event) {
      //
      case XThemeManagerTabs.List:
        //
        this.preventBack = false;
        this.toolbarHasBack = false;
        this.toolbarShowBack = false;
        break;

      //
      case XThemeManagerTabs.Details:
        //
        this.preventBack = true;
        this.toolbarHasBack = true;
        this.toolbarShowBack = true;
        break;

      //
      case XThemeManagerTabs.AddOrUpdate:
        //
        this.preventBack = true;
        this.toolbarHasBack = true;
        this.toolbarShowBack = true;
        break;
    }

    //
    await this.prepareActions();

    //
    this.detectChanges();
  }
  //#endregion

  //
  //#region Actions ...
  //#endregion

  //
  //#region Private ...
  private async prepareActions(tab = XThemeManagerTabs.List) {
    //
    this.actions = null;
    this.detectChanges();
  }

  private async handleBack() {
    //
    console.log('handleBack: ', this.currentTab);

    //
    const currentTab = this.currentTab || XThemeManagerTabs.List;
    if (!currentTab) {
      return;
    }

    //
    this.themeManagerActionProvider.next({
      action: XThemeManagerAction.Back,
    });

    //
    this.detectChanges();
  }
  //#endregion
}
