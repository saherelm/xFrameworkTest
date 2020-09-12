import {
  XThemePack,
  XThemeType,
  XResourceIDs,
  XColorWithBrightness,
} from 'x-framework-core';
import { Subject } from 'rxjs';
import {
  XFormStatus,
  XTabChangeEvent,
  XTabsActionModel,
  getEmptyThemePack,
  XFormStatusIdentifier,
  XThemeMakerActionModel,
} from 'x-framework-components';
import { Component } from '@angular/core';
import { VPageComponent } from 'src/app/views/v-page/v-page.component';
import { AppResourceIDs } from 'src/app/config/app.localization.config';

enum Tabs {
  ThemesSummary,
  AddOrEditTheme,
}

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
  readonly Tabs = Object.assign({}, Tabs);
  currentTab = Tabs.ThemesSummary;
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
  themeMakerActionProvider = new Subject<XThemeMakerActionModel>();
  //#endregion

  //
  //#region LifeCycles ...
  async onInit() {
    super.onInit();

    //
    await this.prepareMaterials();
  }
  //#endregion

  //
  //#region UI Providers ...
  //#endregion

  //
  //#region UI Handlers ...
  //
  async handleSelectedTabChanged(event: XTabChangeEvent) {
    //
    this.currentTab = event.index;
    await this.prepareActions();
  }

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
  //#endregion

  //
  //#region Actions ...
  async changeTab(tab: Tabs) {
    //
    switch (tab) {
      //
      case Tabs.ThemesSummary:
        break;

      //
      case Tabs.AddOrEditTheme:
        break;
    }

    //
  }
  //#endregion

  //
  //#region Private ...
  private async prepareMaterials() {
    //
    this.themeNames = await this.managerService.themeManagerService.getThemeNames();
    console.log('themes names: ', this.themeNames);

    //
    this.themes = await this.managerService.themeManagerService.getThemes();
    console.log('themes: ', this.themes);

    //
    this.selectedTheme = await this.managerService.themeManagerService.getCurrentTheme();
    console.log('current theme: ', this.selectedTheme);
  }

  private async prepareActions() {
    //
    this.actions = null;

    //
    switch (this.currentTab) {
      //
      case Tabs.ThemesSummary:
        break;

      //
      case Tabs.AddOrEditTheme:
        break;
    }

    //
    this.detectChanges();
  }
  //#endregion
}
