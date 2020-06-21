import { XPage } from 'x-framework-core';
import { AppResourceIDs } from './app.localization.config';
import { XIconNames, XNavigatorListItem } from 'x-framework-components';

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
      //
      // MarkDown ...
      {
        id: PageName.MarkDown.toString(),
        name: PageName.MarkDown.toString(),
        title: AppResourceIDs.markdown,
        description: AppResourceIDs.markdown_description,
        route: `${AppRoutes.Components}/${ComponentsRoutes.MarkDown}`,
        icon: XIconNames.list,
      },
      //
      // ExpandableList ...
      {
        id: PageName.ExpandableList.toString(),
        name: PageName.ExpandableList.toString(),
        title: AppResourceIDs.expandable_list,
        description: AppResourceIDs.expandable_list_description,
        route: `${AppRoutes.Components}/${ComponentsRoutes.ExpandableList}`,
        icon: XIconNames.list,
      },
      //
      // ExpandablePanel ...
      {
        id: PageName.ExpandablePanel.toString(),
        name: PageName.ExpandablePanel.toString(),
        title: AppResourceIDs.expandable_panel,
        description: AppResourceIDs.expandable_panel_description,
        route: `${AppRoutes.Components}/${ComponentsRoutes.ExpandablePanel}`,
        icon: XIconNames.list,
      },
      //
      // Slider ...
      {
        id: PageName.Slider.toString(),
        name: PageName.Slider.toString(),
        title: AppResourceIDs.slider,
        description: AppResourceIDs.slider_description,
        route: `${AppRoutes.Components}/${ComponentsRoutes.Slider}`,
        icon: XIconNames.list,
      },
      //
      // Stepper ...
      {
        id: PageName.Stepper.toString(),
        name: PageName.Stepper.toString(),
        title: AppResourceIDs.stepper,
        description: AppResourceIDs.stepper_description,
        route: `${AppRoutes.Components}/${ComponentsRoutes.Stepper}`,
        icon: XIconNames.list,
      },
      //
      // Tabs ...
      {
        id: PageName.Tabs.toString(),
        name: PageName.Tabs.toString(),
        title: AppResourceIDs.tabs,
        description: AppResourceIDs.tabs_description,
        route: `${AppRoutes.Components}/${ComponentsRoutes.Tabs}`,
        icon: XIconNames.list,
      },
      //
      // Table ...
      {
        id: PageName.Table.toString(),
        name: PageName.Table.toString(),
        title: AppResourceIDs.table,
        description: AppResourceIDs.tabs_description,
        route: `${AppRoutes.Components}/${ComponentsRoutes.Table}`,
        icon: XIconNames.list,
      },
      //
      // Page ...
      {
        id: PageName.Page.toString(),
        name: PageName.Page.toString(),
        title: AppResourceIDs.page,
        description: AppResourceIDs.page_description,
        route: `${AppRoutes.Components}/${ComponentsRoutes.Page}`,
        icon: XIconNames.list,
      },
      //
      // TabNavigator ...
      {
        id: PageName.TabNavigator.toString(),
        name: PageName.TabNavigator.toString(),
        title: AppResourceIDs.tab_navigator,
        description: AppResourceIDs.tab_navigator_description,
        route: `${AppRoutes.Components}/${ComponentsRoutes.TabNavigator}`,
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
    id: '1',
    // data: Pages.Home,
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
        // data: Pages.Tools,
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
    // data: Pages.Components,
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
        // data: Pages.SmallComponents,
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
        // data: Pages.Card,
        title: Pages.Card.title,
        routerDirection: 'root',
        href: ['/', Pages.Components.route, ComponentsRoutes.Card.toString()],
        description: Pages.Card.description,
      },
      //
      // Icon ...
      {
        id: '22',
        // data: Pages.Icon,
        title: Pages.Icon.title,
        routerDirection: 'root',
        href: ['/', Pages.Components.route, ComponentsRoutes.Icon.toString()],
        description: Pages.Icon.description,
      },
      //
      // Counter ...
      {
        id: '23',
        // data: Pages.Counter,
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
        // data: Pages.Fab,
        title: Pages.Fab.title,
        routerDirection: 'root',
        href: ['/', Pages.Components.route, ComponentsRoutes.Fab.toString()],
        description: Pages.Fab.description,
      },
      //
      // FileUpload ...
      {
        id: '25',
        // data: Pages.FileUpload,
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
        // data: Pages.Form,
        title: Pages.Form.title,
        routerDirection: 'root',
        href: ['/', Pages.Components.route, ComponentsRoutes.Form.toString()],
        description: Pages.Form.description,
      },
      //
      // Grid ...
      {
        id: '27',
        // data: Pages.Grid,
        title: Pages.Grid.title,
        routerDirection: 'root',
        href: ['/', Pages.Components.route, ComponentsRoutes.Grid.toString()],
        description: Pages.Grid.description,
      },
      //
      // List ...
      {
        id: '28',
        // data: Pages.List,
        title: Pages.List.title,
        routerDirection: 'root',
        href: ['/', Pages.Components.route, ComponentsRoutes.List.toString()],
        description: Pages.List.description,
      },
      //
      // Map ...
      {
        id: '29',
        // data: Pages.Map,
        title: Pages.Map.title,
        routerDirection: 'root',
        href: ['/', Pages.Components.route, ComponentsRoutes.Map.toString()],
        description: Pages.Map.description,
      },
      //
      // MarkDown ...
      {
        id: '30',
        // data: Pages.MarkDown,
        title: Pages.MarkDown.title,
        routerDirection: 'root',
        href: [
          '/',
          Pages.Components.route,
          ComponentsRoutes.MarkDown.toString(),
        ],
        description: Pages.MarkDown.description,
      },
      //
      // ExpandableList ...
      {
        id: '31',
        // data: Pages.ExpandableList,
        title: Pages.ExpandableList.title,
        routerDirection: 'root',
        href: [
          '/',
          Pages.Components.route,
          ComponentsRoutes.ExpandableList.toString(),
        ],
        description: Pages.ExpandableList.description,
      },
      //
      // ExpandablePanel ...
      {
        id: '32',
        // data: Pages.ExpandablePanel,
        title: Pages.ExpandablePanel.title,
        routerDirection: 'root',
        href: [
          '/',
          Pages.Components.route,
          ComponentsRoutes.ExpandablePanel.toString(),
        ],
        description: Pages.ExpandablePanel.description,
      },
      //
      // Slider ...
      {
        id: '33',
        // data: Pages.Slider,
        title: Pages.Slider.title,
        routerDirection: 'root',
        href: ['/', Pages.Components.route, ComponentsRoutes.Slider.toString()],
        description: Pages.Slider.description,
      },
      //
      // Stepper ...
      {
        id: '34',
        // data: Pages.Stepper,
        title: Pages.Stepper.title,
        routerDirection: 'root',
        href: [
          '/',
          Pages.Components.route,
          ComponentsRoutes.Stepper.toString(),
        ],
        description: Pages.Stepper.description,
      },
      //
      // Tabs ...
      {
        id: '35',
        // data: Pages.Tabs,
        title: Pages.Tabs.title,
        routerDirection: 'root',
        href: ['/', Pages.Components.route, ComponentsRoutes.Tabs.toString()],
        description: Pages.Tabs.description,
      },
      //
      // Table ...
      {
        id: '36',
        // data: Pages.Table,
        title: Pages.Table.title,
        routerDirection: 'root',
        href: ['/', Pages.Components.route, ComponentsRoutes.Table.toString()],
        description: Pages.Table.description,
      },
      //
      // Page ...
      {
        id: '37',
        // data: Pages.Page,
        title: Pages.Page.title,
        routerDirection: 'root',
        href: ['/', Pages.Components.route, ComponentsRoutes.Page.toString()],
        description: Pages.Page.description,
      },
      //
      // TabNavigator ...
      {
        id: '38',
        // data: Pages.TabNavigator,
        title: Pages.TabNavigator.title,
        routerDirection: 'root',
        href: [
          '/',
          Pages.Components.route,
          ComponentsRoutes.TabNavigator.toString(),
        ],
        description: Pages.TabNavigator.description,
      },
    ],
  },
  //#endregion

  //
  // Test ...
  {
    id: '1',
    // data: Pages.Home,
    title: Pages.Home.title,
    routerDirection: 'root',
    //
    // Comment this for Prevent Routing Change ...
    href: ['/', Pages.Home.route],
    description: Pages.Home.description,
  },
];
//#endregion
