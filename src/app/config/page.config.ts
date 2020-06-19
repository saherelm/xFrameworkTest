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
  SmallComponents = 'small-components',
  Card = 'card',
  Icon = 'icon',
  Counter = 'counter',
  Fab = 'fab',
  FileComponents = 'file-components',
  Form = 'form',
  Grid = 'grid',
  List = 'list',
  Map = 'map',
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
  SmallComponents = ComponentsRoutes.SmallComponents,
  Card = ComponentsRoutes.Card,
  Icon = ComponentsRoutes.Icon,
  Counter = ComponentsRoutes.Counter,
  Fab = ComponentsRoutes.Fab,
  FileComponents = ComponentsRoutes.FileComponents,
  Form = ComponentsRoutes.Form,
  Grid = ComponentsRoutes.Grid,
  List = ComponentsRoutes.List,
  Map = ComponentsRoutes.Map,
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
    icon: XIconNames.explorer,
    childs: [
      //
      // SmallComponents ...
      {
        id: PageName.SmallComponents.toString(),
        name: PageName.SmallComponents.toString(),
        title: AppResourceIDs.small_components,
        description: AppResourceIDs.small_components_description,
        route: `${AppRoutes.Components}/${ComponentsRoutes.SmallComponents}`,
        icon: XIconNames.list,
      },
      //
      // Card ...
      {
        id: PageName.Card.toString(),
        name: PageName.Card.toString(),
        title: AppResourceIDs.card,
        description: AppResourceIDs.card_description,
        route: `${AppRoutes.Components}/${ComponentsRoutes.Card}`,
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
      //
      // Counter ...
      {
        id: PageName.Counter.toString(),
        name: PageName.Counter.toString(),
        title: AppResourceIDs.counter,
        description: AppResourceIDs.counter_description,
        route: `${AppRoutes.Components}/${ComponentsRoutes.Counter}`,
        icon: XIconNames.list,
      },
      //
      // Fab ...
      {
        id: PageName.Fab.toString(),
        name: PageName.Fab.toString(),
        title: AppResourceIDs.fab,
        description: AppResourceIDs.fab_description,
        route: `${AppRoutes.Components}/${ComponentsRoutes.Fab}`,
        icon: XIconNames.list,
      },
      //
      // FileComponents ...
      {
        id: PageName.FileComponents.toString(),
        name: PageName.FileComponents.toString(),
        title: AppResourceIDs.file_components,
        description: AppResourceIDs.file_components_description,
        route: `${AppRoutes.Components}/${ComponentsRoutes.FileComponents}`,
        icon: XIconNames.list,
      },
      //
      // Form ...
      {
        id: PageName.Form.toString(),
        name: PageName.Form.toString(),
        title: AppResourceIDs.form,
        description: AppResourceIDs.form_description,
        route: `${AppRoutes.Components}/${ComponentsRoutes.Form}`,
        icon: XIconNames.list,
      },
      //
      // Grid ...
      {
        id: PageName.Grid.toString(),
        name: PageName.Grid.toString(),
        title: AppResourceIDs.grid,
        description: AppResourceIDs.grid_description,
        route: `${AppRoutes.Components}/${ComponentsRoutes.Grid}`,
        icon: XIconNames.list,
      },
      //
      // List ...
      {
        id: PageName.List.toString(),
        name: PageName.List.toString(),
        title: AppResourceIDs.list,
        description: AppResourceIDs.list_description,
        route: `${AppRoutes.Components}/${ComponentsRoutes.List}`,
        icon: XIconNames.list,
      },
      //
      // Map ...
      {
        id: PageName.Map.toString(),
        name: PageName.Map.toString(),
        title: AppResourceIDs.map,
        description: AppResourceIDs.map_description,
        route: `${AppRoutes.Components}/${ComponentsRoutes.Map}`,
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
  SmallComponents: PageIndex.Components.childs[0],
  Card: PageIndex.Components.childs[1],
  Icon: PageIndex.Components.childs[2],
  Counter: PageIndex.Components.childs[3],
  Fab: PageIndex.Components.childs[4],
  FileUpload: PageIndex.Components.childs[5],
  Form: PageIndex.Components.childs[6],
  Grid: PageIndex.Components.childs[7],
  List: PageIndex.Components.childs[8],
  Map: PageIndex.Components.childs[9],
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
      // SmallComponents ...
      {
        id: '20',
        data: Pages.SmallComponents,
        title: Pages.SmallComponents.title,
        routerDirection: 'root',
        href: [
          '/',
          Pages.Components.route,
          ComponentsRoutes.SmallComponents.toString(),
        ],
        description: Pages.SmallComponents.description,
      },
      //
      // Card ...
      {
        id: '21',
        data: Pages.Card,
        title: Pages.Card.title,
        routerDirection: 'root',
        href: ['/', Pages.Components.route, ComponentsRoutes.Card.toString()],
        description: Pages.Card.description,
      },
      //
      // Icon ...
      {
        id: '22',
        data: Pages.Icon,
        title: Pages.Icon.title,
        routerDirection: 'root',
        href: ['/', Pages.Components.route, ComponentsRoutes.Icon.toString()],
        description: Pages.Icon.description,
      },
      //
      // Counter ...
      {
        id: '23',
        data: Pages.Counter,
        title: Pages.Counter.title,
        routerDirection: 'root',
        href: [
          '/',
          Pages.Components.route,
          ComponentsRoutes.Counter.toString(),
        ],
        description: Pages.Counter.description,
      },
      //
      // Fab ...
      {
        id: '24',
        data: Pages.Fab,
        title: Pages.Fab.title,
        routerDirection: 'root',
        href: ['/', Pages.Components.route, ComponentsRoutes.Fab.toString()],
        description: Pages.Fab.description,
      },
      //
      // FileUpload ...
      {
        id: '25',
        data: Pages.FileUpload,
        title: Pages.FileUpload.title,
        routerDirection: 'root',
        href: [
          '/',
          Pages.Components.route,
          ComponentsRoutes.FileComponents.toString(),
        ],
        description: Pages.FileUpload.description,
      },
      //
      // Form ...
      {
        id: '26',
        data: Pages.Form,
        title: Pages.Form.title,
        routerDirection: 'root',
        href: ['/', Pages.Components.route, ComponentsRoutes.Form.toString()],
        description: Pages.Form.description,
      },
      //
      // Grid ...
      {
        id: '27',
        data: Pages.Grid,
        title: Pages.Grid.title,
        routerDirection: 'root',
        href: ['/', Pages.Components.route, ComponentsRoutes.Grid.toString()],
        description: Pages.Grid.description,
      },
      //
      // List ...
      {
        id: '28',
        data: Pages.List,
        title: Pages.List.title,
        routerDirection: 'root',
        href: ['/', Pages.Components.route, ComponentsRoutes.List.toString()],
        description: Pages.List.description,
      },
      //
      // Map ...
      {
        id: '29',
        data: Pages.Map,
        title: Pages.Map.title,
        routerDirection: 'root',
        href: ['/', Pages.Components.route, ComponentsRoutes.Map.toString()],
        description: Pages.Map.description,
      },
    ],
  },
  //#endregion
];
//#endregion
