import { XIconNames, XNavigatorListItem, XPage } from 'x-framework-components';
import { AppResourceIDs } from './app.localization.config';

//
//#region Route Config ...
export enum BaseRoutes {
  Default = '',
  Unknown = '**',
}

export enum HomeRoutes {
  Default = 'home',
  Home = 'home',
  Tools = 'tools',
}

export enum ComponentsRoutes {
  Default = 'components',
  Components = 'components',
  Button = 'button',
  Icon = 'icon',
}

export enum AppRoutes {
  Default = BaseRoutes.Default,
  Home = HomeRoutes.Default,
  Components = ComponentsRoutes.Default,
  Unknown = BaseRoutes.Unknown,
}
//#endregion

//
//#region Page Configs ...
export enum PageName {
  //
  Home = AppRoutes.Home,
  Tools = HomeRoutes.Tools,

  //
  Components = AppRoutes.Components,
  Button = ComponentsRoutes.Button,
  Icon = ComponentsRoutes.Icon,
}

export type PageNames = keyof typeof PageName;

export type PageNameIdentifier = PageName | PageNames | string;

export type PageIndexType = {
  [key in PageNames]?: XPage;
};

export const PageIndex: PageIndexType = {
  //
  Home: {
    id: PageName.Home.toString(),
    name: PageName.Home.toString(),
    title: AppResourceIDs.home,
    description: AppResourceIDs.home_description,
    route: AppRoutes.Home.toString(),
    icon: XIconNames.home,
    childs: [
      //
      // Tools ...
      {
        id: PageName.Tools.toString(),
        name: PageName.Tools.toString(),
        title: AppResourceIDs.tools,
        description: AppResourceIDs.tools_description,
        route: `${AppRoutes.Home}/${HomeRoutes.Tools}`,
        icon: XIconNames.list,
      },
    ],
  },

  //
  Components: {
    id: PageName.Components.toString(),
    name: PageName.Components.toString(),
    title: AppResourceIDs.components,
    description: AppResourceIDs.components_description,
    route: AppRoutes.Components.toString(),
    icon: XIconNames.home,
    childs: [
      //
      // Button ...
      {
        id: PageName.Button.toString(),
        name: PageName.Button.toString(),
        title: AppResourceIDs.button,
        description: AppResourceIDs.button_description,
        route: `${AppRoutes.Components}/${ComponentsRoutes.Button}`,
        icon: XIconNames.list,
      },
      //
      // Icon ...
      {
        id: PageName.Icon.toString(),
        name: PageName.Icon.toString(),
        title: AppResourceIDs.icon,
        description: AppResourceIDs.icon_description,
        route: `${AppRoutes.Components}/${ComponentsRoutes.Icon}`,
        icon: XIconNames.list,
      },
    ],
  },
};

//
// a Const of Available Pages ...
export const Pages = {
  //
  Home: PageIndex.Home,
  Tools: PageIndex.Home.childs[0],

  //
  Components: PageIndex.Components,
  Button: PageIndex.Components.childs[0],
  Icon: PageIndex.Components.childs[1],
};

//
// Admin Navigator Pages ...
export const NavPageItems: XNavigatorListItem[] = [
  //
  //#region Home ...
  {
    id: '1',
    data: Pages.Home,
    title: Pages.Home.title,
    routerDirection: 'root',
    //
    // Comment this for Prevent Routing Change ...
    // href: ['/', Pages.Home.route],
    description: Pages.Home.description,
    childs: [
      //
      // Tools ...
      {
        id: '10',
        data: Pages.Tools,
        title: Pages.Tools.title,
        routerDirection: 'root',
        href: ['/', Pages.Home.route, HomeRoutes.Tools.toString()],
        description: Pages.Tools.description,
      },
    ],
  },
  //#endregion

  //
  //#region Components ...
  {
    id: '2',
    data: Pages.Components,
    title: Pages.Components.title,
    routerDirection: 'root',
    //
    // Comment this for Prevent Routing Change ...
    // href: ['/', Pages.Components.route],
    description: Pages.Components.description,
    childs: [
      //
      // Button ...
      {
        id: '20',
        data: Pages.Button,
        title: Pages.Button.title,
        routerDirection: 'root',
        href: ['/', Pages.Components.route, ComponentsRoutes.Button.toString()],
        description: Pages.Button.description,
      },
      //
      // Icon ...
      {
        id: '21',
        data: Pages.Icon,
        title: Pages.Icon.title,
        routerDirection: 'root',
        href: ['/', Pages.Components.route, ComponentsRoutes.Icon.toString()],
        description: Pages.Icon.description,
      },
    ],
  },
  //#endregion
];
//#endregion
