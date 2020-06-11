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

export enum AppRoutes {
  Default = BaseRoutes.Default,
  Home = HomeRoutes.Default,
  Unknown = BaseRoutes.Unknown,
}
//#endregion

//
//#region Page Configs ...
export enum PageName {
  //
  Home = AppRoutes.Home,
  Tools = HomeRoutes.Tools,
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
};

//
// a Const of Available Pages ...
export const Pages = {
  //
  Home: PageIndex.Home,
  Child: PageIndex.Home.childs[0],
};

//
// Admin Navigator Pages ...
export const NavPageItems: XNavigatorListItem[] = [
  //
  // Home ...
  {
    id: '1',
    data: Pages.Home,
    title: Pages.Home.title,
    routerDirection: 'root',
    href: ['/', Pages.Home.route],
    description: Pages.Home.description,
    childs: [
      //
      // Child ...
      {
        id: '10',
        data: Pages.Child,
        title: Pages.Child.title,
        routerDirection: 'forward',
        href: ['/', Pages.Home.route, HomeRoutes.Tools.toString()],
        description: Pages.Child.description,
      },
    ],
  },
];
//#endregion
