import {
  XIconNames,
  XNavigatorListItem,
  toNavigatiorListItem,
} from 'x-framework-components';
import { XPage } from 'x-framework-core';
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
  MarkDown = 'markdown',
  ExpandableList = 'expandable-list',
  ExpandablePanel = 'expandable-panel',
  Slider = 'slider',
  Stepper = 'stepper',
  Tabs = 'tabs',
  Table = 'table',
  Page = 'page',
  TabNavigator = 'tab-navigator',
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
  //
  MarkDown = ComponentsRoutes.MarkDown,
  ExpandableList = ComponentsRoutes.ExpandableList,
  ExpandablePanel = ComponentsRoutes.ExpandablePanel,
  Slider = ComponentsRoutes.Slider,
  Stepper = ComponentsRoutes.Stepper,
  Tabs = ComponentsRoutes.Tabs,
  Table = ComponentsRoutes.Table,
  Page = ComponentsRoutes.Page,
  TabNavigator = ComponentsRoutes.TabNavigator,
}

export type PageNames = keyof typeof PageName;

export type PageNameIdentifier = PageName | PageNames | string;

export type PageIndexType = {
  [key in PageNames]?: XPage;
};

export const PageIndex: PageIndexType = {
  //
  Home: {
    icon: XIconNames.home,
    id: `${PageName.Home}`,
    name: `${PageName.Home}`,
    title: AppResourceIDs.home,
    baseRoute: `${AppRoutes.Home}`,
    route: ['/', `${AppRoutes.Home}`],
    description: AppResourceIDs.home_description,
    childs: [
      //
      // Tools ...
      {
        icon: XIconNames.list,
        id: `${PageName.Tools}`,
        name: `${PageName.Tools}`,
        title: AppResourceIDs.tools,
        baseRoute: `${HomeRoutes.Tools}`,
        description: AppResourceIDs.tools_description,
        route: ['/', `${AppRoutes.Home}`, `${HomeRoutes.Tools}`],
      },
    ],
  },

  //
  Components: {
    icon: XIconNames.explorer,
    id: `${PageName.Components}`,
    name: `${PageName.Components}`,
    title: AppResourceIDs.components,
    baseRoute: `${AppRoutes.Components}`,
    route: ['/', `${AppRoutes.Components}`],
    description: AppResourceIDs.components_description,
    childs: [
      //
      // SmallComponents ...
      {
        icon: XIconNames.list,
        id: `${PageName.SmallComponents}`,
        name: `${PageName.SmallComponents}`,
        title: AppResourceIDs.small_components,
        baseRoute: `${ComponentsRoutes.SmallComponents}`,
        description: AppResourceIDs.small_components_description,
        route: [
          '/',
          `${AppRoutes.Components}`,
          `${ComponentsRoutes.SmallComponents}`,
        ],
      },
      //
      // Card ...
      {
        icon: XIconNames.list,
        id: `${PageName.Card}`,
        name: `${PageName.Card}`,
        title: AppResourceIDs.card,
        baseRoute: `${ComponentsRoutes.Card}`,
        description: AppResourceIDs.card_description,
        route: ['/', `${AppRoutes.Components}`, `${ComponentsRoutes.Card}`],
      },
      //
      // Icon ...
      {
        icon: XIconNames.list,
        id: `${PageName.Icon}`,
        name: `${PageName.Icon}`,
        title: AppResourceIDs.icon,
        baseRoute: `${ComponentsRoutes.Icon}`,
        description: AppResourceIDs.icon_description,
        route: ['/', `${AppRoutes.Components}`, `${ComponentsRoutes.Icon}`],
      },
      //
      // Counter ...
      {
        icon: XIconNames.list,
        id: `${PageName.Counter}`,
        name: `${PageName.Counter}`,
        title: AppResourceIDs.counter,
        baseRoute: `${ComponentsRoutes.Counter}`,
        description: AppResourceIDs.counter_description,
        route: ['/', `${AppRoutes.Components}`, `${ComponentsRoutes.Counter}`],
      },
      //
      // Fab ...
      {
        id: `${PageName.Fab}`,
        icon: XIconNames.list,
        name: `${PageName.Fab}`,
        title: AppResourceIDs.fab,
        baseRoute: `${ComponentsRoutes.Fab}`,
        description: AppResourceIDs.fab_description,
        route: ['/', `${AppRoutes.Components}`, `${ComponentsRoutes.Fab}`],
      },
      //
      // FileComponents ...
      {
        icon: XIconNames.list,
        id: `${PageName.FileComponents}`,
        name: `${PageName.FileComponents}`,
        title: AppResourceIDs.file_components,
        baseRoute: `${ComponentsRoutes.FileComponents}`,
        description: AppResourceIDs.file_components_description,
        route: [
          '/',
          `${AppRoutes.Components}`,
          `${ComponentsRoutes.FileComponents}`,
        ],
      },
      //
      // Form ...
      {
        icon: XIconNames.list,
        id: `${PageName.Form}`,
        name: `${PageName.Form}`,
        title: AppResourceIDs.form,
        baseRoute: `${ComponentsRoutes.Form}`,
        description: AppResourceIDs.form_description,
        route: ['/', `${AppRoutes.Components}`, `${ComponentsRoutes.Form}`],
      },
      //
      // Grid ...
      {
        icon: XIconNames.list,
        id: `${PageName.Grid}`,
        name: `${PageName.Grid}`,
        title: AppResourceIDs.grid,
        baseRoute: `${ComponentsRoutes.Grid}`,
        description: AppResourceIDs.grid_description,
        route: ['/', `${AppRoutes.Components}`, `${ComponentsRoutes.Grid}`],
      },
      //
      // List ...
      {
        icon: XIconNames.list,
        id: `${PageName.List}`,
        name: `${PageName.List}`,
        title: AppResourceIDs.list,
        baseRoute: `${ComponentsRoutes.List}`,
        description: AppResourceIDs.list_description,
        route: ['/', `${AppRoutes.Components}`, `${ComponentsRoutes.List}`],
      },
      //
      // Map ...
      {
        icon: XIconNames.list,
        id: `${PageName.Map}`,
        name: `${PageName.Map}`,
        title: AppResourceIDs.map,
        baseRoute: `${ComponentsRoutes.Map}`,
        description: AppResourceIDs.map_description,
        route: ['/', `${AppRoutes.Components}`, `${ComponentsRoutes.Map}`],
      },
      //
      // MarkDown ...
      {
        icon: XIconNames.list,
        id: `${PageName.MarkDown}`,
        name: `${PageName.MarkDown}`,
        title: AppResourceIDs.markdown,
        baseRoute: `${ComponentsRoutes.MarkDown}`,
        description: AppResourceIDs.markdown_description,
        route: ['/', `${AppRoutes.Components}`, `${ComponentsRoutes.MarkDown}`],
      },
      //
      // ExpandableList ...
      {
        icon: XIconNames.list,
        id: `${PageName.ExpandableList}`,
        name: `${PageName.ExpandableList}`,
        title: AppResourceIDs.expandable_list,
        baseRoute: `${ComponentsRoutes.ExpandableList}`,
        description: AppResourceIDs.expandable_list_description,
        route: [
          '/',
          `${AppRoutes.Components}`,
          `${ComponentsRoutes.ExpandableList}`,
        ],
      },
      //
      // ExpandablePanel ...
      {
        icon: XIconNames.list,
        id: `${PageName.ExpandablePanel}`,
        name: `${PageName.ExpandablePanel}`,
        title: AppResourceIDs.expandable_panel,
        baseRoute: `${ComponentsRoutes.ExpandablePanel}`,
        description: AppResourceIDs.expandable_panel_description,
        route: [
          '/',
          `${AppRoutes.Components}`,
          `${ComponentsRoutes.ExpandablePanel}`,
        ],
      },
      //
      // Slider ...
      {
        icon: XIconNames.list,
        id: `${PageName.Slider}`,
        name: `${PageName.Slider}`,
        title: AppResourceIDs.slider,
        baseRoute: `${ComponentsRoutes.Slider}`,
        description: AppResourceIDs.slider_description,
        route: ['/', `${AppRoutes.Components}`, `${ComponentsRoutes.Slider}`],
      },
      //
      // Stepper ...
      {
        icon: XIconNames.list,
        id: `${PageName.Stepper}`,
        name: `${PageName.Stepper}`,
        title: AppResourceIDs.stepper,
        baseRoute: `${ComponentsRoutes.Stepper}`,
        description: AppResourceIDs.stepper_description,
        route: ['/', `${AppRoutes.Components}`, `${ComponentsRoutes.Stepper}`],
      },
      //
      // Tabs ...
      {
        icon: XIconNames.list,
        id: `${PageName.Tabs}`,
        name: `${PageName.Tabs}`,
        title: AppResourceIDs.tabs,
        baseRoute: `${ComponentsRoutes.Tabs}`,
        description: AppResourceIDs.tabs_description,
        route: ['/', `${AppRoutes.Components}`, `${ComponentsRoutes.Tabs}`],
      },
      //
      // Table ...
      {
        icon: XIconNames.list,
        id: `${PageName.Table}`,
        name: `${PageName.Table}`,
        title: AppResourceIDs.table,
        baseRoute: `${ComponentsRoutes.Table}`,
        description: AppResourceIDs.tabs_description,
        route: ['/', `${AppRoutes.Components}`, `${ComponentsRoutes.Table}`],
      },
      //
      // Page ...
      {
        icon: XIconNames.list,
        id: `${PageName.Page}`,
        name: `${PageName.Page}`,
        title: AppResourceIDs.page,
        baseRoute: `${ComponentsRoutes.Page}`,
        description: AppResourceIDs.page_description,
        route: ['/', `${AppRoutes.Components}`, `${ComponentsRoutes.Page}`],
      },
      //
      // TabNavigator ...
      {
        icon: XIconNames.list,
        id: `${PageName.TabNavigator}`,
        name: `${PageName.TabNavigator}`,
        title: AppResourceIDs.tab_navigator,
        baseRoute: `${ComponentsRoutes.TabNavigator}`,
        description: AppResourceIDs.tab_navigator_description,
        route: [
          '/',
          `${AppRoutes.Components}`,
          `${ComponentsRoutes.TabNavigator}`,
        ],
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

  //
  MarkDown: PageIndex.Components.childs[10],
  ExpandableList: PageIndex.Components.childs[11],
  ExpandablePanel: PageIndex.Components.childs[12],
  Slider: PageIndex.Components.childs[13],
  Stepper: PageIndex.Components.childs[14],
  Tabs: PageIndex.Components.childs[15],
  Table: PageIndex.Components.childs[16],
  Page: PageIndex.Components.childs[17],
  TabNavigator: PageIndex.Components.childs[18],
};

//
// Admin Navigator Pages ...
export const NavPageItems: XNavigatorListItem[] = [
  //
  //#region Home ...
  {
    ...toNavigatiorListItem(PageIndex.Home),
  },
  //#endregion

  //
  //#region Components ...
  {
    ...toNavigatiorListItem(PageIndex.Components),
  },
  //#endregion

  //
  // Test ...
  {
    id: '3',
    // data: Pages.Home,
    title: Pages.Home.title,
    routerDirection: 'root',
    //
    // Comment this for Prevent Routing Change ...
    href: Pages.Home.route,
    description: Pages.Home.description,
  },
];
//#endregion
